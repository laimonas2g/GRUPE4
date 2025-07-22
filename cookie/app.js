const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(cookieParser());


app.get('/', (req, res) => {

    let counter;

    const minute = 60 * 1000;
    const hour = 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;

    if (req.cookies.kartai) {
        counter = parseInt(req.cookies.kartai); // nuskaitome cookie
    } else {
        counter = 0;
    }

    counter++;

    res.cookie('kartai', counter,  {maxAge: minute} ) // irasome kuki

    //res.clearCookie('kartai'); // istriname kuki uzdedant praeities laika


  res.send(`Hello ${counter} Cookie!
    <a href="http://localhost:3000/reset/">TRINTI</a>`);
})

app.get('/reset', (req, res) => {
    res.clearCookie('kartai');

    res.redirect('http://localhost:3000/'); // nukreipiame i pagrindini puslapi
})

app.listen(port, () => {
  console.log(`Cookie app listening on port ${port}`)
})