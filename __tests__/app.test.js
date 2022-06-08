const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const Book = require('../lib/models/Book');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    const books = await Book.getAll();
    const expected = books.map((book) => {
      return { id: book.id, name: book.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/books/:id should return book detail', async () => {
    const res = await request(app).get('/books/1');
    const bookOne = {
      id: '1',
      name: '1984',
      genre: 'dystopian function',
      url: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
      released: 1949,
    };
    expect(res.body).toEqual(bookOne);
  });

  afterAll(() => {
    pool.end();
  });
});
