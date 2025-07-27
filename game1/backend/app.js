const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const saveRoutes = require('./routes/save');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/save', saveRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server port ${PORT}`);
});