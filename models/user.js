var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 20 },
    name: { type: String, required: true, maxlength: 20 },
    dob: { type: Date, required: true },
    password: { type: String, required: true, maxlength: 50 },
});
module.exports = mongoose.model('user', UserSchema);
