const express = require("express");
const app = express();

var cors = require('cors')



const dbconfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(express.json())
app.use(cors())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)

const port = process.env.port || 5000;
app.listen(port,() => console.log("node server started"));
