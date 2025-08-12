import express from 'express';

const app = express();

// CRUD 
// Create - app.post() app iskvies post funkcija
// Read   - app.get()
// Update - app.put()
// Delete - app.delete()

app.get('/', (req, res) => {
    res.send("It's alive! IT'S ALIVE!!!");
}); //portas, kuris stebi serveri

app.get('/demo', (req, res) => {
    res.send([1, 2, 3]);
});

// Parameters, params
app.get("/demo/:id", (req, res) => {
    const id = req.params.id;
    res.send();
});

app.get("/demo/:id/:cat", (req, res) => {
    const id = req.params.id;
    const cat = req.params.cat;
    res.send([id, cat]);
});

// Queries
app.get("/query", (req, res) => {
    const q = req.query;
    res.send(q);
});
// -----------------------------------------

// LAIKINA DB
const books = [
    {
        id: 1,
        author: "Kobo Abe",
        title: "Žmogus-dėžė",
    },
    {
        id: 2,
        author: "Iain Banks",
        title: "Tiltas",
    },
    {
        id: 3,
        author: "Italo Calvino",
        title: "Mūsų protėviai",
    },
];

app.get('/api/books', (req, res) => {
    res.send(books);
})

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) return res.status(404).send('Knyga su tokiu id neegzistuoja.');
    res.status(200).send([book]); // WTF, kodel negalima
})

// -----------------------------------------

app.listen(3000, () => {
    console.log('Listening on Port: 3000...')
});

