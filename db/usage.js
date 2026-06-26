const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = path.join(__dirname, '..', 'usage.sqlite');
const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');

db.prepare(`
  CREATE TABLE IF NOT EXISTS usage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    unit TEXT NOT NULL,
    date TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    UNIQUE(unit, date)
  )
`).run();

// Colombia (Bogotá) — use Intl to format dates in America/Bogota timezone.
const formatBogota = (date = new Date()) =>
  new Intl.DateTimeFormat('sv', { timeZone: 'America/Bogota' }).format(date);

const increment = (unit) => {
  const date = formatBogota(new Date()); // YYYY-MM-DD in Bogotá time
  const upsert = db.prepare(`
    INSERT INTO usage (unit, date, count)
    VALUES (?, ?, 1)
    ON CONFLICT(unit, date) DO UPDATE SET count = count + 1
  `);
  upsert.run(unit, date);
};

const getUsageForUnit = (unit, days = 30) => {
  const labels = [];
  const counts = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(formatBogota(d));
  }

  const rows = db.prepare(`SELECT date, count FROM usage WHERE unit = ? AND date >= ? ORDER BY date`).all(unit, labels[0]);
  const map = Object.fromEntries(rows.map(r => [r.date, r.count]));
  for (const l of labels) counts.push(map[l] || 0);

  return { labels, counts };
};

const getUsageAllUnits = (units, days = 30) => {
  const labels = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(formatBogota(d));
  }

  const result = { labels, datasets: {} };
  for (const unit of units) {
    const rows = db.prepare(`SELECT date, count FROM usage WHERE unit = ? AND date >= ? ORDER BY date`).all(unit, labels[0]);
    const map = Object.fromEntries(rows.map(r => [r.date, r.count]));
    result.datasets[unit] = labels.map(l => map[l] || 0);
  }
  return result;
};

module.exports = { increment, getUsageForUnit, getUsageAllUnits };
