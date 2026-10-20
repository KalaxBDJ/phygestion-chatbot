# CLAUDE.md

## Purpose

WhatsApp chatbot for a property-management (Propiedad Horizontal) company. Residents of several residential complexes ("unidades") chat with one bot number, pick their complex, and get a numbered menu of administrative services: account statements, invoices, payment methods, paz y salvo, common-area schedules, move-in/remodel info, PQRSF, contact with the administrator or front desk, etc. Content is in Spanish and is mostly static text, links and email addresses supplied by each complex's administration.

## Stack

- Node.js 18, CommonJS, `@bot-whatsapp/bot` (flows via `addKeyword` / `addAnswer`)
- Provider: **Meta WhatsApp Cloud API** (`@bot-whatsapp/provider/meta`, API v16.0)
- Database: in-memory `MockAdapter` (no persistence)
- Config via `.env`: `TOKEN`, `NUMBER_ID`, `VERIFY_TOKEN`
- Deployed with the `Dockerfile` (Railway-style build args `RAILWAY_STATIC_URL`, `PUBLIC_URL`, `PORT`)
- Package name is still the template's `base-bailey-memory`; `README.md` is the upstream bot-whatsapp boilerplate, not project docs.

## Commands

- `npm install`
- `npm start`: runs `eslint . --no-ignore` first (`prestart`), then `node app.js`. Lint errors block startup.
- `npm run dev`: nodemon

No test suite.

## Layout

- `app.js`: registers all flows, creates the Meta provider and the bot. New flows must be imported and added to the `flows` array here.
- `flows/welcome.js`: entry point (`EVENTS.WELCOME`). Asks the user to choose a complex (number or name) and `gotoFlow`s to it. Only lists: Mosaico, Oporto, Altobelo, Roterdam, Lisboa, Nuevo Milenio, Villasol.
- `flows/<unidad>.js`: one flow per complex (mosaico, oporto, altobelo, roterdam, lisboa, nuevoMilenio, villasol, altea, majagua, oceana, paraiso). Each is a big `switch` over the menu option with hard-coded replies. They are largely copy-pasted from each other with unit-specific content.
- `flows/restart.js`: shared "¿Necesitas ayuda con algo más?" step after an answer. `8` = back to previous menu, `9` = main menu, `0` = end.
- `flows/last-flow.js`: per-user (keyed by `ctx.from`) in-memory Map remembering the last unit flow so `8` in restart can return to it.
- `flows/idle-custom.js`: per-user 10-minute (600000 ms) inactivity timer; on timeout goes to `idleFlow`, which ends the conversation.
- `flows/amatista.js`: deprecated, commented out in `app.js`.
- `media/`: images sent by the Oceana flow.
- `TEMPLATE_CHATBOT_UNIDAD.md`: questionnaire given to administrators to collect the content needed to create or update a unit's flow.

## Flow conventions

Each unit flow follows the same pattern:

1. `addKeyword([NAME], { sensitive: true })`, then an `addAction` that calls `reset(ctx, gotoFlow, 600000)` for the idle timer.
2. `addAnswer` messages with the menu, then `{ capture: true }` handler that does `reset(...)` and `switch (ctx.body.trim())` over the options.
3. After a normal answer: `setLastFlow(ctx, flowX); return gotoFlow(flowRestartFinish)`. The menu's "back to main menu" and "0 end" options call `gotoFlow(welcome)` / `endFlow()` (and `stop(ctx)`).
4. Invalid input: `flowDynamic('❌ Opción no válida...')` then `fallBack()`.

When adding or changing a unit: copy the closest existing flow, edit its menu and replies, register it in `app.js` and, if it should be selectable, in `flows/welcome.js`. Keep menu text and `switch` case numbers in sync.

## Gotchas

- `welcome.js` requires unit flows and `restart.js` lazily requires `welcome` to avoid a circular import; keep it that way.
- Altea, Majagua, Oceana and Paraiso are registered in `app.js` but are not in the welcome menu (reachable only by typing their keyword).
- `flows/oceana.js` uses the keyword `NUEVOMILENIO`, the same as Nuevo Milenio; likely a copy-paste bug.
- All state (timers, last flow) is in memory and lost on restart; timers are keyed by user phone number.
- Secrets live in `.env` (git-ignored). Do not commit it, nor `*.log`, `bot_sessions` or `*.qr.png` (leftovers from the Baileys-era template).
