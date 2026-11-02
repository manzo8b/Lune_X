(async function applyLuneXNavigation(){
  const fs=await import("node:fs/promises");
  const path=await import("node:path");
  const base="https://manzo8b.github.io/Lune_X/";
  const apple="https://music.apple.com/it/artist/lune-x/6776382449";
  const spotify="https://open.spotify.com/artist/2uPEaolYUj7WisHdewH5vQ";
  const instagram="https://www.instagram.com/lune_x.it/";
  const t={
    it:{home:"Home",music:"Musica",disc:"Discografia",about:"Il progetto",collab:"Collaborazioni",press:"Press kit",legal:"Note legali",privacy:"Privacy",listen:"Apple Music",brand:"Musica virtuale · Direzione creativa umana",rail:"Un universo musicale, una visione umana",toplink:"Ascolta tre anteprime",menu:"Apri menu di navigazione",explore:"Esplora",platform:"Ascolta",business:"Collabora",footerKick:"Scopri la tua prossima frequenza",footerTitle:"La tua musica, il tuo momento",footerDesc:"Tre anteprime da ascoltare subito. Il catalogo completo sulle piattaforme ufficiali, e una porta aperta alle collaborazioni creative",footerListen:"Ascolta su Apple Music",footerCollab:"Proponi un progetto",footerIntro:"Un progetto musicale virtuale, con scelte artistiche e direzione creativa umane. Elettronica, intimità e paesaggi mediterranei",details:"Trasparenza e diritti",disclosure:"Lune_X dichiara l'utilizzo di strumenti generativi per la produzione musicale e la direzione creativa umana. Gli ascolti avvengono su servizi esterni con condizioni proprie. Nessun uso commerciale dei brani è autorizzato automaticamente: ogni proposta richiede verifica dei diritti della registrazione. Il sito non dispone di checkout, pubblicità o raccolta dati tramite moduli.",miniCollab:"Scopri le possibilità di collaborazione",crumb:"Sei qui",artist:"Lune_X · Visione umana, musica digitale",
      clTitle:"Il suono giusto cambia un luogo",clIntro:"Non vendiamo promesse o licenze automatiche. Mettiamo in dialogo la direzione creativa di Lune_X con locali, progetti digitali ed esperienze audiovisive. Raccontaci cosa immagini",clKicker:"Lune_X · Collaborazioni creative",clPrimary:"Parliamone su Instagram",clSecondary:"Consulta il press kit",clHead:"Tre territori da esplorare",cards:[["Atmosfere per locali","Idee musicali ed estetiche per bar, bistrot, beach club e hospitality. Si valutano concept e possibili utilizzi delle registrazioni solo dopo la verifica dei diritti"],["Contenuti e visual","Proposte editoriali, contenuti social e narrazioni visive che uniscono musica e identità. Ogni produzione ha un perimetro e un preventivo da definire"],["Progetti audiovisivi","Un concept per un video, una campagna o un'esperienza digitale può partire da una frequenza. Valutiamo compatibilità creativa, materiali e condizioni contrattuali"]],process:"Come nasce una collaborazione",steps:[["01 · Ascolto","Raccontaci il contesto, il pubblico, il calendario e il tipo di esperienza che vuoi realizzare"],["02 · Valutazione","Verifichiamo fattibilità, diritti della musica coinvolta e possibili modalità di utilizzo"],["03 · Proposta","Se il progetto è fattibile, definiamo contenuti, tempi, corrispettivi e condizioni prima di qualsiasi utilizzo"]],disclaimerTitle:"Diritti e trasparenza prima di tutto",disclaimer:"Lune_X è una realtà artistica virtuale con direzione creativa umana e produzione assistita da IA. L'invio di una richiesta non concede alcuna licenza. Eventuali accordi economici, inclusi diritti, esclusività e ambito d'uso, sono soggetti a verifica e definizione contrattuale. Le opere dell'artista umano ospite non fanno parte del catalogo Lune_X proposto per le collaborazioni",pressSmall:"Materiali ufficiali e identità del progetto"},
    en:{home:"Home",music:"Music",disc:"Discography",about:"About",collab:"Collaborate",press:"Press kit",legal:"Legal notices",privacy:"Privacy",listen:"Apple Music",brand:"Virtual music · Human creative direction",rail:"A musical universe, a human vision",toplink:"Listen to three previews",menu:"Open navigation menu",explore:"Explore",platform:"Listen",business:"Collaborate",footerKick:"Discover your next frequency",footerTitle:"Your music, your moment",footerDesc:"Three previews to play right now, the full catalogue on official music platforms, and an open door to creative collaboration",footerListen:"Listen on Apple Music",footerCollab:"Pitch a project",footerIntro:"A virtual music project led by human artistic decisions. Electronic sound, intimacy and Mediterranean atmospheres",details:"Transparency and rights",disclosure:"Lune_X discloses the use of generative tools in music production and its human creative direction. Listening services are third parties with their own terms. No automatic commercial permission to use recordings is granted: rights must be checked for every proposal. This website has no checkout, ads or data collection forms.",miniCollab:"Explore collaboration opportunities",crumb:"You are here",artist:"Lune_X · Human vision, digital music",
      clTitle:"The right sound transforms a place",clIntro:"We don't sell promises or grant automatic licences. We connect Lune_X's creative direction with venues, digital projects and audiovisual experiences. Tell us what you have in mind",clKicker:"Lune_X · Creative collaborations",clPrimary:"Contact us on Instagram",clSecondary:"View the press kit",clHead:"Three creative territories",cards:[["Music for spaces","Musical and aesthetic ideas for bars, bistros, beach clubs and hospitality. Recording uses are considered only after a rights review"],["Content and visuals","Editorial concepts, social content and visual storytelling that combine music and identity. Scope and pricing are agreed individually"],["Audiovisual projects","A video, campaign or digital experience can begin with a frequency. We assess artistic fit, source materials and contractual terms"]],process:"How a collaboration takes shape",steps:[["01 · Discovery","Tell us about the context, audience, timeline and experience you want to create"],["02 · Review","We assess feasibility, applicable recording rights and potential usage arrangements"],["03 · Proposal","If feasible, we define deliverables, timelines, fees and terms before any use"]],disclaimerTitle:"Rights and transparency come first",disclaimer:"Lune_X is a virtual music identity with human creative direction and AI-assisted production. Sending an enquiry grants no licence. Any economic agreement, including rights, exclusivity and usage scope, requires a specific review and contract. The human guest artist's work is not part of the Lune_X catalogue offered for collaboration",pressSmall:"Official project assets and identity"},
    es:{home:"Inicio",music:"Música",disc:"Discografía",about:"El proyecto",collab:"Colaboraciones",press:"Prensa",legal:"Aviso legal",privacy:"Privacidad",listen:"Apple Music",brand:"Música virtual · Dirección creativa humana",rail:"Un universo musical, una visión humana",toplink:"Escucha tres avances",menu:"Abrir menú de navegación",explore:"Explora",platform:"Escucha",business:"Colabora",footerKick:"Descubre tu próxima frecuencia",footerTitle:"Tu música, tu momento",footerDesc:"Tres avances para escuchar al instante, el catálogo completo en plataformas oficiales y una puerta abierta a proyectos creativos",footerListen:"Escuchar en Apple Music",footerCollab:"Proponer un proyecto",footerIntro:"Un proyecto musical virtual con decisiones artísticas y dirección creativa humanas. Electrónica, intimidad y paisajes mediterráneos",details:"Transparencia y derechos",disclosure:"Lune_X declara el uso de herramientas generativas en la producción musical y la dirección creativa humana. La escucha se realiza en plataformas externas con sus propias condiciones. Ningún uso comercial de grabaciones queda autorizado automáticamente; cada propuesta necesita revisar los derechos. La web no tiene pagos, anuncios ni formularios de recogida de datos.",miniCollab:"Descubre las opciones de colaboración",crumb:"Estás aquí",artist:"Lune_X · Visión humana, música digital",
      clTitle:"El sonido adecuado transforma un lugar",clIntro:"No vendemos promesas ni concedemos licencias automáticas. Conectamos la dirección creativa de Lune_X con locales, proyectos digitales y experiencias audiovisuales. Cuéntanos qué imaginas",clKicker:"Lune_X · Colaboraciones creativas",clPrimary:"Hablemos en Instagram",clSecondary:"Consultar el press kit",clHead:"Tres territorios creativos",cards:[["Ambientes para locales","Ideas musicales y estéticas para bares, bistrós, beach clubs y hostelería. Solo se plantean usos de grabaciones tras revisar los derechos"],["Contenidos y visuales","Propuestas editoriales, contenido social y narrativas visuales que unen música e identidad. El alcance y el presupuesto se acuerdan de forma individual"],["Proyectos audiovisuales","Un vídeo, una campaña o una experiencia digital pueden empezar con una frecuencia. Evaluamos compatibilidad creativa, materiales y condiciones contractuales"]],process:"Cómo nace una colaboración",steps:[["01 · Descubrimiento","Cuéntanos el contexto, público, fechas y tipo de experiencia que buscas"],["02 · Evaluación","Estudiamos viabilidad, derechos de las grabaciones implicadas y posibles modalidades de uso"],["03 · Propuesta","Si es viable, definimos entregables, plazos, remuneración y condiciones antes de cualquier uso"]],disclaimerTitle:"Los derechos y la transparencia son lo primero",disclaimer:"Lune_X es una identidad musical virtual con dirección creativa humana y producción asistida por IA. Una consulta no concede licencia alguna. Cualquier acuerdo económico, incluido el alcance de uso y la exclusividad, requiere una revisión y contrato específicos. La música del artista humano invitado no forma parte del catálogo de Lune_X ofrecido para colaboraciones",pressSmall:"Materiales e identidad oficial del proyecto"}
  };
  const localHref=(origin,destination,filename)=>{
    const same=origin===destination;
    if(filename==="index.html")return same?"./":(origin==="it"?(destination+"/"):(destination==="it"?"../":"../"+destination+"/"));
    return same?filename:(origin==="it"?destination+"/"+filename:destination==="it"?"../"+filename:"../"+destination+"/"+filename);
  };
  const subpath=lang=>lang==="it"?"assets/":"../assets/";
  const htmlesc=s=>String(s).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;");

  const brandOgImage=base+"assets/social/lunex-site-open-graph-1200.jpg";
  function upgradeSocialMeta(doc){
    const og='<meta property="og:image" content="'+brandOgImage+'">';
    if(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/.test(doc))doc=doc.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/g,og);
    else doc=doc.replace("</head>",og+"</head>");
    if(!doc.includes('name="twitter:card"'))doc=doc.replace("</head>",'<meta name="twitter:card" content="summary_large_image"></head>');
    if(!doc.includes('name="twitter:image"'))doc=doc.replace("</head>",'<meta name="twitter:image" content="'+brandOgImage+'"></head>');
    return doc;
  }
  function header(lang,filename){
    const w=t[lang],assets=subpath(lang);
    const item=(name,label)=>`<a href="${name}"${name===filename?' aria-current="page"':''}>${label}</a>`;
    const links=[["music.html",w.music],["discography.html",w.disc],["about.html",w.about],["collaborations.html",w.collab],["press.html",w.press]];
    const langs=["it","en","es"].map(l=>`<a href="${localHref(lang,l,filename)}" lang="${l}"${l===lang?' aria-current="page"':''}>${l.toUpperCase()}</a>`).join("");
    const home=filename==="index.html"?"./":"./";
    const nav=links.map(([n,label])=>item(n,label)).join("");
    const menu=`<a href="${home}">${w.home}</a>${links.map(([n,label])=>item(n,label)).join("")}<a href="${spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a><a class="lx-mobile-play" href="${apple}" target="_blank" rel="noopener noreferrer">♫ ${w.footerListen} ↗</a>`;
    return `<header class="lx-site-header" id="lx-site-top"><div class="lx-top-rail"><div class="lx-top-rail-inner"><span>${w.rail}</span><a href="music.html">${w.toplink} ↗</a></div></div><div class="lx-mainbar"><a class="lx-mark" href="${home}" aria-label="Lune_X — ${w.home}"><img src="${assets}images/lunex-logo-header.avif" width="291" height="99" decoding="async" alt="Lune_X"></a><nav class="lx-primary-nav" aria-label="${w.explore} Lune_X">${nav}</nav><div class="lx-header-actions"><a class="lx-listen-cta" href="${apple}" target="_blank" rel="noopener noreferrer">♫ Apple Music ↗</a><nav class="lx-languages" aria-label="Languages">${langs}</nav><details class="lx-mobile-menu"><summary aria-label="${w.menu}"><span aria-hidden="true">☰</span></summary><nav class="lx-mobile-panel" aria-label="${w.explore}">${menu}</nav></details></div></div></header>`;
  }
  function footer(lang){
    const w=t[lang],assets=subpath(lang);
    const album=["music.html",w.music],disc=["discography.html",w.disc],about=["about.html",w.about],press=["press.html",w.press],collab=["collaborations.html",w.collab];
    const list=items=>items.map(([href,label])=>`<a href="${href}">${label}</a>`).join("");
    return `<footer class="lx-site-footer"><div class="lx-footer-spotlight"><div class="lx-footer-spotlight-inner"><div><span class="lx-spotlight-kicker">${w.footerKick}</span><h2 class="lx-spotlight-title">${w.footerTitle}</h2><p class="lx-spotlight-description">${w.footerDesc}</p></div><div class="lx-spotlight-actions"><a href="${apple}" target="_blank" rel="noopener noreferrer">♫ ${w.footerListen} ↗</a><a href="collaborations.html">${w.footerCollab} ↗</a></div></div></div><div class="lx-footer-grid"><section class="lx-footer-brand"><a href="./" aria-label="Lune_X — ${w.home}"><img src="${assets}images/lunex-logo-header.avif" width="291" height="99" loading="lazy" alt="Lune_X"></a><p>${w.footerIntro}</p><div class="lx-footer-socials"><a href="${instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@lunex.it" target="_blank" rel="noopener noreferrer">TikTok ↗</a><a href="https://twitter.com/lune_Xit" target="_blank" rel="noopener noreferrer">X ↗</a></div></section><nav class="lx-footer-links" aria-label="${w.explore}"><strong>${w.explore}</strong>${list([album,disc,about,press])}</nav><nav class="lx-footer-links" aria-label="${w.platform}"><strong>${w.platform}</strong><a href="${apple}" target="_blank" rel="noopener noreferrer">Apple Music ↗</a><a href="${spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a>${list([album])}</nav><nav class="lx-footer-links" aria-label="${w.business}"><strong>${w.business}</strong>${list([collab,press,["privacy.html",w.privacy],["legal.html",w.legal]])}</nav></div><div class="lx-footer-bottom"><p>© 2026 Lune_X · ${w.brand} · Marcelo Javier Fernandez Caballero</p><a class="lx-footer-manzo" href="https://manzo8b.github.io/manzo-ai/${lang}/" target="_blank" rel="noopener noreferrer" aria-label="MANZO AI"><img src="${assets}images/manzo-ai-footer.webp" loading="lazy" alt="MANZO AI" width="42" height="49"><span>MANZO AI</span></a></div><details class="lx-legal-note"><summary>${w.details}</summary><p>${w.disclosure}</p></details></footer>`;
  }
  function collaborations(lang){
    const w=t[lang],dest=base+(lang==="it"?"":lang+"/")+"collaborations.html";
    const alts=["it","en","es"].map(l=>`<link rel="alternate" hreflang="${l}" href="${base+(l==="it"?"":l+"/")}collaborations.html">`).join("")+`<link rel="alternate" hreflang="x-default" href="${base}collaborations.html">`;
    const ld={"@context":"https://schema.org","@type":"WebPage","name":w.clKicker,"url":dest,"inLanguage":lang,"description":w.clIntro,"isPartOf":{"@type":"WebSite","name":"Lune_X","url":base}};
    const cards=w.cards.map(([title,p])=>`<article class="lx-collab-card"><h2>${title}</h2><p>${p}</p></article>`).join("");
    const steps=w.steps.map(([name,p])=>`<div class="lx-collab-step"><strong>${name.split(" · ")[0]}</strong><h3>${name.split(" · ")[1]}</h3><p>${p}</p></div>`).join("");
    const body=`<main class="wrap"><div class="lx-collab-hero"><span class="lx-collab-eyebrow">${w.clKicker}</span><h1>${w.clTitle}</h1><p>${w.clIntro}</p><div class="lx-collab-actions"><a href="${instagram}" target="_blank" rel="noopener noreferrer">${w.clPrimary} ↗</a><a href="press.html">${w.clSecondary} ↗</a></div></div><h2>${w.clHead}</h2><div class="lx-collab-cards">${cards}</div><section class="lx-collab-process"><h2>${w.process}</h2><div class="lx-collab-steps">${steps}</div></section><section class="lx-collab-disclaimer"><h2>${w.disclaimerTitle}</h2><p>${w.disclaimer}</p></section><div class="lx-collab-actions"><a href="${instagram}" target="_blank" rel="noopener noreferrer">${w.clPrimary} ↗</a><a href="press.html">${w.pressSmall} ↗</a></div></main>`;
    const cssRoot=subpath(lang);
    return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index,follow"><meta name="theme-color" content="#fffafc"><title>${w.collab} | Lune_X</title><meta name="description" content="${htmlesc(w.clIntro.slice(0,155))}"><link rel="canonical" href="${dest}">${alts}<meta property="og:type" content="website"><meta property="og:site_name" content="Lune_X"><meta property="og:title" content="${w.clTitle} | Lune_X"><meta property="og:description" content="${htmlesc(w.clIntro.slice(0,155))}"><meta property="og:url" content="${dest}"><meta property="og:image" content="${base}assets/images/lunex-hero-headphones.avif"><link rel="icon" href="${cssRoot}favicon.svg" type="image/svg+xml"><script type="application/ld+json">${JSON.stringify(ld)}</script><link rel="stylesheet" href="${cssRoot}css/collaborations.css?v=1"></head><body class="lx-content-page lx-collab-page">${header(lang,"collaborations.html")}${body}${footer(lang)}</body></html>`;
  }
  const types=["index.html","music.html","discography.html","about.html","press.html","legal.html","privacy.html"];
  const targets=[];
  for(const lang of ["it","en","es"]){
    for(const filename of types){
      const rel=(lang==="it"?"":lang+"/")+filename;
      let html=await fs.readFile(rel,"utf8");
      const startHeader=/<header\b[^>]*>[\s\S]*?<\/header>/;
      const startFooter=/<footer\b[^>]*>[\s\S]*?<\/footer>/;
      if(!startHeader.test(html)||!startFooter.test(html))throw Error("Missing header/footer: "+rel);
      html=html.replace(startHeader,header(lang,filename)).replace(startFooter,footer(lang));
      const newLink=`<link rel="stylesheet" href="${subpath(lang)}css/site-chrome.css?v=1">`;
      if(html.includes("site-chrome.css"))html=html.replace(/<link rel="stylesheet" href="(?:\.\.\/)?(?:assets\/)?css\/site-chrome\.css\?v=\d+">/,newLink);else html=html.replace("</head>",newLink+"</head>");
      if(filename!=="index.html"){
        const body=html.match(/<body([^>]*)>/);if(!body)throw Error("No body tag: "+rel);
        if(!body[0].includes("lx-content-page")){
          const attrs=body[1].includes('class="')?body[1].replace('class="','class="lx-content-page '):body[1]+' class="lx-content-page"';
          html=html.replace(body[0],"<body"+attrs+">");
        }
        const crumb=`<nav class="lx-crumbs" aria-label="Breadcrumb"><a href="./">${t[lang].home}</a><span aria-hidden="true">/</span><span>${filename==="music.html"?t[lang].music:filename==="discography.html"?t[lang].disc:filename==="about.html"?t[lang].about:filename==="press.html"?t[lang].press:filename==="legal.html"?t[lang].legal:t[lang].privacy}</span></nav>`;
        const p=html.indexOf("<main");if(p<0)throw Error("No main: "+rel);
        if(!html.includes('class="lx-crumbs"'))html=html.replace(/<main\b([^>]*)>/,`<main$1>${crumb}`);
      }
      if(filename==="index.html"){
        const phrase=t[lang].miniCollab;
        const marker='<div class="lx-business-cta">';
        if(!html.includes(marker))throw Error("No commercial CTA: "+rel);
        if(!html.includes(phrase))html=html.replace(marker,marker+`<a href="collaborations.html">${phrase} ↗</a>`);
        // Keep all existing 3 MP3 previews and editorial guest content.
        if((html.match(/class="preview-audio compact-preview"/g)||[]).length!==3||!html.includes("IMG_6911.jpg"))throw Error("Preview or guest missing "+rel);
      }
      if((html.match(/<header\b/g)||[]).length!==1||(html.match(/<footer\b/g)||[]).length!==1||(html.match(/<h1\b/g)||[]).length!==1)throw Error("Structure mismatch "+rel);
      if(!html.includes("lx-site-header")||!html.includes("lx-site-footer"))throw Error("Template failure "+rel);
      if(!html.includes('href="'+subpath(lang)+'css/site-chrome.css?v=1"')||!html.includes('src="'+subpath(lang)+'images/lunex-logo-header.avif"'))throw Error("Incorrect brand resource path "+rel);
      html=upgradeSocialMeta(html);
      await fs.writeFile(rel,html);
      targets.push(rel);
    }
    const collab=(lang==="it"?"":lang+"/")+"collaborations.html";
    let html=collaborations(lang);
    // put global CSS after collab-specific CSS to unify navigation and footer
    html=html.replace("</head>",`<link rel="stylesheet" href="${subpath(lang)}css/site-chrome.css?v=1"></head>`);
    const crumbs=`<nav class="lx-crumbs" aria-label="Breadcrumb"><a href="./">${t[lang].home}</a><span aria-hidden="true">/</span><span>${t[lang].collab}</span></nav>`;
    html=html.replace('<main class="wrap">','<main class="wrap">'+crumbs);
    html=upgradeSocialMeta(html);
    await fs.writeFile(collab,html);
    targets.push(collab);
  }
  // All indexable pages, complete reciprocal hreflang group and real lastmod.
  const pages=["","music.html","discography.html","about.html","collaborations.html","press.html","privacy.html","legal.html"];
  const urls=pages.flatMap(p=>{
    const alt=["it","en","es"].map(l=>({l,u:base+(l==="it"?"":l+"/")+p}));
    return alt.map(({u})=>`  <url>\n    <loc>${u}</loc>\n    <lastmod>2026-11-02</lastmod>\n${[...alt,{l:"x-default",u:alt[0].u}].map(({l,u})=>`    <xhtml:link rel="alternate" hreflang="${l}" href="${u}" />`).join("\n")}\n  </url>`);
  });
  const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
  if(urls.length!==24||(sitemap.match(/hreflang=/g)||[]).length!==96)throw Error("Sitemap unexpected count");
  await fs.writeFile("sitemap.xml",sitemap);
  // Static guard against accidental references to missing local documents.
  for(const rel of targets){
    const html=await fs.readFile(rel,"utf8");
    const dir=path.dirname(rel);
    for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
      if(!/^(?:\.\.\/|\.\/)?(?:assets\/|(?:en|es)\/|(?:index|music|discography|about|collaborations|press|privacy|legal)\.html)/.test(href))continue;
      const target=path.normalize(path.join(dir,href.split("?")[0]));
      try{await fs.stat(target)}catch{throw Error("Missing local resource "+rel+" → "+href)}
    }
    const headers=[...html.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/g)];
    if(headers.some(m=>/\.\s*$/.test(m[1].replace(/<[^>]*>/g,"").trim())))throw Error("Final dot in heading "+rel);
  }
  console.log(JSON.stringify({updated:targets.length,sitemapUrls:urls.length,assetCss:"assets/css/site-chrome.css",collabCss:"assets/css/collaborations.css"},null,2));
})();
