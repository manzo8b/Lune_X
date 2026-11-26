import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import sharp from 'sharp';
import * as fontkit from 'fontkit';
export const digest=b=>createHash('sha256').update(b).digest('hex');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function typePath(font,text,x,y,size,color,maxWidth=936,tracking=0){
 const run=font.layout(String(text));let width=0;for(const p of run.positions)width+=p.xAdvance;
 const scale=Math.min(size/font.unitsPerEm,maxWidth/(width+Math.max(0,run.glyphs.length-1)*tracking*font.unitsPerEm/size));let cursor=0;
 const output=run.glyphs.map((g,i)=>{const p=run.positions[i],d=g.path.toSVG(),s=`<path d="${d}" transform="translate(${x+(cursor+p.xOffset)*scale},${y-p.yOffset*scale}) scale(${scale},${-scale})" fill="${color}"/>`;cursor+=p.xAdvance+tracking/scale;return s;});
 return output.join('');
}
export async function renderPoster(item,art,logo,fontFile,target){
 const W=1080,H=item.height,dark=item.dark===true,story=H===1920,ink=dark?'#F7F3EC':'#111111',paper=dark?'#0A0A0B':'#F7F3EC',red='#F12B28';
 let font=fontkit.openSync(fontFile);if(font.variationAxes?.wght)font=font.getVariation({wght:850});
 let normal=fontkit.openSync(fontFile);if(normal.variationAxes?.wght)normal=normal.getVariation({wght:500});
 const top=story?308:112,artY=story?565:365,artH=story?885:725;
 // The generated scene is the art; native path typography preserves exact wording.
 const scene=await sharp(art).rotate().resize(936,artH,{fit:'cover',position:'centre'}).png().toBuffer();
 const mark=await sharp(logo).rotate().resize(94,94,{fit:'contain',background:'#FFFFFF'}).png().toBuffer();
 const parts=[`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="${paper}"/>`,typePath(normal,item.eyebrow||'LUNE_X',72,top-37,20,ink,760,3.2),`<rect x="72" y="${top-14}" width="36" height="5" fill="${red}"/>`];
 let lineY=top+88;for(const line of item.lines.slice(0,3)){parts.push(typePath(font,line,65,lineY,111,ink,950,-1.5));lineY+=105;}
 parts.push(`<line x1="72" y1="${artY-23}" x2="1008" y2="${artY-23}" stroke="${ink}" stroke-opacity=".22"/>`);
 const footer=story?1531:1164;
 parts.push(typePath(normal,item.line||'',72,footer,story?30:28,ink,936));
 parts.push(typePath(font,'Lune_X',72,footer+78,42,ink,650));
 parts.push(typePath(normal,story?'SCOPRI L’ALBUM · LINK IN BIO':(item.album||'LUNE_X MUSIC'),72,footer+122,18,ink,840,1.6));
 parts.push(`<rect x="895" y="${footer+18}" width="113" height="113" fill="#FFF"/><line x1="72" y1="${footer+153}" x2="1008" y2="${footer+153}" stroke="${ink}" stroke-opacity=".22"/></svg>`);
 const svg=Buffer.from(parts.join(''));
 await sharp({create:{width:W,height:H,channels:3,background:paper}}).composite([{input:scene,left:72,top:artY},{input:svg,left:0,top:0,blend:'over'},{input:scene,left:72,top:artY},{input:mark,left:905,top:footer+27}]).png({compressionLevel:8}).toFile(target);
 const raw=await fs.readFile(target),meta=await sharp(raw).metadata();await sharp(raw).raw().toBuffer();
 if(meta.width!==W||meta.height!==H)throw Error('PNG dimensions failed');
 return {decoded:true,sha256:digest(raw),size_bytes:raw.length,width:W,height:H,text_rendering:'font outlines, no generated lettering',safe_zone:story?{left:72,right:72,top:250,bottom:250}:null,creative_review:'MF required',generator:'FLUX.2 klein 4B',original_logo:true,original_face_redrawn:false};
}
export async function renderReel(images,audio,fontFile,dest,{ffmpeg='ffmpeg',ffprobe='ffprobe'}={}){
 if(images.length<3||!audio)throw Error('Three finished images and a music excerpt required');
 const inputs=images.slice(0,3).flatMap(f=>['-loop','1','-framerate','30','-i',f]);
 const filters=images.slice(0,3).map((_,i)=>`[${i}:v]scale=1200:2134:force_original_aspect_ratio=increase,crop=1200:2134,zoompan=z='1.04+0.00065*on':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=1:s=1080x1920:fps=30,trim=duration=4,setpts=PTS-STARTPTS,setsar=1[v${i}]`).join(';')+';[v0][v1][v2]concat=n=3:v=1:a=0,format=yuv420p[v]';
 const target=path.join(dest,'reel.mp4');
 execFileSync(ffmpeg,['-hide_banner','-loglevel','error','-nostdin','-n',...inputs,'-i',audio,'-filter_complex',filters,'-map','[v]','-map','3:a','-af','atrim=0:12,asetpts=PTS-STARTPTS,afade=t=in:d=0.08,afade=t=out:st=11.3:d=0.7,loudnorm=I=-16:TP=-1.5:LRA=9','-t','12','-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709',target],{stdio:['ignore','ignore','pipe'],timeout:360000});
 execFileSync(ffmpeg,['-v','error','-i',target,'-f','null','-'],{stdio:['ignore','ignore','pipe'],timeout:120000});
 const probe=JSON.parse(execFileSync(ffprobe,['-v','quiet','-show_format','-show_streams','-of','json',target],{encoding:'utf8'}));
 const v=probe.streams.find(s=>s.codec_type==='video'),a=probe.streams.find(s=>s.codec_type==='audio');
 // Analyze the encoded output, not merely the requested normalization target.
 const {spawnSync}=await import('node:child_process');
 const measured=spawnSync(ffmpeg,['-hide_banner','-i',target,'-af','loudnorm=I=-16:TP=-1.5:LRA=9:print_format=json','-f','null','-'],{encoding:'utf8',timeout:120000});
 if(measured.status!==0)throw Error('Loudness QC failed');
 const match=measured.stderr.match(/\{\s*"input_i"[\s\S]*?\}/);if(!match)throw Error('Loudness measurement absent');const levels=JSON.parse(match[0]);
 if(v?.width!==1080||v?.height!==1920||v?.codec_name!=='h264'||a?.codec_name!=='aac'||!Number.isFinite(Number(levels.input_i))||Number(levels.input_tp)>-1||Math.abs(Number(probe.format.duration)-12)>0.1)throw Error('Reel QC failed');
 const raw=await fs.readFile(target);const frames=[];
 for(const [i,at]of [0.4,3.5,4.3,7.5,8.5,11.5].entries()){
  const file=path.join(dest,`frame-${i}.jpg`);execFileSync(ffmpeg,['-v','error','-ss',String(at),'-i',target,'-frames:v','1','-q:v','2',file],{stdio:'ignore'});frames.push(file);
 }
 return {file:target,frames,qc:{decoded:true,full_decode:true,sha256:digest(raw),size_bytes:raw.length,width:v.width,height:v.height,duration_seconds:Number(probe.format.duration),fps:v.avg_frame_rate,video_codec:v.codec_name,audio_codec:a.codec_name,measured_lufs:Number(levels.input_i),measured_true_peak_dbtp:Number(levels.input_tp),creative_review:'MF required',audio_rights:'MF verification required before publication',audio_source_sha256:digest(await fs.readFile(audio)),original_master_modified:false,motion:'three 4-second moving compositions, centered push-in, cuts, music excerpt'}};
}
