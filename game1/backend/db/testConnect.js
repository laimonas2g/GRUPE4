const mariadb = require('mariadb');

async function test() {
  try {
    const conn = await mariadb.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'firstdb',
      port: 3306 // or your port
    });
    console.log('Connected!');
    await conn.end();
  } catch (err) {
    console.error('Connection error:', err);
  }
}

test();