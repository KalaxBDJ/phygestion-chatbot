module.exports = function attachDashboard(web, usage, opts = {}) {
  const PORT = opts.port || process.env.DASHBOARD_PORT || 3000;
  const UNITS = opts.units || ['MOSAICO','OPORTO','ALTOBELO','ROTERDAM','LISBOA','NUEVO MILENIO','VILLASOL'];

  web.get('/api/usage', (req, res) => {
    const days = parseInt(req.query.days || '30', 10);
    const data = usage.getUsageAllUnits(UNITS, days);
    res.json(data);
  });

  web.get('/dashboard', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Chatbot Usage Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;background:#f6f8fb;color:#0f172a;margin:0;padding:24px}
        .wrap{max-width:1200px;margin:0 auto}
        header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        h1{font-size:20px;margin:0}
        .controls{display:flex;gap:8px;align-items:center}
        select,input[type=number],button{padding:8px 10px;border-radius:8px;border:1px solid #d1d5db;background:#fff}
        .grid{display:grid;grid-template-columns:1fr;gap:16px}
        .card{background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(15,23,42,0.06);display:flex;flex-direction:column}
        .card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
        .unit-title{font-weight:600}
        .badge{background:#eef2ff;color:#3730a3;padding:6px 8px;border-radius:999px;font-size:12px}
        canvas{width:100% !important;height:220px !important}
        .small{font-size:13px;color:#475569}
        @media (max-width:420px){header{flex-direction:column;align-items:flex-start;gap:8px}}
    </style>
</head>
<body>
    <div class="wrap">
        <header>
            <h1>Chatbot Usage — Últimos días</h1>
            <div class="controls">
                <label class="small">Días:</label>
                <select id="days">
                    <option value="7">7</option>
                    <option value="14">14</option>
                    <option value="30" selected>30</option>
                    <option value="60">60</option>
                </select>
                <button id="refresh">Actualizar</button>
            </div>
        </header>

        <section id="summary" class="card" style="margin-bottom:16px">
            <div class="card-head">
                <div class="unit-title">Resumen total — Todos los unidades</div>
                <div class="badge" id="summary-total">Total: 0</div>
            </div>
            <canvas id="summary-chart" style="height:160px"></canvas>
        </section>

        <div id="charts" class="grid"></div>
    </div>

    <script>
        async function fetchData(days){
            const resp = await fetch('/api/usage?days=' + days);
            return resp.json();
        }

        function csvForUnit(labels, data, unit){
            const rows = [['date','count']];
            for (let i = 0; i < labels.length; i++) rows.push([labels[i], String(data[i])]);
            return rows.map(r => r.join(',')).join('\\n');
        }

        function downloadCSV(filename, content){
            const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
        }

        let charts = [];
        let summaryChart = null;

        async function render(days){
            const json = await fetchData(days);
            const labels = json.labels;
            const colors = ['#0ea5e9','#f97316','#10b981','#ef4444','#7c3aed','#9333ea','#ef9a9a'];
            const fillColors = ['rgba(14,165,233,0.18)','rgba(249,115,22,0.18)','rgba(16,185,129,0.18)','rgba(239,68,68,0.18)','rgba(124,58,237,0.18)','rgba(147,51,234,0.18)','rgba(239,154,154,0.18)'];
            const container = document.getElementById('charts');
            container.innerHTML = '';
            charts.forEach(c => c.destroy && c.destroy());
            if (summaryChart && summaryChart.destroy) summaryChart.destroy();
            charts = [];
            summaryChart = null;

            // build totals per day
            const totals = labels.map((_, idx) => Object.keys(json.datasets).reduce((s, u) => s + (json.datasets[u][idx] || 0), 0));
            const totalSum = totals.reduce((a, b) => a + b, 0);
            document.getElementById('summary-total').textContent = 'Total: ' + totalSum;

            const createChartOptions = () => ({
                interaction: {
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x'
                },
                hover: {
                    mode: 'nearest',
                    intersect: false
                },
                plugins: {
                    tooltip: {
                    mode: 'nearest',
                    intersect: false
                    },
                    legend: { display: false }
                },
                elements: {
                    point: {
                    radius: 6,
                    hoverRadius: 10,
                    hitRadius: 25,
                    pointStyle: 'circle'
                    }
                },
                scales: {
                    x: { ticks: { maxRotation: 0 } },
                    y: { beginAtZero: true }
                },
                maintainAspectRatio: false
            });

            const datasetDefaults = (label, values, borderColor, backgroundColor) => ({
                label,
                data: values,
                borderColor,
                backgroundColor,
                fill: true,
                tension: 0.2,
                borderWidth: 3,
                pointBackgroundColor: borderColor,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 2
            });

            const createLineChart = (ctx, label, values, borderColor, backgroundColor) => new Chart(ctx, {
                type: 'line',
                data: { labels, datasets: [datasetDefaults(label, values, borderColor, backgroundColor)] },
                options: createChartOptions()
            });

            // render summary chart (totals)
            const sumCtx = document.getElementById('summary-chart').getContext('2d');
            summaryChart = createLineChart(sumCtx, 'Total por día', totals, '#0ea5e9', '#bae6fd');

            Object.keys(json.datasets).forEach((k,i) => {
                const data = json.datasets[k];
                const card = document.createElement('div');
                card.className = 'card';

                const head = document.createElement('div'); head.className = 'card-head';
                const title = document.createElement('div'); title.className = 'unit-title'; title.textContent = k;
                const total = data.reduce((a,b)=>a+b,0);
                const badge = document.createElement('div'); badge.className = 'badge'; badge.textContent = 'Total: ' + total;
                head.appendChild(title); head.appendChild(badge);

                const canvas = document.createElement('canvas');
                canvas.id = 'chart-' + i;

                const foot = document.createElement('div'); foot.style.display='flex'; foot.style.justifyContent='space-between'; foot.style.marginTop='8px';
                const info = document.createElement('div'); info.className='small'; info.textContent = 'Periodo: ' + labels[0] + ' → ' + labels[labels.length-1];
                const actions = document.createElement('div');
                const exportBtn = document.createElement('button'); exportBtn.textContent = 'Exportar CSV'; exportBtn.style.marginLeft='8px';
                exportBtn.onclick = () => downloadCSV(k + '-' + labels[0] + '-' + labels[labels.length-1] + '.csv', csvForUnit(labels, data, k));
                actions.appendChild(exportBtn);

                foot.appendChild(info); foot.appendChild(actions);

                card.appendChild(head); card.appendChild(canvas); card.appendChild(foot);
                container.appendChild(card);

                const ctx = canvas.getContext('2d');
                const chart = createLineChart(ctx, k, data, colors[i % colors.length], fillColors[i % fillColors.length]);
                charts.push(chart);
            });
        }

        document.getElementById('refresh').addEventListener('click', () => {
            const days = document.getElementById('days').value;
            render(days);
        });

        // initial render
        render(document.getElementById('days').value);
    </script>
</body>
</html>`);
  });

  web.listen(PORT, () => console.log(`Dashboard available at http://localhost:${PORT}/dashboard`));
}
