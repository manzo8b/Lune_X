import fs from 'node:fs/promises';import os from 'node:os';import path from 'node:path';
import {renderPoster,renderReel,digest} from './renderer.mjs';
const endpoint='https://bjydnaejpxwubmxpnpnv.supabase.co/functions/v1/lunex-studio-render';
async function token(){
 const url=new URL(process.env.ACTIONS_ID_TOKEN_REQUEST_URL);url.searchParams.set('audience','lunex-studio-media');
 const r=await fetch(url,{headers:{Authorization:'Bearer '+process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN}});if(!r.ok)throw Error('GitHub identity unavailable');return (await r.json()).value;
}
async function api(action,body={}){const t=await token();const r=await fetch(endpoint,{method:'POST',headers:{Authorization:'Bearer '+t,'Content-Type':'application/json'},body:JSON.stringify({action,...body}),signal:AbortSignal.timeout(110000)});const data=await r.json();if(!r.ok)throw Error(data.error||`Render HTTP ${r.status}`);return data;}
async function download(row,dest){
 if(new URL(row.url).hostname!=='bjydnaejpxwubmxpnpnv.supabase.co')throw Error('Source host rejected');
 const r=await fetch(row.url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('Private asset download failed');const b=Buffer.from(await r.arrayBuffer());if(digest(b)!==row.sha256)throw Error('Source integrity failed');await fs.writeFile(dest,b);return dest;
}
async function upload(claim,file,qc,index,extra=false){
 const reserved=await api('prepare',{...claim.task,index,extra_reel:extra,task:claim.task.id});
 const r=await fetch(reserved.url,{method:'PUT',headers:{'Content-Type':file.endsWith('.mp4')?'video/mp4':'image/png','x-upsert':'false'},body:await fs.readFile(file)});if(!r.ok)throw Error('Private deliverable upload failed');
 return api('complete',{task:claim.task.id,lease:claim.task.lease,id:reserved.id,qc});
}
const dir=await fs.mkdtemp(path.join(os.tmpdir(),'lunex-media-'));let claim;
try{
 if(process.env.LUNEX_DIAGNOSTIC==='true'){const probe=await api('probe');if(!probe.ok||probe.claimed_work!==false||probe.model_calls!==0)throw Error('Diagnostic rejected');console.log(JSON.stringify({diagnostic:true,...probe}));}else{
 claim=await api('claim');if(claim.idle){console.log('No approved media work; no model call.');process.exitCode=0;}
 else{
  const sources={};for(const row of claim.sources)sources[row.role]=await download(row,path.join(dir,row.filename));
  if(!sources.source_logo||!sources.source_font)throw Error('Official logo or licensed font missing');
  const posters=[],reelScenes=[];
  for(const item of claim.plan.items){
   const art=await api('image',{task:claim.task.id,lease:claim.task.lease,index:item.index});
   const artPath=await download(art.file,path.join(dir,`art-${item.index}.png`)),out=path.join(dir,`poster-${item.index}.png`);
   const q=await renderPoster(item,artPath,sources.source_logo,sources.source_font,out);posters.push(out);
   if(claim.plan.extra_reel&&item.index<3){const vertical=path.join(dir,`reel-scene-${item.index}.png`);await renderPoster({...item,height:1920},artPath,sources.source_logo,sources.source_font,vertical);reelScenes.push(vertical);}
   if(['reel','short'].includes(item.format)){
    const reel=await renderReel([out,out,out],sources.source_audio,sources.source_font,await fs.mkdtemp(path.join(dir,'video-')));await upload(claim,reel.file,reel.qc,item.index);
   }else await upload(claim,out,q,item.index);
  }
  if(claim.plan.extra_reel&&sources.source_audio){
   const reel=await renderReel(reelScenes,sources.source_audio,sources.source_font,dir);await upload(claim,reel.file,reel.qc,null,true);
  }
  const result=await api('finish',{task:claim.task.id,lease:claim.task.lease});console.log(JSON.stringify({state:result.result.status,task_id:result.result.task_id,publication:false}));
 }
 }
}catch(e){
 const message=String(e.message).replace(/https?:\/\/\S+/g,'[URL omitted]').slice(0,400);
 if(claim?.task)await api('fail',{task:claim.task.id,lease:claim.task.lease,error:message}).catch(()=>{});
 console.error(message);process.exitCode=1;
}finally{await fs.rm(dir,{recursive:true,force:true});}
