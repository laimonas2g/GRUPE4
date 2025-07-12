const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const port = 5005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const con = mysql.createConnection({
    host: 'https://in3.dev/inv/',
    user: 'root',
    password: '',
    database: 'miskas'
});

app.get('/', (req, res) => {
    fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => console.log(data));
    
});

app.get('/read', (req,res) =>{

});

app.listen(port, () => {
    console.log(`PVM saskaita darbui pasiruošus ant ${port} porto!`)
  });