import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import e from 'cors';


function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState([]);
  const [searchkey, setsearchkey] = useState('');
  const [type, settype] = useState('all');
  const [Year, setYear] = useState('');
  const [floor, setfloor] = useState('all');
  const [duplicaterooms, setduplicaterooms] = useState([]);

  useEffect(() => {

    try {
      const axiospost = async () => {
        setloading(true)
        seterror(false)
        const data = (await axios.get('http://localhost:5000/api/rooms/getallrooms')).data
        setrooms(data)
        setduplicaterooms(data)
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



  function filterByYear(e) {
    setYear(e)

    const temprooms = duplicaterooms.filter(room => room.Year.toLowerCase() == e.toLowerCase())
    console.log(temprooms)
    setrooms(temprooms)
  }
  function filterBySearch() {
    const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()))
    setrooms(temprooms)
  }
  function filterByfloor(e) {
    setfloor(e)

    const temprooms = duplicaterooms.filter(room => room.floor.toLowerCase() == e.toLowerCase())
    setrooms(temprooms)

  }
  function filterByType(e) {
    settype(e)
    if (e !== 'all') {
      const temprooms = duplicaterooms.filter(room => room.type.toLowerCase() == e.toLowerCase())
      setrooms(temprooms)
    }
    else {
      setrooms(duplicaterooms)
    }
  }
  return (
    <div className='container'>
      <div className='row mt-5 bs'>
        <div className='col-md-5'>
          <input type="text" className='form-control' placeholder='search rooms'
            value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch} />

        </div>
        <div className='col-md-3'>
          <select className='form-control' value={type} onChange={(e) => { filterByType(e.target.value) }}>

            <option value="all">All</option>
            <option value="Washroom">Washroom Side Rooms</option>
            <option value="Non-washroom">Non-washroom Side rooms</option>
          </select></div>
        <div className='col-md-3'>
          <select className='form-control' value={floor} onChange={(e) => { filterByfloor(e.target.value) }}>
            <option value="all">ALL</option>
            <option value="ground">Ground Floor</option>
            <option value="first">First Floor</option>
            <option value="second">Second Floor</option>
          </select>
        </div>
        <div className='col-md-3'>
          <select className='form-control' value={Year} onChange={(e) => { filterByYear(e.target.value) }}>
            <option value="any">Any Year </option>

            <option value="first">First Year</option>

          </select>
        </div>

      </div>



      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : (
          rooms.map((room) => {
            return <div className="col-md-9 mt-2">
              <Room room={room} />
            </div>;
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen