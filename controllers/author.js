const Author = require('../models/author');
function getAuthors(req, res) {
    Author.find((err, authors_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(authors_list);
        }
    });
}
const addAuthor = (req, res) => {
    let { first_name, last_name, dob, dod } = req.body;
    let authorObj = new Author({ first_name, last_name, dob, dod });
    authorObj.save((error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ status: 'Author added' });
        }
    });
};
function deleteAuthor(req, res) {
    Author.findByIdAndDelete(req.params._id, function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json(`Author with id : ${req.params._id} deleted`);
        }
    });
}
module.exports = { getAuthors, addAuthor, deleteAuthor };
