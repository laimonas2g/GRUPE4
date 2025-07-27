// Express biblioteka, skirta kurti serveri
const express = require('express');
// Įtraukiame failų sistemos modulį darbui su failais
const fs = require('fs');
// Įtraukiame kelių modulį darbui su failų keliais
const path = require('path');
// Sukuriame Express programos objektą
const app = express();
// Nustatome serverio portą (80)
const PORT = 80;

// Leidžiame apdoroti JSON formato užklausų kūnus
app.use(express.json());
// Nustatome statinių failų katalogą (public)
app.use(express.static(path.join(__dirname, 'public')));

// Nukreipiame pagrindinį puslapį į create.html
app.get('/', (req, res) => {
    res.redirect('/create.html');
});

// Nustatome duomenų failo kelią
const DATA_FILE = path.join(__dirname, 'data.json');

// Funkcija, skaitanti sąskaitas iš failo
function readInvoices() {
    // Jei failas neegzistuoja, grąžiname tuščią masyvą
    if (!fs.existsSync(DATA_FILE)) return [];
    // Nuskaitome failo turinį kaip tekstą
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    try {
        // Bandome konvertuoti tekstą į objektą (JSON)
        return JSON.parse(data);
    }
    catch {
        // Jei nepavyksta, grąžiname tuščią masyvą
        return [];
    }
}

// Funkcija, įrašanti sąskaitas į failą
function writeInvoices(invoices) {
    // Įrašome masyvą į failą JSON formatu (su formatavimu)
    fs.writeFileSync(DATA_FILE, JSON.stringify(invoices, null, 2));
}

// Grąžiname visas sąskaitas per API
app.get('/api/invoices', (req, res) => {
    res.json(readInvoices());
});

// Grąžiname vieną sąskaitą pagal ID per API
app.get('/api/invoices/:id', (req, res) => {
    const invoices = readInvoices();
    // Ieškome sąskaitos pagal ID
    const invoice = invoices.find(i => String(i.id) === String(req.params.id));
    // Jei nerandame, grąžiname 404 klaidą
    if (!invoice) return res.status(404).json({ error: 'Not found' });
    // Grąžiname rastą sąskaitą
    res.json(invoice);
});

// Sukuriame naują sąskaitą per API
app.post('/api/invoices', (req, res) => {
    const invoices = readInvoices();
    // Gauname naują sąskaitą iš užklausos kūno
    const invoice = req.body;
    // Pridedame ją prie sąrašo
    invoices.push(invoice);
    // Įrašome atnaujintą sąrašą į failą
    writeInvoices(invoices);
    // Grąžiname naują sąskaitą
    res.json(invoice);
});

// Atnaujiname sąskaitą pagal ID per API
app.put('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    // Randame sąskaitos indeksą pagal ID
    const idx = invoices.findIndex(i => String(i.id) === String(req.params.id));
    // Jei nerandame, grąžiname 404 klaidą
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    // Atnaujiname sąskaitą naujais duomenimis
    invoices[idx] = req.body;
    // Įrašome atnaujintą sąrašą į failą
    writeInvoices(invoices);
    // Grąžiname atnaujintą sąskaitą
    res.json(invoices[idx]);
});

// Ištriname sąskaitą pagal ID per API
app.delete('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    // Pašaliname sąskaitą pagal ID
    invoices = invoices.filter(i => String(i.id) !== String(req.params.id));
    // Įrašome atnaujintą sąrašą į failą
    writeInvoices(invoices);
    // Grąžiname sėkmės žinutę
    res.json({ success: true });
});

// Paleidžiame serverį nurodytame porte
app.listen(PORT, () => console.log(`Serverio portas: http://localhost:${PORT}/`));