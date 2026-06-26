const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = path.join(__dirname, '..', 'usage.sqlite');
const db = new Database(DB_PATH);

const UNITS = ['MOSAICO','OPORTO','ALTOBELO','ROTERDAM','LISBOA','NUEVO MILENIO','VILLASOL'];
const DAYS = 30;
const MAX_PER_DAY = 8;

// Simple deterministic RNG when seed provided
function makeRNG(seed) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(1664525, s) + 1013904223 | 0;
    return (s >>> 0) / 4294967296;
  };
}

const rng = makeRNG(12345);

const formatBogota = (date = new Date()) =>
  new Intl.DateTimeFormat('sv', { timeZone: 'America/Bogota' }).format(date);

const insert = db.prepare(`
  INSERT INTO usage (unit, date, count)
  VALUES (?, ?, ?)
  ON CONFLICT(unit, date) DO UPDATE SET count = excluded.count
`);

const insertMany = db.transaction((rows) => {
  for (const r of rows) insert.run(r.unit, r.date, r.count);
});

const rows = [];
const today = new Date();
for (let i = 0; i < DAYS; i++) {
  const d = new Date(today);
  d.setDate(today.getDate() - i);
  const date = formatBogota(d);
  for (const unit of UNITS) {
    // generate a random count, bias some units to have more activity
    const base = (unit === 'MOSAICO' || unit === 'OPORTO') ? 1.5 : 1.0;
    const n = Math.floor(rng() * MAX_PER_DAY * base);
    rows.push({ unit, date, count: n });
  }
}

insertMany(rows);
console.log(`Seeded ${rows.length} rows into ${DB_PATH}`);
