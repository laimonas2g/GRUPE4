const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_PATH = path.join(__dirname, 'data/invoices.json');

app.use(cors());
app.use(express.json());

const readInvoices = async () => await fs.readJSON(DATA_PATH).catch(() => []);
const writeInvoices = async (invoices) => await fs.writeJSON(DATA_PATH, invoices, { spaces: 2 });

app.get('/api/invoices', async (req, res) => {
  res.json(await readInvoices());
});

app.get('/api/invoices/:id', async (req, res) => {
  const invoices = await readInvoices();
  const invoice = invoices.find(inv => inv.id === req.params.id);
  invoice ? res.json(invoice) : res.status(404).send('Not found');
});

app.post('/api/invoices', async (req, res) => {
  const invoices = await readInvoices();
  const invoice = { ...req.body, id: uuidv4() };
  invoices.push(invoice);
  await writeInvoices(invoices);
  res.json(invoice);
});

app.put('/api/invoices/:id', async (req, res) => {
  let invoices = await readInvoices();
  const idx = invoices.findIndex(inv => inv.id === req.params.id);
  if (idx === -1) return res.status(404).send('Not found');
  invoices[idx] = { ...invoices[idx], ...req.body };
  await writeInvoices(invoices);
  res.json(invoices[idx]);
});

app.delete('/api/invoices/:id', async (req, res) => {
  let invoices = await readInvoices();
  invoices = invoices.filter(inv => inv.id !== req.params.id);
  await writeInvoices(invoices);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));