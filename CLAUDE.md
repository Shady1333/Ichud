# Ichud EMT Academy

Static site, no build step. `index.html` loads the course data files, then `ichud-data.js`, `app.js` (router and core pages) and finally `ichud.js` (Ichud modules). Source material lives in `notes/`.

## Architecture

- **Core (from Ari EMT Academy):** `data.js` and the depth files hold Chapters 2–16. `app.js` routes `#page/id/level` hashes and renders into `#app`. Questions go in `DATA.extraQuestions` and end up in `allQuestions`. Flashcards are `DATA.cards` as `[chapter, front, back]`. Videos are in `DATA.videos`. Grades and weak areas come from `state.attempts`.
- **`ichud-data.js`** runs before `app.js`. It pushes our quiz questions, flashcards and Ari Deutsch's episodes into those shared banks, so they count toward grades.
- **`ichud.js`** adds these pages: slides, explainers, games, tools, cheatsheet, hebrew (merged), notes (Note Lab with CFB focus mode), docs, fixes and help. Each page is a persistent `<section class="ip">` kept in `#ichud-holder`. `app.js` calls `ICHUD_BEFORE`/`ICHUD_AFTER`, which move the section into `#app` when its page is routed. `ICHUD_PAGES` registers the routes. `ICHUD_HOME` adds cards to the overview. `searchItems` is wrapped to index our content too.
- **`ichud.css`** styles our modules in the academy's navy (#05203f) and orange (#f36a22) palette with DM Sans and Outfit. Scope new rules under `.ip`.

## Rules when editing

- **Keep the tour and Help page current.** Both are generated from `TOUR`, `SHORTCUTS` and `PAGE_NAMES` in `ichud.js`. Whenever a page, feature, button or shortcut is added, renamed or removed, update `TOUR` in the same change. Each entry is `{v: page hash, sel: CSS selector to highlight, h: title, p: one-line how-to, help?: extra detail}`.
- New nav items go in the sidebar in `index.html` (`data-page` must match the route). Ichud pages also need a `MOUNT` entry in `ichud.js`.
- Avoid the core's delegated attributes inside Ichud markup: `data-action`, `data-filter`, `data-option`, `data-term`, `data-section`, `#flip-card`.
- Tag new questions and cards with a chapter number so they feed grades and adaptive practice.
- "My docs" shows the user's docs exactly as written, typos included. Corrections go in `FIXES` (Note check), never in the docs.
- Escape anything from Claude, the database or the user with `esc()` before it goes into HTML.
- Keep the hosted Claude artifact and this repo in sync: publish the same files to both.
- Medical content follows the AAOS 13th edition, current AHA guidance and local protocols (MDA / United Hatzalah).
