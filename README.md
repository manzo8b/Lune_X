# Lune_X — official artist landing

**[Sito ufficiale e ascolto](https://manzo8b.github.io/Lune_X/)** · **[Discografia](https://manzo8b.github.io/Lune_X/discography.html)** · [Press kit](https://manzo8b.github.io/Lune_X/press.html)

Lune_X è un progetto musicale originale di elettronica e dance-pop, con direzione creativa umana e produzione assistita da IA. Questo repository contiene il sito dell'artista; le piattaforme di streaming sono raggiungibili dai collegamenti ufficiali sul sito.

## Versione completa — 2 novembre 2026

Dieci copertine integrate, originali archiviati in assets/covers/originals, tre lingue e 24 pagine. Rifiniture visive, narrazione, pulsanti e audit conservativo completati. PROJECT_MEMORY.md conserva preferenze, riferimenti e informazioni per proseguire il progetto. Pubblicazione GitHub Pages autorizzata dall’utente; il workflow prepara solo i file runtime in _site, escludendo master e note. Le sezioni seguenti conservano lo storico delle revisioni.


## Revisione locale con Web Architect v3

Branch `codex/web-architect-v3`: prompt applicato alla rifinitura del sito, senza pubblicazione. I poster promozionali mantengono i colori originali su richiesta esplicita dell'utente; nessuna ricolorazione automatica in rosso. Consultare `PRODUCT.md`, `DESIGN.md` e `QA_REPORT.md` per lo stato corrente, che aggiorna le note storiche sottostanti.

Anteprima dalla cartella del repository: `python3 -m http.server 4173 --bind 127.0.0.1`, quindi aprire `http://127.0.0.1:4173/`. Non serve installare dipendenze per visitare il sito statico. `WEB_ARCHITECT_PROMPT.md` conserva il prompt utilizzato come riferimento.

Sito statico indipendente di presentazione dell'artista virtuale Lune_X, gestito nel repository pubblico `manzo8b/Lune_X`.

**Sito pubblico:** https://manzo8b.github.io/Lune_X/

GitHub Pages: deployment automatizzato da `main` tramite GitHub Actions; primo deploy riuscito il 1 novembre 2026 dopo abilitazione Pages.

## Struttura

- `index.html`: homepage responsive, visual concept radio/vinile, lettore Spotify su consenso esplicito, discografia, collegamenti Apple Music/Spotify/YouTube/HyperFollow, istruzioni d'ascolto per non esperti
- `press.html`: press kit e biografia ufficiale con metadati e avvertenze
- `robots.txt` e `sitemap.xml`: indicazioni per indicizzazione
- `assets/studio-cover.svg`: anteprima grafica originale vettoriale e immagine di condivisione (provvisoria)
- `assets/favicon.svg`: favicon vettoriale
- `.github/workflows/pages.yml`: pubblicazione statica su GitHub Pages
- `.nojekyll`: disattiva Jekyll perché non necessario

## Fonti del catalogo e limiti

Le 10 uscite e le 99 tracce sono derivate dalle schermate DistroKid fornite dalla direzione creativa, non da analytics di ascolto.
8 uscite hanno link HyperFollow forniti dal progetto. Per `Raíces del Trópico` e `Still Water, Warm Stone` restano da aggiungere link diretti.
Apple Music è in primo piano e ora collega al profilo artista diretto fornito dalla direzione: https://music.apple.com/it/artist/lune-x/6776382449.
I tre brani editoriali rappresentativi (Frattura Notturna, In The Dark We See, Next Stop: Torremolinos) sono descritti con linguaggio narrativo, non analisi sonora certificata.
Il lettore Spotify usa un iframe ufficiale creato solo dopo clic. Il sito ospita tre anteprime MP3 da 28 secondi dei brani Lune_X; l'ascolto integrale resta sulle piattaforme musicali collegate.

## Arte e versione 0.1

Il tema di copertina radio/vinile è realizzato completamente in HTML/CSS e SVG originale, **ispirato al concept scelto**. Non include ancora come asset GitHub l'immagine fotorealistica approvata né le cover ufficiali originali: l'integrazione di artwork ad alta qualità e versioni ottimizzate è prevista nella v0.2. I riquadri album sono **segnaposto grafici**, non le cover ufficiali.

## Prossimi passi

1. Caricare la grafica radio/vinile approvata e le cover quadrate degli album, in formati ottimizzati e con testo alternativo.
2. Recuperare l'URL verificato del canale YouTube ufficiale e sostituire la ricerca generica.
3. Verificare i tre singoli e collegarli ai player ufficiali oppure a pagine multi-streaming.
4. Controllare la resa della pagina su Safari desktop e mobile, contrasto e SEO/Search Console.
5. Collegare il dossier S-COMODO SC015 dopo approvazione editoriale.

## Trasparenza

Lune_X è un'identità artistica virtuale con direzione creativa umana e produzione assistita da IA. Non si attribuisce un'esistenza fisica al personaggio. Il sito non dichiara statistiche streaming, ricavi, premi o certificazioni non documentati.

Progetto statico senza backend né moduli di raccolta dati. Font Google esterni e lettore Spotify (solo dopo consenso tramite clic) dipendono dai fornitori.

## Media kit ufficiale — integrazione asset (novembre 2026)

La homepage ospita tre mini-player MP3 (28 secondi) e tre visual WebP di concept promozionali originali del progetto. Tutti e sei i file sono stati caricati il 1° novembre 2026 e risultano presenti nel repository.
I tre mini-player si attivano dopo verifica HTTP dell'audio. Le tre immagini promozionali sono presenti direttamente nel markup HTML con tag `<img loading="lazy">`: il browser le carica nativamente senza richiesta HEAD o JavaScript, mantenendo il testo alternativo in caso di errore.

| Asset | Percorso |
|---|---|
| Frattura Notturna | `assets/audio/frattura-notturna-preview.mp3` |
| In The Dark We See | `assets/audio/in-the-dark-we-see-preview.mp3` |
| Next Stop: Torromolinos I | `assets/audio/next-stop-torremolinos-preview.mp3` |
| Eclipse Dual (mockup cartellone) | `assets/images/eclipse-dual-billboard.webp` |
| Dark Desire Frequency (mockup cassetta) | `assets/images/dark-desire-cassette.webp` |
| Welcome to the Paradise (promo) | `assets/images/welcome-to-paradise-promo.webp` |

Gli estratti derivano dai WAV originali forniti dal progetto, con tagli temporali rispettivamente 0:45–1:13, 0:45–1:13, 0:43–1:11, MP3 stereo 160 kbps con fade breve. Non contengono file audio di terzi né autoplay.

I sei file binari sono presenti in `assets/audio/` e `assets/images/`. I duplicati ZIP del pacchetto di consegna sono stati rimossi dal repository dopo l'estrazione dei file per evitare peso superfluo, restando recuperabili nella cronologia Git. Le immagini sono concept promozionali e non attestano campagne pubblicitarie realmente acquistate o supporti fisici in vendita.

## Novembre 2026 — identità e diritti
- Nome ufficiale **Lune_X**; Instagram `@lune_x.it`, TikTok `@lunex.it`, firma promozionale `@Lunex_Xmusic`, `#Lune_X`, `#Lune_xmusic`.
- Apple Music resta la CTA prioritaria e punta al profilo artista ufficiale comunicato dalla direzione.
- Artista umano in evidenza: Pier Paolo Piccioni, «Presunte Realtà — Radio Edit». La card usa `assets/images/IMG_6911.jpg` caricato dalla direzione, con ritaglio CSS che mostra la copertina senza i controlli Spotify dello screenshot; conserva la grafica di fallback in caso di errore di caricamento. L'embed Spotify si attiva solo dopo clic.
- Nuove pagine `privacy.html` e `legal.html`: dichiarazione Suno Pro, distribuzione DistroKid, distinzione tra diritti commerciali e protezione del copyright; nessun payout di Apple Music dichiarato come verificato.

## Versione internazionale e branding (1 novembre 2026)

- Sito trilingue con homepage, press kit, Privacy e Note legali nelle tre versioni: italiano `/`, inglese `/en/`, spagnolo `/es/`.
- Cambio lingua nelle homepage e nelle pagine informative; URL distinti, canonical e hreflang per ogni lingua; sitemap composta da 12 URL.
- Le traduzioni mantengono i collegamenti ufficiali Apple Music e Spotify, i tre estratti audio, i tre WebP e il visual dell'artista ospite.
- Frase editoriale italiana approvata per l'artista ospite: «Questo mese vi proponiamo l’ascolto di un artista umano, scelto per condividere con voi una voce diversa, autentica e personale.»
- Icone social inline SVG e colori per Instagram, TikTok e Apple Music.
- Gerarchia di marca: **Lune_X nell'intestazione e sul giradischi; MANZO AI soltanto nel footer**. Il footer richiama l'ecosistema MANZO AI usando la sua emblematica geometrica presente in `manzo-ai/theme/manzo-mark.svg`.
- L'immagine e la musica di Pier Paolo Piccioni restano una segnalazione editoriale e non dichiarano una partnership.

### Verifiche successive

- Verificare resa grafica e contrasto su Safari iPhone e desktop, in particolare il menu su larghezze ridotte e la copertina ritagliata dello screenshot Spotify.
- Quando disponibili, sostituire i segnaposto delle cover del catalogo con artwork ufficiali.
- Confermare e aggiornare un indirizzo email privacy dedicato e collegare un URL YouTube artista verificato.

## Redesign visivo Pearl Pulse — 1 novembre 2026

- Interfaccia bianco perla con accenti magenta, rosa e viola, adattata dai riferimenti visuali forniti, ma composta da HTML, CSS e componenti accessibili reali.
- Hero editoriale con giradischi e cuffie decorative; nessun avvio audio automatico.
- Tre artwork SVG originali: `assets/images/frattura-notturna-art.svg`, `assets/images/in-the-dark-art.svg` e `assets/images/next-stop-torremolinos-art.svg`.
- L'immagine di Frattura Notturna non utilizza materiale dell'artista umano Pier Paolo Piccioni, che conserva la propria copertina nella sezione ospite.
- Sezioni anteprime e artista ospite affiancate su desktop e impilate in mobile, con social più visibili.
- Interfaccia condivisa fra italiano, inglese e spagnolo; audio, album, social, Apple Music e link esterni preservati.
- Il logo MANZO AI compare solo nei footer, mentre l'identità Lune_X è nell'intestazione e nel vinile.
- Verifica statica: un H1 per homepage; 3 anteprime MP3, artwork e percorsi esistenti per lingua; deploy riuscito. Test visuale reale desktop/mobile ancora da effettuare.

## Regola editoriale obbligatoria — titoli senza punto finale

**Ogni titolo e sottotitolo deve terminare senza punto fermo**, su tutte le lingue (IT, EN, ES): hero, headings H1-H6, card, discografia, artisti ospiti, social, documentazione e futuri aggiornamenti. Il punto fermo rimane nella prosa normale quando grammaticalmente necessario.

## Revisione grafica finale — 1 novembre 2026

- Il logo principale in intestazione proviene dal visual Lune_X approvato: `assets/images/lunex-logo-header.avif`. L'icona rossa precedentemente utilizzata come marchio principale è stata sostituita.
- La hero mostra cuffie e vinile del mockup: `assets/images/lunex-hero-headphones.avif`. Rimane su fondo chiaro, con layout e CTA funzionanti.
- Ordine home: hero, tre brani, galleria visual, artista ospite, social, sezioni approfondite.
- Tre artwork originali Lune_X mantenuti quadrati e non deformati; la copertina «Presunte Realtà» di Pier Paolo Piccioni è esclusiva dello spazio ospite.
- I tre mini-player usano elementi HTML audio, play/pausa e slider con gestione di metadati, tempo di ascolto e riproduzione esclusiva senza autoplay. Gli MP3 originali nel repo non sono modificati.
- Tipografia, dimensioni e contenuti sono adattati per desktop, tablet, smartphone e tre lingue; il logo MANZO AI rimane nel footer.
- Audit del repository: 12 pagine presenti, un H1 per pagina, nessun punto finale nei titoli, tutti i riferimenti ai media risolti.

## Google Search Console — SEO e sitelink (1 novembre 2026)

- Sitemap XML ufficiale `https://manzo8b.github.io/Lune_X/sitemap.xml`: 21 URL canonici, 7 tipologie di pagina × 3 lingue (IT, EN, ES).
- Versioni di lingua indicate con `xhtml:link` reciproci `hreflang=it,en,es,x-default`, nel medesimo file sitemap, con `lastmod` coerente con le modifiche sostanziali del 1 novembre 2026.
- `priority` e `changefreq` rimossi: Google li ignora.
- Aggiunte 9 pagine autonome in tre lingue: `music.html`, `discography.html`, `about.html`; hanno titoli dedicati, contenuti effettivi e link interni. La homepage rimanda alle nuove pagine dall'intestazione e dal footer.
- Homepage arricchita da dati strutturati JSON-LD `WebSite` e `MusicGroup`; pagine autonome con `BreadcrumbList` e `WebPage`.
- I sitelink sono generati automaticamente da Google e NON esiste un file o schema che ne garantisca la comparsa.
- Attenzione: GitHub Pages di progetto si trova in un percorso `/Lune_X/` del dominio condiviso `manzo8b.github.io`. Il file `/Lune_X/robots.txt` non è il robots.txt di radice del dominio; la sitemap va inviata direttamente dalla proprietà Search Console verificata. Il file nel progetto contiene comunque il riferimento alla sitemap per consultazione.
- La funzione di riconoscimento del nome sito di Google è gestita a livello di dominio, non di sottocartella; la marcatura `WebSite` descrive Lune_X ma non garantisce che Google mostri Lune_X come nome sito nei risultati su `github.io`.
- Non creare pagine artificiali con poco contenuto allo scopo di forzare i sitelink. Evitare di inserire ancore di pagina come URL separati nella sitemap.
- Da Search Console → proprietà URL-prefisso idonea → Sitemap → `sitemap.xml` (oppure URL completo se la proprietà ha prefisso più ampio); poi ispezionare la homepage e le tre nuove pagine strategiche.

## Atelier Frequency — esperienza musicale e percorso commerciale (2 novembre 2026)

Questa revisione riguarda solo Lune_X e mantiene il progetto della Villa All'Ombra dei Pitosfori completamente separato.

### Esperienza visiva
- I tre homepage IT/EN/ES usano `assets/css/experience.css` (nuovo livello sopra `light.css`) e `assets/js/experience.js` (interazioni progressive).
- Background sempre chiaro e logo ufficiale Lune_X nell'intestazione. Logo MANZO AI solo nel footer.
- Effetti: profondità della hero, pannelli editoriali, reveal on scroll, cards hover, progress bar, barra «ora in ascolto», selettore rapido delle tre tracce. `prefers-reduced-motion` rispettato.
- Nessun autoplay; i file audio restano gli MP3 delle tre anteprime ufficiali nel repository. Nessun tracciamento di eventi o cookies aggiuntivi.

### Storytelling e percorso di conversione
- Narrazione trasparente del ruolo della direzione creativa umana.
- CTA per l'ascolto completo sulle pagine ufficiali Apple Music e Spotify; distribuzione DistroKid e link HyperFollow conservati.
- Nuovo invito alle collaborazioni per visual, locali e contenuti digitali con contatto tramite il profilo Instagram ufficiale e collegamento al press kit.
- Il sito NON contiene attualmente carrello, checkout, pagamento, raccolta lead o una licenza automatica. Non dichiarare ricavi o acquisti generati senza dati.
- **Precondizione di qualsiasi proposta di licenza musicale**: verificare per ogni brano i diritti commerciali delle registrazioni, origine del materiale audio, piano Suno alla data di creazione/download e la presenza di eventuali elementi terzi. Il piano a pagamento non assicura da solo protezione copyright in ogni paese.
- Mantenere separata e indipendente la segnalazione dell'artista ospite umano Pier Paolo Piccioni: la sua opera non è inclusa nei contenuti o nelle offerte Lune_X.
- La sitemap indica l'ultima modifica sostanziale delle homepage al 2 novembre 2026.

### Controllo qualità minimo prima dei successivi rilasci
1. Un solo H1 per pagina e nessun punto finale nei titoli
2. Tutti i file CSS, JS, immagini e MP3 realmente esistenti
3. Nessuna pubblicazione automatica in Buffer, nessuna modifica agli account della Villa
4. Verificare manualmente desktop e smartphone, play/pausa/slider, contrasto e responsive
5. Misurare gli ascolti effettivi solo dai pannelli delle piattaforme musicali; non confondere i click sul sito con stream monetizzabili

## Lune_X Signature Web Experience — revisione completa 2 novembre 2026

La grafica del sito ufficiale Lune_X adotta un'interfaccia comune alle **24 pagine nelle tre lingue (IT/EN/ES)**.

- CSS condiviso `assets/css/site-chrome.css`: intestazione premium sticky, logo originale, pulsante Apple Music, menu mobile con `details` accessibile, selettore lingue; footer con narrazione Lune_X, social, blocchi Esplora/Ascolta/Collabora, CTA e trasparenza espandibile.
- CSS `assets/css/collaborations.css` e nuova landing `collaborations.html` in IT/EN/ES. La landing non dichiara licenze automatiche e non prevede checkout o pagamenti.
- Homepage mantiene artwork, anteprime audio originali, Spotify on demand, artista umano ospite Pier Paolo Piccioni nella propria sezione e design chiaro. Nuovo collegamento commerciale al dossier collaborazioni.
- Pagine Musica, Discografia, About, Press, Privacy e Legal ora condividono il sistema visivo. Breadcrumb per ogni pagina secondaria.
- Sitemap aggiornata: 24 URL localizzati; gruppi `hreflang` reciproci IT/EN/ES/x-default, `lastmod=2026-11-02`.
- Nessun punto finale nei titoli. MANZO AI compare **soltanto nel footer**.
- Strategia commerciale: conversione verso Apple Music/Spotify per royalties da ascolti reali; proposte di collaborazione tramite Instagram ufficiale, con revisione dei diritti e preventivo prima di qualsiasi accordo. Non dichiarare vendite, utili, licenze concesse o stream non verificati.
- Non si aggiungono strumenti di tracciamento, moduli dati personali, cookie di profilazione o autoplay.
- Script riproducibile: `.github/scripts/apply-site-chrome.mjs`; workflow `.github/workflows/site-chrome.yml`.
- Nota di pubblicazione: i push automatici prodotti da `GITHUB_TOKEN` possono non innescare il workflow Pages; eseguire un push GitHub aggiuntivo con il connettore dopo la generazione delle pagine.

### Verifica finale delle risorse — 2 novembre 2026

Corretto il generatore delle 24 pagine: tutti i percorsi del marchio originale, del logo footer MANZO AI e dei CSS condivisi puntano ora a `assets/` sulle pagine italiane e a `../assets/` sulle pagine EN/ES.

Il generatore è ora idempotente per i link della sezione collaborazioni, i breadcrumb e il collegamento al CSS condiviso. Workflow di rigenerazione completato con esito positivo.

Questo commit manuale serve inoltre a far avviare a GitHub Pages un deployment sullo stato finale delle pagine, perché un commit automatico via `GITHUB_TOKEN` potrebbe non attivarlo. I 9 post Buffer non sono coinvolti.

### Anteprima social ufficiale — novembre 2026

È disponibile una copertina Open Graph 1200×630 in JPEG: `assets/social/lunex-site-open-graph-1200.jpg`. Le 24 pagine indicizzabili utilizzano questo file nei metadati `og:image` e `twitter:image`, con `twitter:card=summary_large_image`.

L'immagine è una grafica promozionale generata dalle risorse Lune_X, non la copertina dell'artista ospite e non rappresenta statistiche o riconoscimenti. È costruita dallo script `.github/scripts/build-social-assets.mjs`.

L'ultimo commit manuale richiama la pubblicazione GitHub Pages dopo i commit automatizzati dei sorgenti e dell'immagine.

### Correzione menu mobile — 2 novembre 2026

- Causa: intestazione troppo affollata sulle larghezze da smartphone, con Apple Music, IT/EN/ES e logo sulla stessa riga; il pulsante del menu finiva oltre il viewport e poteva risultare invisibile.
- Soluzione: su telefoni stretti compaiono logo Lune_X + pulsante etichettato `MENÙ`, `MENU` o `MENÚ` in base alla lingua. Il link Apple Music e il selettore IT/EN/ES sono nel menu aperto, insieme a tutte le pagine e Spotify.
- Menu nativo `details/summary`, accessibile anche da tastiera e senza JavaScript; pannello scrollabile e dimensionato entro lo schermo. Le regole CSS forzano la visibilità del pulsante e nascondono il pannello quando è chiuso.
- Il controllo è applicato a tutte le 24 pagine in IT/EN/ES, con cache-busting `site-chrome.css?v=2`.
- Le bozze Buffer e gli account della Villa non sono stati modificati.

## Identity Lock — Rosso, Bianco e Nero — 2 novembre 2026

**Sistema cromatico vincolante** per tutte le 24 pagine (IT/EN/ES):
- Bianco `#FFFFFF` — fondi principali
- Nero `#111111` — testo, sezioni premium e footer
- Rosso `#D71920` — CTA, hover, dettagli dinamici, logo
- Rosso scuro `#A50F15` — link e microtesti su bianco
- Grigio `#F7F7F7`, `#E5E5E5`, `#2B2B2B` — superfici e testi secondari

I CSS `light.css`, `experience.css`, `site-chrome.css`, `collaborations.css` sono convertiti. `site-chrome.css?v=3` è lo strato di design finale per tutte le pagine.

Nuove risorse original-brand versionate: `assets/images/lunex-logo-rbn.avif`, `assets/images/lunex-hero-rbn.avif` e `assets/social/lunex-site-open-graph-rbn-1200.jpg`. Anche le tre **illustrazioni promozionali decorative** sono esportate in `*-rbn.avif`; l'originale di ciascuna è conservato. Non si alterano le copertine discografiche dei brani né la copertina dell'artista umano ospite.

Il nuovo header ha logo tricolore e menù mobile chiaramente visibile; il footer è nero con link bianchi e accenti rossi e conserva MANZO AI esclusivamente in fondo.

Confronti WCAG calcolati: `#111111` su bianco 18,88:1; `#2B2B2B` su bianco 14,16:1; `#D71920` su bianco 5,19:1; `#A50F15` su bianco 7,84:1. Questi contrasti verificano le combinazioni rappresentative, non costituiscono un audit automatico completo di ogni schermata.

Lo script riproducibile `.github/scripts/apply-site-chrome.mjs` aggiorna le 24 pagine e normalizza gli stili inline del vecchio tema. `.github/scripts/build-brand-artwork.mjs` e workflow omonimo generano immagini brand-safe. Nessun contenuto Buffer o Villa modificato.

Il commit di questa nota avvia il deployment GitHub Pages sullo stato finale generato dal workflow, evitando che l'ultimo push GITHUB_TOKEN rimanga non distribuito.
