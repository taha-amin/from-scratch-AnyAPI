const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res) => {
    const match = await Book.getAll();
    const books = match.map((book) => {
      return { id: book.id, name: book.name };
    });
    res.json(books);
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingBook = await Book.getById(id);
    res.json(matchingBook);
  });
