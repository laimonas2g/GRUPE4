const pool = require('../db/mariadb');
const md5 = require('../db/md5');

const User = {
  async create(username, password) {
    const conn = await pool.getConnection();
    await conn.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, md5(password)]);
    conn.release();
  },

  async findByUsername(username) {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users WHERE username = ?', [username]);
    conn.release();
    return rows[0];
  },

  async validate(username, password) {
    const user = await this.findByUsername(username);
    if (!user) return false;
    return user.password === md5(password);
  },

  async getAll() {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT id, username FROM users');
    conn.release();
    return rows;
  }
};

module.exports = User;