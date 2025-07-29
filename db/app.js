const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forest'
});

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
  -- WHERE name LIKE '%a_'
  ORDER BY type DESC, name
  `;


  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });




});


app.post('/tree', (req, res) => {

  const name = req.body.name;
  const type = req.body.type;
  const height = req.body.height;

  // INSERT INTO table_name (column1, column2, column3, ...)
  // VALUES (value1, value2, value3, ...);

  const sql = `
    INSERT INTO trees (name, type, height)
    VALUES (?, ?, ?)
  `;

  con.query(sql, [name, type, height], (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});

app.delete('/tree/:id', (req, res) => {

  const id = req.params.id

  // DELETE FROM table_name WHERE condition;

  const sql = `
    DELETE FROM trees
    WHERE id = ?
  `;

  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});


app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});