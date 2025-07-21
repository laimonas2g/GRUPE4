const express = require('express'); // express biblioteka
const fs = require('fs'); // Įtraukiame failų sistemos modulį darbui su failais
const path = require('path'); // Įtraukiame kelių modulį darbui su failų keliais
const app = express(); // Sukuriame Express programos objektą
const PORT = 80;

app.use(express.json()); // Leidžiame apdoroti JSON formato užklausų kūnus
app.use(express.static(path.join(__dirname, 'public'))); // Nustatome statinių failų katalogą (public)

app.get('/', (req, res) => {
    res.redirect('/create.html'); // Nukreipiame pagrindinį puslapį į create.html
});

// Nustatome duomenų failo kelią
const DATA_FILE = path.join(__dirname, 'data.json');

function readInvoices() { // Funkcija, skaitanti sąskaitas iš failo
    if (!fs.existsSync(DATA_FILE)) return [];  // Jei failas neegzistuoja, grąžiname tuščią masyvą
    const data = fs.readFileSync(DATA_FILE, 'utf8'); // Nuskaitome failo turinį kaip tekstą
    try {
        return JSON.parse(data); // Bandome konvertuoti tekstą į objektą (JSON)
    }
    catch {
        return [];
    }
}

function writeInvoices(invoices) {// Funkcija, įrašanti sąskaitas į failą
    fs.writeFileSync(DATA_FILE, JSON.stringify(invoices, null, 2));  // Įrašome masyvą į failą JSON formatu (su formatavimu)
}

app.get('/api/invoices', (req, res) => { // Grąžiname visas sąskaitas per API
    res.json(readInvoices());
});

// Grąžiname viena saskaita pagal ID per API
app.get('/api/invoices/:id', (req, res) => {
    const invoices = readInvoices();
    const invoice = invoices.find(i => String(i.id) === String(req.params.id));   // Ieškome sąskaitos pagal ID
    if (!invoice) return res.status(404).json({ error: 'Not found' });  // Jei nerandame, gražiname 404 klaidą
    res.json(invoice);  // Gražiname rasta saskaita
});

app.post('/api/invoices', (req, res) => { // Sukuriame naują sąskaitą per API
    const invoices = readInvoices();
    const invoice = req.body; // Gauname naują sąskaitą iš užklausos kūno
    invoices.push(invoice);     // Pridedame ją prie sąrašo
    writeInvoices(invoices);     // Įrašome atnaujintą sąrašą į failą
    res.json(invoice);     // Grąžiname naują sąskaitą
});

// Atnaujiname sąskaitą pagal ID per API
app.put('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    const idx = invoices.findIndex(i => String(i.id) === String(req.params.id)); // Randame sąskaitos indeksą pagal ID
    if (idx === -1) return res.status(404).json({ error: 'Not found' }); // Jei nerandame, grąžiname 404 klaidą
    invoices[idx] = req.body;   // Atnaujiname sąskaitą naujais duomenimis
    writeInvoices(invoices); // Įrašome atnaujintą sąrašą į failą
    res.json(invoices[idx]); // Grąžiname atnaujintą sąskaitą
});

app.delete('/api/invoices/:id', (req, res) => { // Ištriname sąskaitą pagal ID per API
    let invoices = readInvoices();
    invoices = invoices.filter(i => String(i.id) !== String(req.params.id)); // Pašaliname sąskaitą pagal ID
    writeInvoices(invoices); // Įrašome atnaujintą sąrašą į failą
    res.json({ success: true }); // Grąžiname sėkmės žinutę
});

app.listen(PORT, () => console.log(`Serverio portas: http://localhost:${PORT}/`)); // Paleidžiame serverį nurodytame porte