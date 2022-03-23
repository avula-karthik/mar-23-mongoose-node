var mongoose = require('mongoose');
var ForumSchema = new mongoose.Schema({
    title: { type: String, required: true, maxLength: 100 },
    doc: { type: Date, required: true },
    forumbody: { type: String, required: true, maxLength: 500, minlength: 50 },
    author: { type: String, required: true, minlength: 5, maxlength: 50 },
});
module.exports = mongoose.model('Forum', ForumSchema);
