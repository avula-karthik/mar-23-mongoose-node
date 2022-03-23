const Category = require('../models/category');
function getCategories(req, res) {
    Category.find((err, category_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(category_list);
        }
    });
}
function addCategory(req, res) {
    const catObj = new Category(req.body);
    catObj.save((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ status: 'Category added' });
        }
    });
}
function deleteCategory(req, res) {
    Category.findByIdAndDelete(req.params._id, req.body, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ status: 'category removed' });
        }
    });
}

function updateCategory(req, res) {
    const updatedCategory = req.body;
    Category.findByIdAndUpdate(req.params._id, updatedCategory, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ status: 'Category updated' });
        }
    });
}
module.exports = {getCategories, addCategory, deleteCategory, updateCategory}