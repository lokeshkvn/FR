//Payments done to a particular farmer
const mongoose = require('mongoose');
const account = require('./farmer_account');
const farmer_produce = require('./farmer_produces');

const FarmerPaymentAccountSchema = new mongoose({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: farmer_produce,
        required: true
    },
    quantity: {
        type: Float32Array,
        required: true
    },
    amount: {
        type: Number,
        required:true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: account
    },
    date_of_purchase: {
        type: Date,
        required: true
    }
});
const FarmerPayments = module.exports = mongoose.model('FarmerPayments', FarmerPaymentAccountSchema);