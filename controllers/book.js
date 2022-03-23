const Book = require('../models/book');
function getBooks(req, res) {
    Book.find((err, books_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(books_list);
        }
    });
}
function addBook(req, res) {
    bookObj = new Book(req.body);
    bookObj.save((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('New Book added');
        }
    });
}
function editBook(req, res) {
    const editedBook = req.body;
    Book.findByIdAndUpdate(req.params._id, editedBook, function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json('Your Book is now Edited');
        }
    });
}
function getBookById(req, res) {
    Book.findById(req.params._id).exec((err, ourBook) => {
        if (err) {
            res.json(err);
        } else {
            res.json(ourBook);
        }
    });
}
function getBookByAuthor(req, res) {
    Book.find()
        .populate('author')
        .exec((err, books_list) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ status: 1, data: books_list });
            }
        });
}
function getBookByCondition(req, res) {
    Book.find({ name: req.params.name }).exec((err, books_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(books_list);
        }
    });
}

function getBookByAuthorCategory(req, res) {
    Book.find()
        .populate('author')
        .populate('category')
        .exec((err, books_list) => {
            if (err) {
                res.json(err);
            } else {
                res.json(books_list);
            }
        });
}
module.exports = {
    getBooks,
    addBook,
    editBook,
    getBookById,
    getBookByAuthor,
    getBookByCondition,
    getBookByAuthorCategory,
};
