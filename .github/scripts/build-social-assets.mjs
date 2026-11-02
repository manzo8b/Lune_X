(async function generateSocial(){
  const fs=await import("node:fs/promises");
  const path=await import("node:path");
  const sharp=(await import("sharp")).default;
  const outDir="assets/social";
  await fs.mkdir(outDir,{recursive:true});
  const logo=await sharp("assets/images/lunex-logo-header.avif").resize({width:300,withoutEnlargement:true}).png().toBuffer();
  const logoData="data:image/png;base64,"+logo.toString("base64");
  const songs=[
    {slug:"frattura-notturna",title:["FRATTURA","NOTTURNA"],eyebrow:"01 / TRASFORMAZIONE",tag:"Quando la notte cambia direzione",art:"frattura-notturna-art.svg",one:"#ef2f91",two:"#6c2a9f",three:"#ff9ccc"},
    {slug:"in-the-dark-we-see",title:["IN THE DARK","WE SEE"],eyebrow:"02 / INTIMITÀ",tag:"La musica dice più delle parole",art:"in-the-dark-art.svg",one:"#d665c7",two:"#46349d",three:"#dca6f6"},
    {slug:"next-stop-torremolinos",title:["NEXT STOP","TORREMOLINOS"],eyebrow:"03 / LIBERTÀ",tag:"Ritmo, viaggio e Mediterraneo",art:"next-stop-torremolinos-art.svg",one:"#fc6a9f",two:"#ad429b",three:"#fabc99"}
  ];
  const escapeXml=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
  for(const song of songs){
    const art=await sharp("assets/images/"+song.art).resize(580,580,{fit:"cover"}).png().toBuffer();
    const artData="data:image/png;base64,"+art.toString("base64");
    const size=song.slug==="next-stop-torremolinos"?53:song.slug==="in-the-dark-we-see"?71:80;
    const bars=Array.from({length:23},(_,i)=>{const h=Math.round(20+Math.abs(Math.sin(i*.49)*Math.cos(i*.22))*95);return `<rect x="${65+i*14}" y="${683-h/2}" width="8" height="${h}" rx="4"/>`}).join("");
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1080" viewBox="0 0 1080 1080">
      <defs><linearGradient id="bg"><stop stop-color="#fffdfd"/><stop offset=".54" stop-color="#fff2f9"/><stop offset="1" stop-color="#f8d7f0"/></linearGradient><radialGradient id="glow"><stop stop-color="${song.three}" stop-opacity=".73"/><stop offset="1" stop-color="${song.three}" stop-opacity="0"/></radialGradient><linearGradient id="btn"><stop stop-color="${song.one}"/><stop offset="1" stop-color="${song.two}"/></linearGradient><linearGradient id="ink"><stop stop-color="#291331"/><stop offset=".75" stop-color="#63134c"/><stop offset="1" stop-color="${song.one}"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="18"/></filter><clipPath id="art"><rect x="528" y="318" width="494" height="494" rx="30"/></clipPath></defs>
      <rect width="1080" height="1080" fill="url(#bg)"/><circle cx="830" cy="250" r="490" fill="url(#glow)" opacity=".47"/><path d="M-25 146Q270 -50 505 113T1110 95" stroke="#f398d4" stroke-width="7" fill="none" opacity=".55"/><path d="M-25 177Q270 -14 515 145T1110 124" stroke="#fff" stroke-width="5" fill="none" opacity=".8"/><path d="M-20 916Q260 770 520 921T1110 935" stroke="#fff" stroke-width="7" fill="none" opacity=".8"/>
      <image xlink:href="${logoData}" x="62" y="55" width="300" height="102" preserveAspectRatio="xMinYMid meet"/>
      <text x="62" y="235" font-family="DejaVu Sans,Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="3.6" fill="${song.two}">${escapeXml(song.eyebrow)}</text><rect x="63" y="262" width="102" height="6" rx="3" fill="${song.one}"/>
      <text x="61" y="344" font-family="DejaVu Sans,Arial,sans-serif" font-size="${size}" font-weight="800" letter-spacing="-3" fill="url(#ink)">${song.title[0]}</text><text x="61" y="430" font-family="DejaVu Sans,Arial,sans-serif" font-size="${size}" font-weight="800" letter-spacing="-3" fill="url(#ink)">${song.title[1]}</text>
      <rect x="532" y="329" width="492" height="492" rx="30" fill="${song.two}" opacity=".31" filter="url(#shadow)"/><image xlink:href="${artData}" x="528" y="318" width="494" height="494" clip-path="url(#art)" preserveAspectRatio="xMidYMid slice"/><rect x="528" y="318" width="494" height="494" rx="30" fill="none" stroke="${song.one}" stroke-width="8"/>
      <g fill="${song.one}" opacity=".48">${bars}</g><text x="63" y="757" font-family="DejaVu Sans,Arial,sans-serif" font-size="19" fill="#674b64" font-weight="600">${escapeXml(song.tag)}</text>
      <rect x="62" y="829" width="368" height="76" rx="38" fill="url(#btn)"/><text x="101" y="876" font-family="DejaVu Sans,Arial,sans-serif" fill="#fff" font-weight="800" font-size="29">ASCOLTA LUNE_X</text><path d="M374 854L386 865L374 876" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="63" y="963" font-family="DejaVu Sans,Arial,sans-serif" font-size="21" font-weight="700" fill="#653157">Apple Music  ·  Spotify  ·  Sito ufficiale</text><text x="63" y="1007" font-family="DejaVu Sans,Arial,sans-serif" font-size="15" fill="#78596f">Lune_X  /  Direzione creativa umana  /  Produzione con IA</text>
      </svg>`;
    const file=path.join(outDir,song.slug+"-social-1080.jpg");
    await sharp(Buffer.from(svg)).jpeg({quality:90,mozjpeg:true}).toFile(file);
    console.log(file,(await fs.stat(file)).size);
  }
})();
