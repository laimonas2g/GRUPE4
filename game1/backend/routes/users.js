const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = 'your_jwt_secret';

const router = express.Router();

// GET /api/users - list all users (id, username)
router.get('/', async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users/me - get current user info
router.get('/me', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const { userId } = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    const user = await User.findByUsername(userId);
    res.json({ id: user.id, username: user.username });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;