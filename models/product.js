var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    price: { type: Number, required: true },
    availability: { type: Boolean, required: true },
});
module.exports = mongoose.model('Product', ProductSchema);
