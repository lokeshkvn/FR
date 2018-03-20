const mongoose = require('mongoose');

var user = require('./users');

const AdministratorSchema = mongoose.Schema({
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
        type: Date,
        required: true
    },
    admin_type:{
        type: Number,
        required: true
    }
    // photo:{
    //     type: ,
    //     required:
    // }
});

const Administrator = module.exports = mongoose.model('Administrator', AdministratorSchema);
