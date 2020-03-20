const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },
    size:{
        type: String,
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

});




module.exports = mongoose.model('company' , companySchema);