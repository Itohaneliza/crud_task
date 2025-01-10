const express = require('express');
const Library = require('../models/libraryModel.js');
const router = express.Router();
const { getAllBooks, addBook, updateBook, deleteBook } = require('../controller/libraryController.js');

router.get('/library', getAllBooks);

router.post('/library', addBook);

router.put('/library/:id', updateBook);

router.delete('/library/:id', deleteBook);


module.exports = router;