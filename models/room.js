const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roomno: {
        type: Number,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Tnpmotalamount: {
        type: Number,
        required: true
    },

    maxcount: {
        type: Number,
        required: true
    },
    filled: {
        type: Number,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },

    imageurls: [],
    availability: [],

    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const roomModel = mongoose.model('room', roomSchema)
module.exports = roomModel