const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
router.get('/', categoryController.getCategories);
router.put('/:_id', categoryController.updateCategory);
router.post('/', categoryController.addCategory);
router.delete('/:_id', categoryController.deleteCategory);
module.exports = router;
