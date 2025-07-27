const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'seconddb'
});

module.exports = pool;