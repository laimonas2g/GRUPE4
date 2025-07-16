const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));


// Router

app.get('/', (req, res) => {

  const labasX20 = 'Labas'.repeat(20);

  res.send(labasX20);
});

app.get('/bebras', (req, res) => {
  res.send('Labas, bebrai!');
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
  )
});

//1. Einant adresu /plus-desimt/14 turi būti atsakymas 24 (14 + 10 = 24) 14 yra kintamasis, kuris gali būti bet koks skaičius


app.get('/plus-desimt/:skaicius', (req, res) => {

  const sk = parseInt(req.params.skaicius);

  res.send(10 + sk + '');

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
