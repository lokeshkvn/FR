const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_name:{
        type: String,
        required: true
    },
    user_type:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);