const express = require("express");
const router = express.Router();
const Room = require('../models/room');
const Booking = require("../models/booking");
// const User = require("../models/user");
// const { v4: uuidv4 } = require('uuid');
// const stripe = require("stripe")("sk_test_51LD6rpSFtG8rAisb801nSTb9PpsPOyegYFxlVq30EQpPFpGiLYXbDqo78ttv1XiABJHchHppyC3tn2Uka2bnrgyp00dQzdqmIX");

router.post("/bookroom", async (req, res) => {
    const { room,
        userid, roomnum, Totalamount, } = req.body


    // try {
    //     const customer = await stripe.customers.create({
    //         email : token.email,
    //         source : token.id
    //     })
    //     const payment = await stripe.charges.create(
    //         {
    //             amount: Totalamount * 100,
    //             customer: customer.id,
    //             currency: 'inr',
    //             receipt_email: token.email

    //         }, {
    //         idempotencyKey: uuidv4()

    //     })

    //     if (payment) {
    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            roomnum, Totalamount,
            transactionid: "1234"
        })

        const booking = await newbooking.save()
        const roomtemp = await Room.findOne({ _id: room._id })
        roomtemp.availability.push({ bookingid: booking._id, userid: userid, status: booking.status });
        roomtemp.filled = roomtemp.filled + 1



        await roomtemp.save()
        res.send('room booked successfully')
    } catch (error) {
        return res.status(400).json({ error })
    }
});
//         res.send("payment successful,your room is booked")
//     } catch (error) {
//     return res.status(400).json({ error });

// }

// });
router.post("/getbookingsbyuserid", async (req, res) => {
    const userid = req.body.userid
    try {
        const bookings = await Booking.find({ userid: userid })
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });

    }


});
router.post("/cancelbooking", async (req, res) => {
    const { bookingid, roomid } = req.body
    try {
        const bookingitem = await Booking.findOne({ _id: bookingid })
        bookingitem.status = 'cancelled'

        await bookingitem.save();
        const room = await Room.findOne({ _id: roomid })
        room.filled = room.filled - 1;

        const bookings = room.availability
        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)
        room.availability = temp
        await room.save();

        res.send("booking cancelled successfully")


    } catch (error) {
        return res.status(400).json({ error });

    }


});

router.get("/getallbookings", async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });

    }

});

module.exports = router