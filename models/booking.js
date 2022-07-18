const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
    room :{
        type: String,required: true
    },
    roomnum :{
        type: String,required: true
    },
    roomid :{
        type: String,required: true
    },
    userid :{
        type: String,required: true
    },
    status :{
        type: String,required: true, default: 'booked'
    },
    Totalamount :{
        type: String,required: true
    },
    transactionid :{
        type: String,required: true
    }





},{
    timestamps : true,
})

const bookingmodel = mongoose.model('bookings', bookingSchema);
module.exports = bookingmodel