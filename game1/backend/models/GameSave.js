const pool = require('../db/mariadb');

const GameSave = {
  async save(userId, gamestate) {
    const conn = await pool.getConnection();
    await conn.query(
      'INSERT INTO saves (user_id, gamestate) VALUES (?, ?) ON DUPLICATE KEY UPDATE gamestate = ?, updated_at = CURRENT_TIMESTAMP',
      [userId, gamestate, gamestate]
    );
    conn.release();
  },

  async load(userId) {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM saves WHERE user_id = ?', [userId]);
    conn.release();
    return rows[0]?.gamestate || null;
  }
};

module.exports = GameSave;