const mongoose = require('mongoose');
const retailer = require('./retailers');

const RetailerCardInfoSchema = new mongoose.Schema({
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

const RetailerCardInfo = module.exports = mongoose.model('RetailerCardInfo', RetailerCardInfoSchema);