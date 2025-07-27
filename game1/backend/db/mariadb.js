const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',        // empty string if no password
  database: 'firstdb',
  connectionLimit: 5
});

module.exports = pool;