const pool = require('../utils/pool');

module.exports = class Book {
  id;
  name;
  genre;
  url;
  released;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.url = row.url;
    this.released = row.released;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM books;');
    // return rows.map((row) => new Book(row));
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books where id=$1;', [id]);
    if (!rows[0]) return null;

    return new Book(rows[0]);
  }
};
