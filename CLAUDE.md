# CLAUDE.md

## Purpose

WhatsApp chatbot for a property-management (Propiedad Horizontal) company. Residents of several residential complexes ("unidades") chat with one bot number, pick their complex, and get a numbered menu of administrative services: account statements, invoices, payment methods, paz y salvo, common-area schedules, move-in/remodel info, PQRSF, contact with the administrator or front desk, etc. Content is in Spanish and is mostly static text, links and email addresses supplied by each complex's administration.

## Stack

- Node.js 20, CommonJS, BuilderBot `@builderbot/bot` 1.4.4, pinned (flows via `addKeyword` / `addAnswer`)
- Provider, chosen by the `PROVIDER` env var in `app.js`:
  - `meta` (default, production on Railway): **Meta WhatsApp Cloud API** (`@builderbot/provider-meta`, Graph API `v22.0`, override with `META_API_VERSION`)
  - `baileys` (local testing only): `@builderbot/provider-baileys`, scan the QR with a **separate test phone** (the number registered with Meta cannot be used in a WhatsApp app)
- Database: in-memory `MemoryDB` (no persistence)
- Config via `.env` (see `.env.example`): `PROVIDER`, `PORT`, and for Meta `TOKEN`, `NUMBER_ID`, `VERIFY_TOKEN` and `APP_SECRET` (the app secret from the Meta dashboard; with it set, webhook POSTs without a valid `X-Hub-Signature-256` get a 401, without it the bot logs a warning and accepts any POST)
- Deployed with the `Dockerfile` (Railway-style build args `RAILWAY_STATIC_URL`, `PUBLIC_URL`, `PORT`)
- `README.md` is the upstream bot-whatsapp boilerplate, not project docs.

## Commands

- `npm install`
- `npm start`: runs `eslint . --no-ignore` first (`prestart`), then `node app.js`. Lint errors block startup. The `builderbot` lint rules require `await` before every `flowDynamic` call.
- `npm run dev`: nodemon (`nodemon.json` ignores `bot_sessions`, which Baileys writes constantly)
- Local testing: `PROVIDER=baileys npm run dev` and scan the QR.

No test suite.

## Message cost

Since 2026-10-01 Meta bills every free-form message the bot sends inside the 24h window (after 1,000 free per number per month). **Send as few messages as possible: one message per user turn.** Menus are one message, each answer is one message that carries the restart footer, and errors are one short `fallBack('...')` text, not an error plus the menu again.

## Layout

- `app.js`: registers all flows, creates the provider (Meta or Baileys) and the bot, and starts the HTTP server with `httpServer(PORT)` (BuilderBot does not start it by itself). New flows must be imported and added to the `flows` array here.
- `flows/welcome.js`: entry point (`EVENTS.WELCOME`). Greeting and complex list in one message; the user chooses a complex (number or name) and `gotoFlow`s to it. Lists: Mosaico, Oporto, Altobelo, Lisboa, Nuevo Milenio, Villasol, Livorno.
- `flows/<unidad>.js`: one flow per complex (mosaico, oporto, altobelo, lisboa, nuevoMilenio, villasol, altea, majagua, oceana, paraiso, livorno). Each is a big `switch` over the menu option with hard-coded replies. They are largely copy-pasted from each other with unit-specific content.
- `flows/restart.js`: silent capture step after an answer (it sends nothing on entry; the prompt is the footer already appended to the answer). `8` = back to previous menu, `9` = main menu, `0` = end.
- `flows/footer.js`: `RESTART_FOOTER`, the "¿Necesitas algo más? 8 / 9 / 0" text appended to every answer.
- `flows/last-flow.js`: per-user (keyed by `ctx.from`) in-memory Map remembering the last unit flow so `8` in restart can return to it.
- `flows/idle-custom.js`: per-user 10-minute (600000 ms) inactivity timer; on timeout goes to `idleFlow`, which ends the conversation.
- `flows/amatista.js`, `flows/roterdam.js`: deprecated, commented out in `app.js` (Roterdam also in `welcome.js`).
- `media/`: images sent by the Oceana flow.
- `TEMPLATE_CHATBOT_UNIDAD.md`: questionnaire given to administrators to collect the content needed to create or update a unit's flow.

## Flow conventions

Each unit flow follows the same pattern:

1. `addKeyword([NAME], { sensitive: true })`, then an `addAction` that calls `reset(ctx, gotoFlow, 600000)` for the idle timer.
2. **One** `addAnswer([...], { capture: true }, handler)`: the array holds the title, the question and the whole menu (one message). The handler does `reset(...)`, defines `const reply = async (text) => await flowDynamic(text + RESTART_FOOTER)` and does `switch (ctx.body.trim())` over the options.
3. Each answer is a single `await reply(...)`, then `setLastFlow(ctx, flowX); return gotoFlow(flowRestartFinish)`. The menu's "back to main menu" option calls `gotoFlow(welcome)` with no text of its own; "0 end" calls `stop(ctx)` and `return endFlow('goodbye text')`.
4. Invalid input: `return fallBack('❌ Opción no válida...')` (sends only that text and keeps waiting for input).
5. Keep each answer plus the footer under 4096 characters (a media caption: 1024). If an answer must be split, send the parts with `flowDynamic` and only the last one with `reply`.

When adding or changing a unit: copy the closest existing flow, edit its menu and replies, register it in `app.js` and, if it should be selectable, in `flows/welcome.js`. Keep menu text and `switch` case numbers in sync.

## Gotchas

- `welcome.js` requires unit flows and `restart.js` lazily requires `welcome` to avoid a circular import; keep it that way.
- Altea, Majagua, Oceana and Paraiso are registered in `app.js` but are not in the welcome menu (reachable only by typing their keyword).
- `flows/oceana.js` uses the keyword `NUEVOMILENIO`, the same as Nuevo Milenio; likely a copy-paste bug.
- `flows/oceana.js` option 15 (court rules) is about 5,300 characters, over WhatsApp's 4096 limit, so it is sent as two messages (one per court), the footer only on the second. Before this it was a single oversized message that Meta rejected.
- On startup the Meta provider fetches the number's profile from Graph and emits `error` if that fails; `app.js` has a listener for it, because without one Node would crash the process.
- All state (timers, last flow) is in memory and lost on restart; timers are keyed by user phone number.
- Secrets live in `.env` (git-ignored). Do not commit it, nor `*.log`, `bot_sessions` or `*.qr.png` (written when running with `PROVIDER=baileys`).
