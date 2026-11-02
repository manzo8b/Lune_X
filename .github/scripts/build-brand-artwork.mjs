(async function generateLuneXBrandImages(){
  const fs=await import("node:fs/promises");
  const sharp=(await import("sharp")).default;
  const out="assets/images";
  const clamp=x=>Math.max(0,Math.min(255,Math.round(x)));
  const convert=async(input,output,mode)=>{
    const src=await sharp(input).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const {data,info}=src;
    for(let i=0;i<data.length;i+=4){
      const r=data[i],g=data[i+1],b=data[i+2],lum=.2126*r+.7152*g+.0722*b;
      const sat=(Math.max(r,g,b)-Math.min(r,g,b))/Math.max(1,Math.max(r,g,b));
      const colorful=sat>.14&&(r>g*1.04||b>g*1.13);
      let rr,gg,bb;
      if(mode==="logo"){
        // Neutralize the old lavender/pink canvas while retaining black lettering and brand-red symbol.
        if(lum>216){rr=255;gg=255;bb=255}
        else if(colorful&&r>g*1.12&&lum>60){
          const k=Math.min(1.16,Math.max(.55,lum/125));rr=clamp(215*k);gg=clamp(25*k);bb=clamp(32*k)
        }else{const k=lum<145?lum*.50:lum*.76;rr=gg=bb=clamp(k)}
      }else{
        // Music photography: rich blacks and brand-red highlights, white/neutral backgrounds.
        if(lum>234){rr=gg=bb=255}
        else if(lum>211&&sat<.2){rr=gg=bb=clamp(lum+10)}
        else if(colorful&&lum>38){
          const shade=Math.min(1.24,Math.max(.46,lum/130));
          rr=clamp(215*shade);gg=clamp(25*shade);bb=clamp(32*shade)
        }else{let v=lum<88?lum*.57:lum*.91;rr=gg=bb=clamp(v)}
      }
      data[i]=rr;data[i+1]=gg;data[i+2]=bb;data[i+3]=255;
    }
    await sharp(data,{raw:{width:info.width,height:info.height,channels:4}}).avif({quality:82,effort:6}).toFile(output);
    console.log("Brand image",output,(await fs.stat(output)).size);
  };
  await convert(out+"/lunex-logo-header.avif",out+"/lunex-logo-rbn.avif","logo");
  await convert(out+"/lunex-hero-headphones.avif",out+"/lunex-hero-rbn.avif","hero");

  // Retain original release covers; recolour only three decorative marketing mockups.
  for(const name of ["eclipse-dual-billboard","dark-desire-cassette","welcome-to-paradise-promo"]){
    await convert(out+"/"+name+".webp",out+"/"+name+"-rbn.avif","hero");
  }
  const base="assets/social";
  await fs.mkdir(base,{recursive:true});
  const logo=await sharp(out+"/lunex-logo-rbn.avif").resize({width:320}).png().toBuffer();
  const hero=await sharp(out+"/lunex-hero-rbn.avif").resize({width:510,height:330,fit:"cover"}).png().toBuffer();
  const logoUri="data:image/png;base64,"+logo.toString("base64"),heroUri="data:image/png;base64,"+hero.toString("base64");
  const og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">'
   +'<rect width="1200" height="630" fill="#ffffff"/><rect x="0" width="11" height="630" fill="#d71920"/>'
   +'<path d="M0 0H1200V9H0" stroke="#d71920" stroke-width="9"/><circle cx="1010" cy="94" r="270" fill="#f5f5f5"/>'
   +'<image xlink:href="'+logoUri+'" x="62" y="40" width="320" height="120" preserveAspectRatio="xMinYMid meet"/>'
   +'<text x="64" y="250" fill="#ad1219" font-family="DejaVu Sans,Arial,sans-serif" font-size="20" letter-spacing="3.5" font-weight="800">LUNE_X  /  MUSIC &amp; CREATIVE DIRECTION</text>'
   +'<text x="60" y="328" fill="#111111" font-family="DejaVu Sans,Arial,sans-serif" font-size="51" font-weight="900">A HUMAN VISION</text>'
   +'<text x="60" y="390" fill="#d71920" font-family="DejaVu Sans,Arial,sans-serif" font-size="53" font-weight="900">A NEW FREQUENCY</text>'
   +'<text x="65" y="444" fill="#333333" font-family="DejaVu Sans,Arial,sans-serif" font-size="23">Virtual artist · Electronic music · Listen now</text>'
   +'<rect x="60" y="492" width="328" height="68" rx="15" fill="#d71920"/><text x="98" y="535" fill="#fff" font-family="DejaVu Sans,Arial,sans-serif" font-size="23" font-weight="800">DISCOVER LUNE_X</text>'
   +'<image xlink:href="'+heroUri+'" x="660" y="154" width="490" height="328" preserveAspectRatio="xMidYMid slice"/>'
   +'<rect x="660" y="154" width="490" height="328" rx="20" stroke="#111111" stroke-width="6" fill="none"/>'
   +'<rect x="0" y="616" width="1200" height="14" fill="#111111"/></svg>';
  const path=base+"/lunex-site-open-graph-rbn-1200.jpg";
  await sharp(Buffer.from(og)).jpeg({quality:92,mozjpeg:true}).toFile(path);
  console.log("Brand image",path,(await fs.stat(path)).size);
})();