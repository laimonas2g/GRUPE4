import { getBooks, getBook, addBook, editBook, removeBook } from "./db.js";
import express from "express";
import cors from "cors";
import Joi from "joi";

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ------------------------

app.get("/api/books", async (req, res) => {
  const books = await getBooks();
  res.send(books);
});

app.get("/api/books/:id", async (req, res) => {
  const id = req.params.id;
  const book = await getBook(id);
  if (book.length === 0) return res.status(404).send("Knyga su tokiu id neegzistuoja.");
  res.send(book);
});

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
  const valid = validateBook(req.body);
  if (valid.error) {
    res.status(400).send(valid.error.details[0].message);
    return;
  }
  const book = await editBook(id, req.body.author, req.body.title);
  res.send(book);
});

app.delete("/api/books/:id", async (req, res) => {
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
