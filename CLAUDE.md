# Ichud: EMT Study Center

Single-file site: everything lives in `index.html`. Source material is in `notes/`.

## Rules when editing

- **Keep the tour and Help page current.** Both are generated from the `TOUR` array (and `SHORTCUTS`) in `index.html`. Whenever a feature, tab, button or shortcut is added, renamed or removed, update `TOUR` in the same change. Each entry: `{v: view id, sel: CSS selector to highlight, h: title, p: one-line how-to, help?: extra detail for the Help page}`.
- New tabs go in `VIEWS`, plus a `<section class="view" id="v-NAME">`.
- Study content lives in the `SLIDES`, `QUIZ`, `CARDS`, `TF`, `CHEAT` and `FIXES` arrays, tagged by topic key from `TOPIC`.
- "My notes" shows the user's docs exactly as written, typos included. Put corrections in `FIXES` (Note check), never in the notes themselves.
- Escape any text that comes from Claude, the database or the user with `esc()` before it goes into HTML.
- Keep the hosted Claude artifact and this repo in sync: publish the same `index.html` to both.
- Follow local protocols (MDA / United Hatzalah) alongside AAOS 13th edition when writing medical content.
