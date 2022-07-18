import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2'
import AOS from "aos"
import StripeCheckout from 'react-stripe-checkout';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000
});



function Bookingscreen() {

    // if (JSON.parse(localStorage.getItem("currentUser")).year == "first") {
    //     var totalamount = 75000;
    // }
    // else {
    //     var totalamount = 55000;
    // }

    function getCurrentDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    const { roomid } = useParams();
    const [room, setroom] = useState([]);
    const [roomno, setroomno] = useState([]);
    const [loading, setloading] = useState([]);
    const [error, seterror] = useState([]);
    const [Totalamount, setTotalamount] = useState([]);


    useEffect(() => {


        try {
            const axiospost = async () => {
                setloading(true)
                seterror(false)
                const data = (await axios.post('http://localhost:5000/api/rooms/getroombyid', { roomid: roomid })).data
                setTotalamount(data.Totalamount)
                setroom(data)
                console.log(data)
                setloading(false)


            }

            axiospost();

        } catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }


    }, []);


    // async function onToken(token) {
        async function bookroom(){
        
            const roomnum = room.roomno
            const bookingDetails = {
                room,
                userid: JSON.parse(localStorage.getItem('currentUser'))._id,
                roomnum,
                Totalamount,
                // token
    
    
            };
    
            try {
                setloading(true)
                const result = await axios.post('http://localhost:5000/api/bookings/bookroom', bookingDetails)
                Swal.fire('Congratulations', 'Your room booked successfully', "success").then(result => {
                    window.location.href = '/home'
                })
                setloading(false)
    
            } catch (error) {
                console.log(error)
                setloading(false)
                Swal.fire('Opps', 'Something went wrong', "error")
            }
        
    
        // console.log(token)
    }

    return (
        <div className='m-5' data-aos='flip-left'>

            {loading ? (
                <Loader />
            ) : room ? (<div>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-6'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />

                    </div>
                    <div className='col-md-6'>
                        <div style={{ textAlign: 'right' }}>
                            <h1>booking details</h1>
                            <hr />
                            <b>
                                <p>Name : {JSON.parse(localStorage.getItem('currentUser')).firstname}</p>
                                <p>Room no: {room.roomno} </p>
                                <p>Date of booking : {getCurrentDate('-')}</p>
                                <p>Max count : {room.maxcount}</p>
                                <p>Filled slots : {room.filled}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Amount: Rs {Totalamount} </p>
                            </b>
                        </div>

                        <div style={{ float: "right" }}>

                            {/* <StripeCheckout
                                amount={Totalamount * 100}
                                token={onToken}
                                currency='INR'


                                stripeKey="pk_test_51LD6rpSFtG8rAisbe6AIPzfXwUm1nozIQjOWKWDg7I77Y1tKo1mz92bnADPXDBeq5zDI8jLSDwZvUSSqZg8zhfsF00hBjC3X7h"
                            > */}

                                <button className='btn btn-primary' onClick={bookroom}>Pay & Confirm Booking</button>
                            {/* </StripeCheckout> */}
 
                        </div>




                    </div>
                </div>
            </div>) : <Error />}
        </div>
    );
}

export default Bookingscreen;
