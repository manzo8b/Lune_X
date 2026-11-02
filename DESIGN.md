# LUNE_X — Design system / Editorial Frequency v2.1

Updated: 2026-11-02. Canonical project: https://manzo8b.github.io/Lune_X/

## Direction
Independent music editorial, not an AI-template landing page. Clear, human copy and immediate music first; no fake accolades, statistics, performances or sales.

**Palette**: paper white `#ffffff`, ink black `#101010`, signature red `#c81022`, warm secondary surface `#f4f3f0`, body-muted `#585858`. Red, white and black derive from the project's requested identity. Red is for emphasis and intentional action, not subtle body text.

**Typography**: impactful, condensed uppercase editorial display, readable system-based body typography. Strong scale and hierarchy. Avoid tiny promotional eyebrows and boilerplate icon cards. Do not replace strong contrast with ambient gradients.

**Home composition**: editorial hero and monochrome type poster; three accessible native MP3 previews; artwork-led collection feature; three verified visual concepts; transparent human-direction/AI-production statement; human guest editorial selection; social access; collaboration inquiry; lean footer.

**Pages**: 8 per language, 24 total. Italian root, English `/en/`, Spanish `/es/`. All use `assets/css/lunex-v2.css` after `site-chrome.css`; localized main/branding stays unique per page. Legacy assets/styles may remain in repository for historical pages but should not be reactivated in redesigned home.

**Imagery**: only artwork already in this repository. Concept designs are explicitly described as concepts, not real paid campaigns, physical products, or licensed collaborations. Do not invent official album covers.

**Music**: three local ~28-second audio excerpts. Explicit user-initiated playback using native `<audio controls>`, no autoplay; full tracks on official external platforms.

**Disclosure**: Lune_X is a virtual artistic identity with human creative direction and AI-assisted production. Rights must be assessed before licensing music. External music platforms govern streaming.

## Quality gates
- CI workflow `.github/workflows/quality.yml` uses free Playwright Chromium.
- `qa/smoke.mjs` checks all 24 documents' local resources, canonical, H1, and new CSS.
- Home is rendered in Italian, English and Spanish at 390, 768 and 1440 px.
- Tests check visible H1, three visible players, menu opening, horizontal overflow and page errors.
- Screenshots are available as a workflow artifact in GitHub Actions.
- This is smoke/regression coverage, **not** a WCAG certification, full cross-browser pass, Lighthouse evaluation or human visual approval.
- Do not update visual baselines until direction is approved.

## Maintenance
Preserve this design when adding features. Avoid layering an additional theme without first checking the cascade. Prefer updating existing tokens and reusable components. Make design changes with before/after screenshot comparisons, keep mobile navigation working, and verify source images, audio URLs and translated links.
