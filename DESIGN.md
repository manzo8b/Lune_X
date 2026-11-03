# Lune_X — Template Reference Design v3

Data: 2 novembre 2026
Branch corrente di rifinitura: `codex/web-architect-v3` — copia locale, non pubblicata
Source of truth: `lune-x-template-riferimento.html` fornito dalla direzione creativa

## Obiettivo

Applicare il template visivo approvato **senza rimuovere alcuna parte del sito esistente**. Tutte le sezioni della homepage, tutte le 24 pagine IT/EN/ES, gli audio, la selezione editoriale, i social, i collegamenti alle piattaforme, le collaborazioni, il press kit, le note legali e i percorsi SEO restano disponibili.

## Scelte visual approvate

- Sfondo perla `#f6f6f7`, bianco `#ffffff`
- Testo nero `#0b0b0c`, rosso `#c4241f` e rosso accent `#e0312b`
- Non usare sfondi rossi o neri estesi, nemmeno nel footer
- Titoli Bricolage Grotesque 700/800; testo Instrument Sans 400/600
- Fonts self-hosted in `assets/fonts`, senza Google Fonts runtime
- Logo originale dell'allegato, con cuffie/mixer/cavo, nell'hero e wordmark in header/footer
- Layout in due colonne della hero; sezioni chiare; pulsanti accessibili con hover discreti
- Responsive mobile e `prefers-reduced-motion`; nessun autoplay

## Preservazione dei contenuti

In `index.html`, `en/index.html`, `es/index.html` rimangono:

1. Hero e collegamenti verso l'ascolto
2. Tre preview audio autentiche (controlli nativi)
3. Sezione di approfondimento musicale con visual
4. Galleria delle tre immagini promozionali del progetto
5. Dichiarazione artistica, progetto virtuale e direzione creativa umana
6. Selezione editoriale dell'artista ospite già presente
7. Collegamenti social
8. Invito alla collaborazione
9. Footer completo con brand, social, piattaforme, link legali, MANZO AI e disclosure

**Aggiunta non sostitutiva:** griglia homepage della discografia completa, 10 pubblicazioni derivate dalle pagine discografiche esistenti.

Le 21 pagine interne non hanno subito modifiche ai contenuti/testi; il CSS condiviso ne adatta la presentazione al template.

## Asset ancora da procurare

- Tutte le dieci copertine sono integrate nelle homepage e nelle pagine Discografia in IT/EN/ES. Originali in assets/covers/originals; copie responsive a 320/960 px.
- Link diretti e verificati delle due pubblicazioni per cui il repository mostra soltanto il profilo artista Spotify: Raíces del Trópico e Still Water, Warm Stone.
- Email ufficiale di contatto, se si desidera un canale indipendente dai social.
- Eventuale media kit PDF, se destinato a essere pubblicato come documento scaricabile.

Non creare copertine ufficiali, link o dati discografici immaginari.

## Aggiornamento Web Architect v3 — preferenze esplicite dell'utente

- Rosso consentito nei controlli dell'interfaccia; non ricolorare immagini promozionali per adattarle alla palette.
- I tre poster utilizzano i WebP originali a colori, senza filtri o overlay cromatici, e sono mostrati interi nel formato 844×1500. Le precedenti versioni RBN restano solo come file storici non referenziati dalle homepage.
- Ripristinati i layout grid di galleria, feature, statement, collaborazioni e artista ospite; controlli audio nativi con una sola anteprima in riproduzione per pagina.
- Script condiviso leggero `assets/js/site.js`: audio esclusivo, Escape e gestione del focus del menu; nessun contenuto dipende dal suo caricamento.
- Metadati social della homepage coerenti tra Open Graph e Twitter, preload dell'immagine hero esistente, font e asset locali conservati.
- Riferimento operativo: WEB_ARCHITECT_PROMPT.md; vincoli di prodotto: PRODUCT.md; verifiche e limiti: QA_REPORT.md.

## Copertine, immagini orizzontali e social — aggiornamento successivo

- Integrate cinque copertine fornite dall'utente, con WebP responsive 320/960 e colori originali. Provenienza documentata in assets/covers/README.md.
- Oltre il play e selezione dell'artista ospite mantengono il layout orizzontale con testo affiancato su desktop e impilato quando lo spazio lo richiede. Dopo l'audit, le cornici aderiscono al formato quadrato delle copertine, senza bande laterali inutili: massimo 420 px per la feature e 340 px per l'ospite. Per l'artista ospite la cornice mostra la copertina dello screenshot sorgente, escludendo i controlli Spotify tramite CSS.
- Instagram, TikTok e Apple Music hanno icone SVG inline decorative, con nomi testuali e collegamenti originali mantenuti. Nessuna libreria, font di icone o richiesta esterna aggiunta.

## Narrazione e azioni

Narrazione rivista in IT/EN/ES secondo NARRATIVE.md: apertura evocativa, ascolto, uscite, atmosfere, identità, incontro editoriale, canali e collaborazione. Il template Wix indicato dall'utente è un riferimento di tono e ritmo, non una fonte di testo, asset o contenuti commerciali.

Pulsanti esistenti conservati nella forma, con effetto CSS di sollevamento, riflesso tenue, risposta alla pressione e focus evidente. Gli effetti di hover sono limitati a puntatori precisi che supportano hover; con prefers-reduced-motion vengono eliminate traslazioni e transizioni. Nessuna dipendenza JavaScript per questi effetti.

La copertina Welcome to the Paradise fornita successivamente sostituisce il poster New Release solo nella sezione Oltre il play e si aggiunge al catalogo. Rimangono intatti formato, testi e colori originali dell'immagine.

## Audit conservativo Apple Design e Impeccable

Palette, contenuti approvati e ordine delle sezioni preservati. Cornici dimensionate sulle immagini, vecchi stili di testo incoerenti riallineati ai token, risposta alla pressione più rapida, focus gestito anche al cambio del breakpoint del menu. Dettagli ed evidenze in AUDIT_GENERALE.md.

## Architettura e compatibilità

- GitHub Pages statico, percorso base di progetto `/Lune_X/`
- 24 pagine HTML (8 per lingua)
- `assets/css/site-chrome.css` struttura UI esistente; `assets/css/lunex-v2.css` implementa template v3, ultima nella cascata
- `assets/css/brand-fonts.css` genera i riferimenti ai font WOFF2 locali
- I file preesistenti restano nel repository e sono conservati nel backup `backup-pre-redesign`

## QA e release gate

Workflow `.github/workflows/quality.yml` per Chromium, Firefox e WebKit su 320, 390, 768, 1024, 1440 px, IT/EN/ES.
- Controlli su 24 pagine HTML per link locali, canonical, foglio stile e H1
- Monitoraggio errori JS, scroll orizzontale, menu mobile, titoli, 3 player e 10 uscite
- Screenshot Chromium e report axe-core 2 viewport per lingua
- Lighthouse mobile e desktop informativo
- Non dichiarare WCAG AA o compliance legale completa sulla sola base dei test automatici
- Prima della pubblicazione: revisione visiva umana e verifica che nessuna funzione sia stata perduta

Il 2 novembre 2026 l’utente ha autorizzato esplicitamente salvataggio su GitHub e pubblicazione della versione completa. Conservare una Pull Request e i controlli di qualità come traccia del rilascio.
