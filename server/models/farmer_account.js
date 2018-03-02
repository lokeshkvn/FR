const mongoose = require('mongoose');
const farmer = require('./farmers');

const FarmerAccountSchema = new mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: farmer,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    branch_name: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    routing_no: {       //clarify
        type: Number
    }
});
const FarmerAccounts = module.exports = mongoose.model('FarmerAccounts', FarmerAccountSchema);