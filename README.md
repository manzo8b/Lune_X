# LUNE_X — official artist landing

Sito statico indipendente di presentazione dell'artista virtuale LUNE_X, gestito nel repository pubblico `manzo8b/Lune_X`.

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
Apple Music è intenzionalmente in primo piano ma il link al momento **apre la ricerca** sul servizio; sostituire con l'URL artista Apple Music definitivo quando verificato.
I tre brani editoriali rappresentativi (Frattura Notturna, In The Dark We See, Next Stop: Torremolinos) sono descritti con linguaggio narrativo, non analisi sonora certificata.
Il lettore Spotify usa un iframe ufficiale creato solo dopo clic. Il sito ospita tre anteprime MP3 da 28 secondi dei brani LUNE_X; l'ascolto integrale resta sulle piattaforme musicali collegate.

## Arte e versione 0.1

Il tema di copertina radio/vinile è realizzato completamente in HTML/CSS e SVG originale, **ispirato al concept scelto**. Non include ancora come asset GitHub l'immagine fotorealistica approvata né le cover ufficiali originali: l'integrazione di artwork ad alta qualità e versioni ottimizzate è prevista nella v0.2. I riquadri album sono **segnaposto grafici**, non le cover ufficiali.

## Prossimi passi

1. Caricare la grafica radio/vinile approvata e le cover quadrate degli album, in formati ottimizzati e con testo alternativo.
2. Recuperare URL verificati per il profilo Apple Music e il canale YouTube ufficiale; sostituire le ricerche generiche.
3. Verificare i tre singoli e collegarli ai player ufficiali oppure a pagine multi-streaming.
4. Controllare la resa della pagina su Safari desktop e mobile, contrasto e SEO/Search Console.
5. Collegare il dossier S-COMODO SC015 dopo approvazione editoriale.

## Trasparenza

LUNE_X è un'identità artistica virtuale con direzione creativa umana e produzione assistita da IA. Non si attribuisce un'esistenza fisica al personaggio. Il sito non dichiara statistiche streaming, ricavi, premi o certificazioni non documentati.

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
