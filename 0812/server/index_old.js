import express from "express";
import Joi from "joi";
import { getBooks, getBook, addBook, editBook, removeBook } from "./db.js";
import cors from "cors";

const app = express();

// CRUD
// Create - app.post()
// Read   - app.get()
// Update - app.put()
// Delete - app.delete()

app.get("/", (req, res) => {
  res.send("It's alive! IT'S ALIVE!!!");
});

app.get("/demo", (req, res) => {
  res.send([1, 2, 3]);
});

// Params
app.get("/demo/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
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
// ---------------------------------------------

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

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ------------------------

app.get("/api/books", async (req, res) => {
  const books = await getBooks();
  res.send(books);
});

// app.get("/api/books/:id", (req, res) => {
//   const id = req.params.id;
//   const book = books.find((book) => book.id === parseInt(id));
//   if (!book) return res.status(404).send("Knyga su tokiu id neegzistuoja.");
//   res.send([book]);
// });

app.get("/api/books/:id", async (req, res) => {
  const id = req.params.id;
  const book = await getBook(id);
  if (book.length === 0) return res.status(404).send("Knyga su tokiu id neegzistuoja.");
  res.send(book);
});

// app.post("/api/books", (req, res) => {
//   const newBook = {
//     id: books.length + 1,
//     author: req.body.author,
//     title: req.body.title,
//   };
//   books.push(newBook);
//   res.send(books);
// });

// POST su duomenų verifikavimu (be Joi)
// app.post("/api/books", (req, res) => {
//   if (!req.body.author || !req.body.title || req.body.author.length < 5 || req.body.title.length < 1) {
//     res.status(400).send("Autorius turi turėti bent 5 simbolius ir pavadinimas turi turėti bent 1 simbolį.");
//     return;
//   }
//   const newBook = {
//     id: books.length + 1,
//     author: req.body.author,
//     title: req.body.title,
//   };
//   books.push(newBook);
//   res.send(books);
// });

// POST su Joi duomenų verifikavimu
// app.post("/api/books", (req, res) => {
//   const valid = validateBook(req.body);

//   if (valid.error) {
//     res.status(400).send(valid.error.details[0].message);
//     return;
//   }

//   const newBook = {
//     id: books.length + 1,
//     author: req.body.author,
//     title: req.body.title,
//   };
//   books.push(newBook);
//   res.send(books);
// });

app.post("/api/books", async (req, res) => {
  const valid = validateBook(req.body);

  if (valid.error) {
    res.status(400).send(valid.error.details[0].message);
    return;
  }

  const books = await addBook(req.body.author, req.body.title);
  res.send(books);
});

app.put("/api/books/:id", async (req, res) => {
  const id = req.params.id;
  // const book = books.find((book) => book.id === parseInt(id));
  // if (!book) return res.status(404).send("Knyga su tokiu id neegzistuoja.");

  const valid = validateBook(req.body);

  if (valid.error) {
    res.status(400).send(valid.error.details[0].message);
    return;
  }

  const book = await editBook(id, req.body.author, req.body.title);
  res.send(book);
});

app.delete("/api/books/:id", async (req, res) => {
  // const id = req.params.id;
  // const book = books.find((book) => book.id === parseInt(id));
  // if (!book) return res.status(404).send("Knyga su tokiu id neegzistuoja.");

  // const index = books.indexOf(book);
  // books.splice(index, 1);
  const books = await removeBook(req.params.id);
  res.send(books);
});

// ---------------------------------------------
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});

function validateBook(data) {
  const schema = Joi.object({
    author: Joi.string().min(5).required(),
    title: Joi.string().min(1).required(),
  });
  return schema.validate(data);
}
