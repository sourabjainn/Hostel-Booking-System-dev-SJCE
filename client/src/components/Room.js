import React, { useState } from 'react'
import { Modal, Button, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import AOS from "aos"
import axios from 'axios'
import 'aos/dist/aos.css';

AOS.init({
    duration:1000
});
function Room({ room }) {


  const [show, setShow] = useState(false);
  
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function check() {
    if (room.maxcount > room.filled) {
      console.log("iuefuigv")

      return (
        <div>
          <Link to={`/book/${room._id}`}>
            <button className='btn btn-primary m-2'>Book now</button>
          </Link>
        </div>
      )

    }
    else{ 
      return(
        <div>
        <button className='btn btn-primary m-2' disabled>Fully Booked</button>
        </div>
      )
    }



  }
//  check()? style1: style2;

  return (
    <div className='row bs'data-aos='fade-up'>
      <div className='col-md-4'>
        <img src={room.imageurls[0]} className='smallimg' />
      </div>
      <div className='col-md-7'>
        <h1>{room.name}</h1>
        <b><p>Room Number: {room.roomno}</p>
        <p>Floor: {room.floor}</p>
        <p>Year: {room.Year}</p>
        <p>Total Amount: {room.Totalamount}</p>
          <p>Max count: {room.maxcount}</p>
          <p>Filled slots: {room.filled}</p>
          <p>Type :{room.type}</p></b>

        <div style={{ float: 'right' }}>
          {check()}
          <button className='btn btn-primary' onClick={handleShow}>View details</button>
        </div>
      </div>



      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map(url => {
              return <Carousel.Item>
                <img
                  className="d-block w-100 bigimg"
                  src={url}

                />

              </Carousel.Item>
            })}

          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default Room