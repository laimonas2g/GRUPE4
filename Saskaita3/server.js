const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 80;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to create.html
app.get('/', (req, res) => {
    res.redirect('/create.html');
});

const DATA_FILE = path.join(__dirname, 'data.json');

function readInvoices() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    try { return JSON.parse(data); }
    catch { return []; }
}
function writeInvoices(invoices) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(invoices, null, 2));
}

app.post('/api/invoices', (req, res) => {
    const invoices = readInvoices();
    const invoice = req.body;
    invoices.push(invoice);
    writeInvoices(invoices);
    res.json(invoice);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));