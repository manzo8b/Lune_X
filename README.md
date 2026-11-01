# Lune_X — official artist landing

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
