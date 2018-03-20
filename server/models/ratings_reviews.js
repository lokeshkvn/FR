const mongoose = require('mongoose');
const retailer = require('./retailers');
const product = require('./farmer_produces');

const RatingReviewSchema = new mongoose.Schema({
    title: {
        type: String
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: product
    },
    retailer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: retailer
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String
    }
});
const RatingReviews = module.exports = mongoose.model('RatingReviews', RatingReviewSchema);