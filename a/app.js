const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));

// Router

app.get('/', (req, res) => {

  const labasX20 = 'Labas'.repeat(20);

  res.send(labasX20);
});

//2. Einant adresu /daugyba/14/2 turi būti atsakymas 28 (14 * 2 = 28) 14 ir 2 yra kintamieji, kurie gali būti bet kokie skaičiai
app.get('/daugyba/:skaicius1/:skaicius2', (req, res) => {

  const sk1 = parseInt(req.params.skaicius1);
  const sk2 = parseInt(req.params.skaicius2);
  res.send(sk1 * sk2 + '');

});

// /plus-vienuolika?skaicius1=2&skaicius2=5

app.get('/plus-vienuolika', (req, res) => {

  const sk1 = parseInt(req.query.skaicius1 || 0);
  const sk2 = parseInt(req.query.skaicius2 || 0);

  res.send(11 + sk1 + sk2 + '');

})

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`)
})
