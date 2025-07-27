const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; // Change this in production

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create(username, password);
    res.json({ success: true });
  } catch {
    res.status(400).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const valid = await User.validate(username, password);
  if (valid) {
    const user = await User.findByUsername(username);
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;