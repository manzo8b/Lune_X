// Convert the exact two JPEGs from the approved reference template, already
// embedded in the working stylesheet, into cacheable locally hosted WebP files.
// The source artwork is preserved without recreating or changing the logo.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import sharp from 'sharp';
const file='assets/css/lunex-v2.css';
let css=await readFile(file,'utf8');
const dataUrls=[...new Set([...css.matchAll(/data:image\/jpeg;base64,[A-Za-z0-9+/=]+/g)].map(m=>m[0]))];
if(dataUrls.length!==2)throw Error('Expected 2 embedded template originals; found '+dataUrls.length);
const sorted=dataUrls.sort((a,b)=>a.length-b.length);
const items=[{url:sorted[0],name:'lunex-reference-wordmark.webp',quality:88},{url:sorted[1],name:'lunex-reference-hero.webp',quality:87}];
await mkdir('assets/images',{recursive:true});
for(const item of items){
 const jpeg=Buffer.from(item.url.split(',')[1],'base64');
 const filename='assets/images/'+item.name;
 const data=await sharp(jpeg).webp({quality:item.quality,effort:6}).toBuffer();
 await writeFile(filename,data);
 css=css.split(item.url).join('../images/'+item.name);
 console.log(JSON.stringify({file:filename,originalBytes:jpeg.length,optimizedBytes:data.length}));
}
await writeFile(file,css);
