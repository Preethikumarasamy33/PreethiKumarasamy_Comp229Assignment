let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//coonect to our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);


           res.render('pages/book', {title: 'Book List', BookList: bookList})
        }
    });
});

module.exports = router;