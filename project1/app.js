const express = require('express');
const app = express();
const port = 80;
// Serve static files from the public directory
app.use(express.static('public'));
// Default route serves the create.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/create.html');
});
app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});

