# Audit generale e rifinitura conservativa

Data: 2 novembre 2026. Ambito: copia locale Lune_X, branch codex/web-architect-v3. Palette, ordine delle sezioni, impianto del sito e colori delle immagini preservati. Nessuna pubblicazione eseguita.

## Metodologie applicate

Impeccable: refinement dell'identità esistente, verifica per superficie (Persuade/Experience nella home, Operate nei player, Read nelle pagine informative), revisione delle proporzioni e controlli sul risultato renderizzato.

Apple Design: feedback immediato alla pressione, controlli nativi, continuità del focus, nessun blocco degli input durante le transizioni e riduzione del movimento. Non sono stati introdotti gesture, molle o materiali nuovi dove non servono.

I file allegati delle skill sono disponibili come istruzioni, ma launcher Impeccable e relativi file reference/audit.md e reference/craft-floor.md non sono presenti nel materiale fornito. Il tentativo di avviare il launcher non è riuscito. È stata applicata la metodologia con il contesto del repository e il browser disponibile, senza dichiarare eseguiti i tool originali delle skill.

## Problemi individuati e corretti

| Priorità | Problema | Correzione |
| --- | --- | --- |
| Alta | Testi bianchi su riquadri bianchi nei passaggi della pagina Collaborazioni | Ripristinata l'ereditarietà del colore del testo già previsto dalla pagina; numeri riallineati al rosso già definito nei token |
| Media | Cornici 16:9 intorno a copertine quadrate, con aree vuote ai lati | Cornici aderenti all'immagine: 420×420 nella feature e 340×340 nell'ospite su desktop, ridimensionate su mobile. Foto e testo restano affiancati secondo il layout esistente |
| Media | Testi secondari di Musica e Press kit con contrasto insufficiente | Collegati al token muted esistente, evitando i vecchi grigi ereditati; nessun nuovo colore aggiunto alla palette |
| Media | Focus lasciato su un menu divenuto invisibile nel passaggio a desktop | Menu chiuso al cambio di breakpoint e focus trasferito al link pertinente della navigazione desktop |
| Media | Destinazione dello skip link non sempre focalizzabile | Main delle homepage reso focalizzabile per il salto da tastiera |
| Bassa | Nomi accessibili italiani del menu nelle versioni EN/ES | Etichette localizzate mantenendo testo e struttura della navigazione |
| Bassa | Immagini Twitter e Open Graph differenti in alcune pagine interne | Uniformati i metadati alla stessa risorsa già utilizzata dalla pagina |
| Bassa | Risposta alla pressione troppo simile alla transizione hover | Feedback active portato a 80 ms, mantenendo attivazione nativa al rilascio e rispetto di reduced-motion |
| Bassa | Target dei selettori lingua piccoli e frecce social disallineate | Area minima dei selettori regolarizzata e frecce allineate senza spostare le sezioni |
| Bassa | Titolo 404 con punto finale, contrario alla regola editoriale | Rimossa la sola punteggiatura finale |

## Verifiche effettuate

- 24 pagine, in IT/EN/ES, renderizzate a 390 e 1440 px: 48 combinazioni senza overflow orizzontale rilevato.
- 9 controlli aggiuntivi delle homepage a 320, 768 e 1024 px: cornice e immagine coincidono in larghezza e altezza; nessun overflow.
- Verifica visiva desktop di feature e artista ospite: eliminate le bande vuote nei riquadri, senza stirare o ricolorare le immagini.
- Diagnostica del contrasto sui testi campionati tramite stili calcolati: corrette le anomalie rilevate in Musica, Collaborazioni e Press kit. Nessuna segnalazione residua nel campione controllato dopo le correzioni.
- Menu mobile: apertura, Escape, ritorno del focus al summary; passaggio a desktop con chiusura e trasferimento del focus verificati tramite interazioni reali.
- Skip link: attivazione con Enter e focus effettivo su main verificati.
- Verifiche statiche: 24 pagine e 24 URL sitemap; una H1 per pagina, assenza di ID duplicati e punti finali nei titoli, asset e srcset esistenti, ancore valide, alt presenti, immagini social coerenti.
- node --check sullo script condiviso e git diff --check riusciti.

## Evidenze

- qa/local-audit-before.json: diagnosi iniziale delle otto tipologie di pagina in italiano.
- qa/local-audit-after.json: matrice finale delle 24 pagine.
- qa/local-audit-images.json: misure delle cornici ai breakpoint aggiuntivi.
- qa/local-audit-interactions.json: menu, Escape, skip link e cambio breakpoint.
- qa/local-general-static.json: controlli su struttura, asset, metadati e sitemap.
- qa/screenshots/audit-feature-desktop.jpg e audit-guest-desktop.jpg: risultato visivo finale.

Gli artefatti temporanei in qa sono locali ed esclusi da Git; questo documento conserva la sintesi dell'audit.

## Limiti residui

Quattro copertine e due link diretti delle pubblicazioni restano da fornire. I segnaposto intenzionali non sono sostituiti con immagini inventate. Non sono stati modificati contenuti legali o destinazioni commerciali.

Il controllo del contrasto è una diagnostica mirata sui testi e gli sfondi opachi risolti dagli stili calcolati; esclude gradienti e composizioni complesse. Non equivale ad axe-core o a una verifica completa WCAG. Non sono stati eseguiti Lighthouse, test con screen reader, test sui dispositivi fisici, la suite sui tre motori o misure Core Web Vitals sul campo. Nessun punteggio o certificazione dichiarati.

Stato: rifinitura locale verificata nell'ambito descritto, non pubblicata. Per la preview: avviare dalla cartella del progetto `python3 -m http.server 4173 --bind 127.0.0.1` e aprire http://127.0.0.1:4173/.
