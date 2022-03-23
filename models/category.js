const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 30 },
    description: { type: String, required: true, maxlength: 300 },
});
module.exports = mongoose.model('Category', CategorySchema);
