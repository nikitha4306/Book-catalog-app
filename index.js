// index.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', booksRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

