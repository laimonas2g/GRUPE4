const fs = require('node:fs');
const md5 = require('md5');

const users = [
    { name: 'Briedis', email: 'briedis@gmail.com', psw: md5('123'), token: '' },
    { name: 'Barsukas', email: 'barsukas@gmail.com', psw: md5('123'), token: '' },
    { name: 'Bebras', email: 'bebras@gmail.com', psw: md5('123'), token: '' }
];

fs.writeFileSync('./users.json', JSON.stringify(users));