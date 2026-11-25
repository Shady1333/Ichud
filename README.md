# Ichud EMT Academy

The Ichud Hatzalah EMT study space. It combines **Ari EMT Academy** (chapter lessons, adaptive practice, grades, clinical decisions, video library) with the **EMT Study Center** (games, live sims, explainers, Hebrew sheet, Note Lab with AI cleanup, tour).

## Features

| Area | What it does |
| --- | --- |
| Chapters 2–16 | Lessons with course notes, worked calls, field checklists, red flags, diagrams and tap-to-define terms |
| Slides | Visual decks by chapter, linked to Ari Deutsch's review episodes |
| Flashcards and Practice quiz | One shared deck and question bank, with adaptive tests that raise the level at 80% and prioritize missed topics |
| Grades & weak areas | Cumulative and per-chapter grades and a weak-area queue |
| Mastery tracker | A running status for every chapter (Down pat, Getting there, Needs review) from quizzes, cards, games, sims and lessons. Shows topic breakdowns, flashcard mastery by chapter (including exactly which cards you have down), videos watched and what to work on next, and lets you set a status yourself |
| Clinical decisions | 28 patient calls with feedback on each decision |
| Games & live sims | Assessment and Airway Builders, Mnemonic Decoder, Shock Detective, Speed Round, sims with a reacting monitor |
| Animated explainers | Asthma airway, perfusion triangle, OPA insertion, CPR metronome |
| Hebrew EMT terms | Course glossary with pronunciation, the United Hatzalah sheet, on-scene SAMPLE/OPQRST questions, flashcards, match game |
| Video library | Ari Deutsch's EMT Review first, then skills demos from United Hatzalah, AHA and EMT programs. Videos play in an in-page player, and watched ones get a check |
| Field tools and Cheat sheet | O₂ duration calculator, devices, sizing, normal vitals, one-page summary |
| Note Lab | A Google-Doc-style page. **CFB** cleans up, fact-checks and builds study items filed to the right chapter |
| My docs and Note check | Original notes word for word, plus the corrections found in them |
| Search, Tour & Help | Search across everything, a first-visit guided tour (replay with ?) and a Help page |

## Running it

There is no build step. Serve the folder (for example with `python3 -m http.server`) or enable GitHub Pages (Settings → Pages → `main` / root). The in-page YouTube player needs a normal web host. The Claude-hosted copy can't embed other sites, so there it links to YouTube instead.

The live version is hosted as a Claude artifact. **Note Lab's** AI cleanup, account sync and dictation only work there. Everything else works anywhere, and progress is saved in the browser.

## Source notes

`notes/` holds the original Google Docs (Patient Assessment, and Asthma, Airway Management and Shock), the United Hatzalah translated terms PDF and a CSV export of it.

## Disclaimer

This is a study aid. Follow your instructor, medical director and local protocols (MDA / United Hatzalah). The practice questions are original and are not official NREMT items.
