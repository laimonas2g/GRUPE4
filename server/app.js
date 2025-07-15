const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));


// Router

app.get('/', (req, res) => {
  res.send('Labas, mano mielasis pasauli!');
});

//

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});