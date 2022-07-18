import React from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import 'aos/dist/aos.css';

import logo from './download.png'

AOS.init({
    duration:2000
});


function Landingscreen() {
  return (
    <div ><img src={logo} alt="JSSSTU"/>
   
    <div className='row landing justify-content-center'>
        <div className='col-md-6 my-auto text-center' style={{borderRight:'5px solid-white'}}>
        
            <h2 data-aos='zoom-in' style={{color: "white",fontSize:'100px'}}>SJCE Hostel Bookings</h2>
            <h1 data-aos='zoom-out' style={{color: "white"}}>First Come - First Serve!</h1>
            <Link to='/home'>
            <button className='btn landingbtn' style={{color:"black"}}>Get started</button>
            </Link>
        </div>

    </div>
    </div>
  )
}

export default Landingscreen