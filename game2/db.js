const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'quizdb' // <--- This is your current database
});

module.exports = pool;