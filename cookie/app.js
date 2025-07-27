const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const fs = require('node:fs');
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));


app.use((req, res, next) => {

const token = req.cookies.session || '';
    if (token) {
        let users = fs.readFileSync('./users.json', 'utf8');
        users = JSON.parse(users);
        const user = users.find(u => u.token === token);
        if (user) {
            req.user = {
                name: user.name,
                email: user.email
            }
        } else {
            req.user = null;
        }
    } else {
        req.user = null;
    }





    const url = req.originalUrl;

    if (url === '/profile' && !req.user) {
        res.status(401).send('Unauthorized');
        return;
    }

    next();
});



app.get('/', (req, res) => {

    let counter;

    const minute = 60 * 1000;
    const hour = 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;

    if (req.cookies.kartai) {
        counter = parseInt(req.cookies.kartai); // nuskaitome kuki
    } else {
        counter = 0;
    }

    counter++;

    res.cookie('kartai', counter, { maxAge: day }); // irasome kuki

    res.send(`
        Hello ${counter} Cookie!
        <a href="http://localhost:3000/reset/">TRINTI</a>
    `);
});



app.get('/reset', (req, res) => {

    setTimeout(_ => {

        res.clearCookie('kartai'); //istrina cookie uzdedant praeities laika

        res.redirect('http://localhost:3000/');

    }, 5000);


});

app.get('/login', (req, res) => {

    if (req.user) {
        res.redirect('http://localhost:3000/');
        return;
    }

    const file = fs.readFileSync('./templates/login.html', 'utf8');
    res.send(file);
});

app.post('/logout', (req, res) => {
    res.clearCookie('session');
    res.json({
        success: true
    });
});



app.post('/login', (req, res) => {

    const email = req.body.email;
    const psw = md5(req.body.psw);

    let users = fs.readFileSync('./users.json', 'utf8');
    users = JSON.parse(users);

    const user = users.find(u => u.email === email && u.psw === psw);

    if (!user) {
        res.json({
            success: false,
            message: 'User email or password invalid'
        });
    } else {

        const token = md5(Math.random() + 'SALT 2587415468'); // psuedo atsitiktinis stringas

        user.token = token;
        users = JSON.stringify(users);
        fs.writeFileSync('./users.json', users);

        res.cookie('session', token);

        res.json({
            success: true,
            message: 'Welcome!',
        });
    }

});

app.get('/profile', (req, res) => {

    const userName = req.user.name

    let file = fs.readFileSync('./templates/profile.html', 'utf8');
    file = file.replace('{{userName}}', userName);
    res.send(file);

});



app.listen(port, () => {
    console.log(`Cookie app listening on port ${port}`)
});