# Lune_X — rilascio completo del 3 novembre 2026

## Contenuto

- Dieci album con copertine originali archiviate nel repository e derivati responsive 320/960.
- Master Still Water, Warm Stone recuperato dal Mac e conservato in assets/covers/originals/still-water-warm-stone.png.
- Nuova sezione YouTube nelle tre homepage e collegamenti diretti alle dieci playlist ufficiali nelle homepage e nelle pagine Discografia.
- Rifiniture conservative di proporzioni, testo, pulsanti, accessibilità e navigazione; palette e immagini originali conservate.
- Memoria di progetto in PROJECT_MEMORY.md e copia persistente nelle note locali Codex.
- Pubblicazione Pages limitata al bundle di runtime; master e documentazione restano nel repository.

## Validazione automatica

Esecuzione GitHub Actions: https://github.com/manzo8b/Lune_X/actions/runs/41587000319

Commit del runtime verificato: 38bb48c186f99c87d180b72cd6993a71aa36a901. Le successive note di rilascio non cambiano il runtime.

- 24 pagine verificate staticamente; 45 combinazioni renderizzate in Chromium, Firefox e WebKit, su cinque larghezze e tre lingue.
- Nessun problema segnalato dalla suite.
- axe-core: nessuna violazione rilevata nelle sei combinazioni homepage/lingua/viewport sottoposte all'analisi.
- Lighthouse di laboratorio in CI: performance 92 mobile e 98 desktop; accessibilità 99; best practice 96; SEO 100.

I punteggi descrivono l'esecuzione di laboratorio, non dati reali sul campo o certificazioni di conformità. I report completi e gli screenshot sono conservati negli artefatti della medesima esecuzione.

## Autorizzazione e destinazione

L'utente ha richiesto esplicitamente salvataggio su GitHub e pubblicazione. Pull request di rilascio: https://github.com/manzo8b/Lune_X/pull/3. Destinazione: https://manzo8b.github.io/Lune_X/.
