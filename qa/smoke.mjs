import { chromium } from 'playwright';
import { readFile, access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='http://127.0.0.1:4173/';
const paths=['','en/','es/'];
const pages=['index.html','music.html','discography.html','about.html','collaborations.html','press.html','privacy.html','legal.html'];
const problems=[];
const report=[];
await mkdir(path.join(root,'qa','screenshots'),{recursive:true});

for(const lang of ['','en/','es/']){
 for(const file of pages){
  const content=await readFile(path.join(root,lang,file),'utf8');
  if(!content.includes('assets/css/lunex-v2.css'))problems.push(lang+file+' missing design-system stylesheet');
  if((content.match(/<h1\b/g)||[]).length!==1)problems.push(lang+file+' has invalid H1 count');
  if(!content.includes('rel="canonical"'))problems.push(lang+file+' missing canonical');
  for(const m of content.matchAll(/(?:href|src)="([^"]+)"/g)){
   const value=m[1];
   if(/^(?:https?:|mailto:|tel:|data:|#|javascript:)/.test(value))continue;
   const rel=value.split(/[?#]/)[0];
   if(!rel)continue;
   const target=path.resolve(root,lang,rel);
   if(!target.startsWith(root))continue;
   try{await access(target)}catch{problems.push(lang+file+' missing local file '+rel)}
  }
 }
}
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try{
 for(const lang of paths){
  for(const width of [390,768,1440]){
   const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
   const pageErrors=[];
   page.on('pageerror',e=>pageErrors.push(e.message));
   const res=await page.goto(base+lang,{waitUntil:'load',timeout:30000});
   if(!res||res.status()!==200)problems.push(lang+' '+width+' HTTP status '+res?.status());
   const h1=page.locator('main h1');
   if(await h1.count()!==1||!(await h1.isVisible()))problems.push(lang+' '+width+' missing visible H1');
   const audios=page.locator('main audio[controls]');
   if(await audios.count()!==3)problems.push(lang+' '+width+' audio count');
   for(let i=0;i<await audios.count();i++){
    if(!(await audios.nth(i).isVisible()))problems.push(lang+' '+width+' hidden preview player '+i);
   }
   const dims=await page.evaluate(()=>{
    const t=document.querySelector('.lx2-display');
    const r=t?.getBoundingClientRect();
    return {documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,heroRight:r?.right||0,heroLeft:r?.left||0};
   });
   if(dims.documentWidth>dims.viewport+2)problems.push(lang+' '+width+' horizontal overflow '+JSON.stringify(dims));
   if(dims.heroRight>dims.viewport+2||dims.heroLeft< -2)problems.push(lang+' '+width+' hero cropped '+JSON.stringify(dims));
   if(width<=768){
    const trigger=page.locator('.lx-mobile-menu summary');
    if(!(await trigger.isVisible()))problems.push(lang+' '+width+' mobile menu trigger hidden');
    else{
     await trigger.click();
     if(!(await page.locator('.lx-mobile-menu').getAttribute('open')!==null))problems.push(lang+' '+width+' mobile menu failed to open');
    }
   }
   await page.screenshot({path:path.join(root,'qa','screenshots',(lang||'it').replace('/','')+'-'+width+'.png'),fullPage:true,animations:'disabled'});
   if(pageErrors.length)problems.push(lang+' '+width+' JS errors: '+pageErrors.join(' | '));
   report.push({language:lang||'it',width,...dims,errors:pageErrors.length});
   await page.close();
  }
 }
}finally{await browser.close()}
console.log(JSON.stringify({checkedPages:24,renderedViewports:report.length,report,problems},null,2));
if(problems.length)process.exitCode=1;
