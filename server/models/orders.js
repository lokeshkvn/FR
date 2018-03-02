const mongoose = require('mongoose');
const card = require('./retailer_card_info');
const product = require('./farmer_produces');

const OrderSchema = new mongoose.Schema({
    purchase_date: {
        type: Date,
        required: true
    },
    mode_of_payment: {
        //type: online or offline
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: card
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: product
    }
});
const Orders = module.exports = mongoose.model('Orders', OrderSchema);