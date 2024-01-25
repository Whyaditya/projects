const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
    userId: String
})

module.exports = mongoose.model('products',productScheme);