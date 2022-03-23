var express = require('express');
var router = express.Router();
const authorController = require('../controllers/author');
router.get('/', authorController.getAuthors);
router.post('/', authorController.addAuthor);
router.delete('/:_id', authorController.deleteAuthor);
module.exports = router;
