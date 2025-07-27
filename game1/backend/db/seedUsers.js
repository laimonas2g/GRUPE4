const User = require('../models/User');

async function seed() {
  try {
    await User.create('testuser', 'password');
    await User.create('anotheruser', 'password123');
    console.log('Users created!');
  } catch (err) {
    console.log('User already exists or error:', err);
  }
}

seed();