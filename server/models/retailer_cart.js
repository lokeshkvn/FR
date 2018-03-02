import { model } from 'mongoose';

const mongoose = require('mongoose');
const retailer = require('./retailers');
const product = require('./farmer_produces');

const RetailerCartSchema = new mongoose.Schema({
    retailer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: retailer
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: product
    },
    quantity: {
        type: Float32Array,
        required: true
    },
    final_price: {
        type: Number,
        required: true
    }
});
const RetailerCart = module.exports = mongoose.model('RetailerCart', RetailerCartSchema);