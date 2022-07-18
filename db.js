const mongoose = require("mongoose");
var mongoURL = "mongodb+srv://jainsourab:Mongodbatlas@cluster0.wxsxlgi.mongodb.net/hostel-booking"
mongoose.connect(mongoURL);
var connection = mongoose.connection
connection.on('error',()=>{
    console.log("mongo db connection failed")
})
connection.on("connected",()=>{
    console.log("mongo db connection successful")
})
module.exports = mongoose
