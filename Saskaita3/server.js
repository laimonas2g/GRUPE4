const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 80; // Use 80 for production if you want

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'data.json');

// Helper to read invoices from file
function readInvoices() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    try { return JSON.parse(data); }
    catch { return []; }
}

// Helper to write invoices to file
function writeInvoices(invoices) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(invoices, null, 2));
}

// Get all invoices
app.get('/api/invoices', (req, res) => {
    res.json(readInvoices());
});

app.get('/', (req, res) => {
  res.redirect('/create.html');
});

// Get single invoice
app.get('/api/invoices/:id', (req, res) => {
    const invoices = readInvoices();
    const invoice = invoices.find(i => String(i.id) === String(req.params.id));
    if (!invoice) return res.status(404).json({ error: 'Not found' });
    res.json(invoice);
});

// Create new invoice
app.post('/api/invoices', (req, res) => {
    const invoices = readInvoices();
    const invoice = req.body;
    invoices.push(invoice);
    writeInvoices(invoices);
    res.json(invoice);
});

// Update invoice
app.put('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    const idx = invoices.findIndex(i => String(i.id) === String(req.params.id));
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    invoices[idx] = req.body;
    writeInvoices(invoices);
    res.json(invoices[idx]);
});

// Delete invoice
app.delete('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    invoices = invoices.filter(i => String(i.id) !== String(req.params.id));
    writeInvoices(invoices);
    res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));