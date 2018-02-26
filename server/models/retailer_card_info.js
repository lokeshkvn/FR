const mongoose = require('mongoose');
const retailer = require('./retailers');

const CardInfoSchema = new mongoose.Schema({
    retailer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: retailer
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    expiry_date: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    billing_address: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Card = module.exports = mongoose.model('CardInfo', CardInfoSchema);