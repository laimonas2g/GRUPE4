const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forest'
})

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});



app.get('/all-trees', (req, res) => {

  // SELECT column1, column2, ...
  // FROM table_name;

  const sql = `
  SELECT id, name, height, type
  FROM trees
`;


con.query(sql, (err, result) => {
  if (err) throw err;
  res.json(result);
});





});

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});