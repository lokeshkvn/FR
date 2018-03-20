const mongoose = require('mongoose');
var user = require('./users');

const FarmerSchema = mongoose.Schema({
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
    farmer_type:{
        type: String,
        required: false
    },
    account_info_id:{
        type: String,
        required: true
    },
    card_info_id:{
        type: String,
        required: false
    }
    // photo:{
    //     type: ,
    //     required:
    // }
});

const Farmer = module.exports = mongoose.model('Farmer', FarmerSchema);