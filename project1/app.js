const express = require('express');
const app = express();
const port = 80;

// Router

app.get('/', (req, res) => {
  res.send('Sveiki AA!');
});

//

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});