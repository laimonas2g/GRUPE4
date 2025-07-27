const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required.' });
  try {
    const hash = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hash]
    );
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ message: 'Username already exists.' });
    } else {
      res.status(500).json({ message: 'Registration failed.', error: err });
    }
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required.' });
  try {
    const rows = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed.', error: err });
  }
});

// Get a random question by difficulty
app.get('/question/:difficulty', async (req, res) => {
  const { difficulty } = req.params;
  try {
    const rows = await db.query(
      'SELECT * FROM questions WHERE difficulty = ? ORDER BY RAND() LIMIT 1',
      [difficulty]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No questions found.' });
    }
    // Don't send the answer!
    const { answer, ...question } = rows[0];
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: 'Could not retrieve question.', error: err });
  }
});

// Submit an answer
app.post('/answer', async (req, res) => {
  const { user_id, question_id, user_answer } = req.body;
  if (!user_id || !question_id || !user_answer)
    return res.status(400).json({ message: 'user_id, question_id and user_answer required.' });
  try {
    const rows = await db.query(
      'SELECT * FROM questions WHERE id = ?',
      [question_id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Question not found.' });
    }
    const correct = rows[0].answer.trim().toLowerCase() === user_answer.trim().toLowerCase();
    await db.query(
      'INSERT INTO user_answers (user_id, question_id, user_answer, correct) VALUES (?, ?, ?, ?)',
      [user_id, question_id, user_answer, correct]
    );
    res.json({ correct, correct_answer: rows[0].answer });
  } catch (err) {
    res.status(500).json({ message: 'Could not submit answer.', error: err });
  }
});

app.listen(3000, () => console.log('Quiz app running on port 3000!'));