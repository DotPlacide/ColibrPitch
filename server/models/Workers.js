const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },

    age:{
        type: String,
        required: true
    },
    testScore:{
        type: Number,
    },

    availability:{
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true
    },

    country: {
    type:String,
    required: true
    },

    category:{
        type:String,
        required: true
    },

});




module.exports = mongoose.model('worker' , workerSchema);