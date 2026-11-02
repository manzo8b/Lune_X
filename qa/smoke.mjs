import { chromium, firefox, webkit } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { readFile, access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='http://127.0.0.1:4173/';
const langs=['','en/','es/'];
const pages=['index.html','music.html','discography.html','about.html','collaborations.html','press.html','privacy.html','legal.html'];
const problems=[],report=[],axe=[];
await mkdir(path.join(root,'qa','screenshots'),{recursive:true});

for(const lang of langs){
 for(const file of pages){
  const html=await readFile(path.join(root,lang,file),'utf8');
  if(!html.includes('assets/css/lunex-v2.css'))problems.push(lang+file+' missing design stylesheet');
  if((html.match(/<h1\b/g)||[]).length!==1)problems.push(lang+file+' invalid H1 count');
  if(!html.includes('rel="canonical"'))problems.push(lang+file+' missing canonical');
  for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   const raw=m[1];
   if(/^(?:https?:|mailto:|tel:|data:|#|javascript:)/.test(raw))continue;
   const rel=raw.split(/[?#]/)[0];if(!rel)continue;
   const target=path.resolve(root,lang,rel);
   if(!target.startsWith(root))continue;
   try{await access(target)}catch{problems.push(lang+file+' missing file '+rel)}
  }
 }
 const home=await readFile(path.join(root,lang,'index.html'),'utf8');
 for(const section of ['top','anteprime','discografia','visuals','storia','artista-ospite','social','collabora']){
  if(!home.includes('id="'+section+'"'))problems.push(lang+' missing preserved section '+section);
 }
 if((home.match(/class="lx3-release"/g)||[]).length!==10)problems.push(lang+' incorrect discography count');
}
for(const [browserName,engine] of Object.entries({chromium,firefox,webkit})){
 const browser=await engine.launch({headless:true});
 try{
  for(const lang of langs){
   for(const width of [320,390,768,1024,1440]){
    const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const res=await page.goto(base+lang,{waitUntil:'load',timeout:45000});
    if(res?.status()!==200)problems.push(browserName+' '+lang+' '+width+' HTTP '+res?.status());
    if(await page.locator('main h1').count()!==1)problems.push(browserName+' '+lang+' '+width+' H1 missing');
    if(await page.locator('main audio[controls]').count()!==3)problems.push(browserName+' '+lang+' '+width+' previews unavailable');
    if(await page.locator('.lx3-release').count()!==10)problems.push(browserName+' '+lang+' '+width+' discography missing');
    const measured=await page.evaluate(()=>{
     const header=document.querySelector('.lx-site-header');
     const hero=document.querySelector('.lx2-hero-art');
     const heading=document.querySelector('.lx2-display');
     const r=heading?.getBoundingClientRect();
     const el=document.documentElement;
     const sections=['.lx2-feature','.lx2-statement','.lx2-collab','.lx-site-footer'].map(x=>{
      const e=document.querySelector(x);return {name:x,bg:e?getComputedStyle(e).backgroundColor:null};
     });
     return {documentWidth:el.scrollWidth,viewport:innerWidth,headingRight:r?.right||0,headingLeft:r?.left||0,header:header?getComputedStyle(header).backgroundColor:null,heroArt:hero?getComputedStyle(hero).backgroundImage:null,sections};
    });
    if(measured.documentWidth>width+2)problems.push(browserName+' '+lang+' '+width+' horizontal overflow '+measured.documentWidth);
    if(measured.headingRight>width+2||measured.headingLeft< -2)problems.push(browserName+' '+lang+' '+width+' heading cropped');
    if(!measured.heroArt?.includes('data:image/jpeg;base64'))problems.push(browserName+' '+lang+' '+width+' approved logo not displayed');
    for(const sec of measured.sections)if(/rgb\(196, 36, 31\)|rgb\(16, 16, 16\)|rgb\(17, 17, 17\)/.test(sec.bg||''))problems.push(browserName+' '+lang+' '+width+' dark/red background '+sec.name+':'+sec.bg);
    if(width<=1024){
      const trigger=page.locator('.lx-mobile-menu summary');
      if(!(await trigger.isVisible()))problems.push(browserName+' '+lang+' '+width+' mobile menu hidden');
      else{await trigger.click();if(await page.locator('.lx-mobile-menu').getAttribute('open')===null)problems.push(browserName+' '+lang+' '+width+' menu fails to open')}
    }
    if(errors.length)problems.push(browserName+' '+lang+' '+width+' JS errors '+errors.join(' | '));
    if(browserName==='chromium'){
      await page.screenshot({path:path.join(root,'qa','screenshots',(lang||'it').replace('/','')+'-'+width+'.png'),fullPage:true,animations:'disabled'});
      if(width===390||width===1440){
       const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
       axe.push({lang:lang||'it',width,violations:a.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,count:v.nodes.length}))});
      }
    }
    report.push({browser:browserName,lang:lang||'it',width,...measured,errors:errors.length});
    await page.close();
   }
  }
 }finally{await browser.close()}
}
await writeFile(path.join(root,'qa','quality-results.json'),JSON.stringify({checkedPages:24,renderedViewports:report.length,report,axe,problems},null,2));
console.log(JSON.stringify({checkedPages:24,renderedViewports:report.length,browserEngines:3,axe,problems},null,2));
if(problems.length)process.exitCode=1;
