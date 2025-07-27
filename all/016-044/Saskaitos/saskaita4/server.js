const express = require('express'); // express Biblioteka
const fs = require('fs'); // Įtraukiame failų sistemos modulį darbui su failais
const path = require('path'); // Įtraukiame path modulį darbui su file path
const app = express(); // Sukuriame Express programos objektą
const PORT = 3000;

app.use(express.json()); // Leidžiame apdoroti JSON formato užklausų body
app.use(express.static(path.join(__dirname, 'public'))); // Nustatome statinių failų katalogą (public)

app.get('/', (req, res) => {
    res.redirect('/create.html'); // nukreipiam pagrindini puslapi -> create.html
});

// Nustatome duomenų failo kelią
const DATA_FILE = path.join(__dirname, 'data.json');

function readInvoices() { // Funkcija, skaitanti sąskaitas iš failo
    if (!fs.existsSync(DATA_FILE)) return [];  // Jei failas neegzistuoja = grazina tuscia masyva
    const data = fs.readFileSync(DATA_FILE, 'utf8'); // skaitome failo turini kaip teksta
    try {
        return JSON.parse(data);  // Bandome konvertuoti tekstą į objektą (JSON)
    }
    catch {
        return [];      /* jei nepavyksta = grazina tuscia masyva */
    }
}

function writeInvoices(invoices) {// function irasanti saskaitas i faila
    fs.writeFileSync(DATA_FILE, JSON.stringify(invoices, null, 2));  // Įrašome masyvą į failą JSON formatu (su formatavimu)
}

app.get('/api/invoices', (req, res) => {  // grazina visas saskaitas per API
    res.json(readInvoices());
});

// grazina viena saskaita pagal ID per API
app.get('/api/invoices/:id', (req, res) => {
    const invoices = readInvoices();
    const invoice = invoices.find(i => String(i.id) === String(req.params.id));   // Ieško sąskaitos pagal ID
    if (!invoice) return res.status(404).json({ error: 'Not found' });  // Jei neranda, gražiname 404 klaidą
    res.json(invoice);  // grazina rasta saskaita
});

app.post('/api/invoices', (req, res) => { // Sukuria naują sąskaitą per API
    const invoices = readInvoices();
    const invoice = req.body; // gauname nauja saskaita is uzklausos body
    // pridedame ja prie saraso
    invoices.push(invoice);     
    writeInvoices(invoices);     // irasome atnaujinta saraša i faila
    res.json(invoice);     // gražiname nauja saskaita
});

// atnaujiname saskaita pagal ID per API
app.put('/api/invoices/:id', (req, res) => {
    let invoices = readInvoices();
    const idx = invoices.findIndex(i => String(i.id) === String(req.params.id)); // Randame sąskaitos indeksą pagal ID
    if (idx === -1) return res.status(404).json({ error: 'Not found' }); // Jei nerandame, grąžiname 404 klaidą
    invoices[idx] = req.body;   // Atnaujiname sąskaitą naujais duomenimis
    writeInvoices(invoices); // Įrašome atnaujintą sąrašą į failą
    // grąziname atnaujinta saskaita
    res.json(invoices[idx]); 
});

app.delete('/api/invoices/:id', (req, res) => { // Ištriname sąskaitą pagal ID per API
    let invoices = readInvoices();
    invoices = invoices.filter(i => String(i.id) !== String(req.params.id)); // Pašaliname sąskaitą pagal ID
    writeInvoices(invoices); // Įrašome atnaujintą sąrašą į failą
    res.json({ success: true }); // Grąžiname sėkmės žinutę
});

app.listen(PORT, () => console.log(`Serverio portas: http://localhost:${PORT}/`)); // Paleidžiame serverį nurodytame porte