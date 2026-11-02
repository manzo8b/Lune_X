# Lune_X — Template Reference Design v3

Data: 2 novembre 2026
Branch: `redesign-v2` — non pubblicato in `main`
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

- Copertine ufficiali quadrate di tutte le 10 uscite (con autorizzazione di pubblicazione): i segnaposto sono volutamente espliciti.
- Link diretti e verificati delle due pubblicazioni per cui il repository mostra soltanto il profilo artista Spotify: Raíces del Trópico e Still Water, Warm Stone.
- Email ufficiale di contatto, se si desidera un canale indipendente dai social.
- Eventuale media kit PDF, se destinato a essere pubblicato come documento scaricabile.

Non creare copertine ufficiali, link o dati discografici immaginari.

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

**Nessun merge automatico su main.** La Pull Request è l'unico punto di passaggio per l'approvazione finale.
