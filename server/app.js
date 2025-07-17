const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 80;

app.use(bodyParser.json());

app.use(express.static('public'));


// Router

app.get('/', (req, res) => {

  const labasX20 = 'Labas '.repeat(120);

  res.send(labasX20);
});

app.get('/bebras', (req, res) => {
  res.send('Labas, Bebrai!');
});

app.get('/mielas/barsukas', (req, res) => {
  res.send('Labas, Barsukai!');
});

app.get('/spalva/:col', (req, res) => {

  const C = req.params.col;

  res.send(`
    <p style="color: ${C};">
      Labas, Spalva!
    </p>`
  );

});

// 1. Einant adresu /plus-desimt/14 turi būti atsakymas 24 (14 + 10 = 24) 14 yra kintamasis, kuris gali būti bet koks skaičius


app.get('/plus-desimt/:skaicius', (req, res) => {

  const sk = parseInt(req.params.skaicius);

  res.send(10 + sk + '');

});

// 2. Einant adresu /daugyba/14/2 turi būti atsakymas 28 (14 * 2 = 28) 14 ir 2 yra kintamieji, kurie gali būti bet kokie skaičiai

app.get('/daugyba/:skaicius1/:skaicius2', (req, res) => {

  const sk1 = parseInt(req.params.skaicius1);
  const sk2 = parseInt(req.params.skaicius2);

  res.send(sk1 * sk2 + '');

});

// /plus-vienuolika?skaicius2=2&skaicius1=5


app.get('/plus-vienuolika', (req, res) => {

  const sk1 = parseInt(req.query.skaicius1 || 0);
  const sk2 = parseInt(req.query.skaicius2 || 0);

  res.send(11 + sk1 + sk2  + '');

});

app.get('/kvadratas/:dydis', (req, res) => {
  const dydis = parseInt(req.params.dydis);
 
  let atsakymas = '<div style="display: grid; grid-template-columns: repeat(' + dydis + ', 1fr);">';
  for (let i = 0; i < dydis * dydis; i++)
  {
    atsakymas += '<div style="border: 1px solid black; padding: 10px; text-align: center;">' + (i + 1) + '</div>';
  }
 
  atsakymas += '</div>';
  res.send(atsakymas);
 
});

app.post('/animal', (req, res) => {

  console.log(req.body);

  let data = req.body; //duomenu masyvas

  let file = fs.readFileSync('./data.json', 'utf8'); // failo stringas
  file = JSON.parse(file); // failo masyvas

  file.push(data); // failo masyvas + duomenu objektas

  file = JSON.stringify(file); //failo vertimas i stringa

  fs.writeFileSync('./data.json', file); // failo stringo rasymas i faila

  res.json({
    success: true,
    message: 'Duomenys sėkmingai išsaugoti',
    // data: data
  });
});
 
//

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});