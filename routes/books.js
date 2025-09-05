// routes/books.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all books
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM books ORDER BY date_read DESC');
  res.render('index', { books: result.rows });
});

// Show form to add a book
router.get('/add', (req, res) => {
  res.render('add');
});

// Handle form submission
router.post('/add', async (req, res) => {
  const { title, author, date_read, rating, notes, open_library_id } = req.body;
  await pool.query(
    'INSERT INTO books (title, author, date_read, rating, notes, open_library_id) VALUES ($1, $2, $3, $4, $5, $6)',
    [title, author, date_read, rating, notes, open_library_id]
  );
  res.redirect('/');
});

module.exports = router;

