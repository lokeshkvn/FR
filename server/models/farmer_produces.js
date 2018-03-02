const mongoose = require('mongoose');
const product = require('./products');
const farmer = require('./farmers');

const FarmerProduceSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: product
    },
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: farmer
    },
    selling_price: {
        type: Number
    },
    discount: {
        type: Number
    },
    status_of_selling: {
        //type: selling or not selling 
    }
});
const FarmerProduces = module.exports = mongoose.model('FarmerProduces', FarmerProduceSchema);