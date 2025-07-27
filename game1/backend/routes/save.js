const express = require('express');
const jwt = require('jsonwebtoken');
const GameSave = require('../models/GameSave');
const JWT_SECRET = 'your_jwt_secret';

const router = express.Router();

function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

router.post('/', authenticate, async (req, res) => {
  await GameSave.save(req.user.userId, JSON.stringify(req.body.gamestate));
  res.json({ success: true });
});

router.get('/', authenticate, async (req, res) => {
  const gamestate = await GameSave.load(req.user.userId);
  res.json({ gamestate });
});

module.exports = router;