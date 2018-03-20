const mongoose = require('mongoose');

const ratings_reviews = require('./ratings_reviews');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings_reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ratings_reviews
    }
});

const Product = module.exports = mongoose.model('Product', ProductsSchema);