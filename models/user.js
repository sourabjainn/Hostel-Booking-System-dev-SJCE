const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

    firstname: {
        type: String,
        required : true
    },
    lastname: {
        type: String,
        required : true
    },
    DOB: {
        type: String,
        required : true
    },
    USN: {
        type: String,
        required : true
    },
    branch: {
        type: String,
        required : true
    },
    year: {
        type: String,
        required : true
    },
    phno: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    fathername: {
        type: String,
        required : true
    },
    mothername: {
        type: String,
        required : true
    },
    address: {
        type: String,
        required : true
    },
    city: {
        type: String,
        required : true
    },
    state: {
        type: String,
        required : true
    },
    limit: {
        type: Number,
        default:1
    },
    impinfo: {
        type: String,
        default:false
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
    
},{
    timestamps : true,
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel