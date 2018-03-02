const mongoose = require('mongoose');
var fs = require('fs');

var user = require('./users');
var card = require('./retailer_card_info');

const RetailerSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: String,       //change to date
        required: true
    },
    card_info_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: card,
        required: false
    }],
    // photo:{
    //     type: ,
    //     required:
    // }
},
{
    usePushEach: true
}
);

const Retailer = module.exports = mongoose.model('Retailer', RetailerSchema);