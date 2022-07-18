import React , {useState,useEffect} from 'react'
import { Table, Tabs } from 'antd'
import axios from 'axios';
import Loader from '../components/Loader';
import Swal from 'sweetalert2'
import Error from '../components/Error';
const { TabPane } = Tabs;





function Adminscreen() {

    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem("currentUser")).isAdmin)
        {
            window.location.href='/home'
        }
    },[])
    return (
        <div className='mt-3 ml-3 mr-3 bs'>
            <h2 className='text-center' style={{fontsize:'30px'}}><b>Admin Panel</b></h2>
            <Tabs defaultActivekey="1">
                <TabPane tab="Bookings" key="1">
                    <Bookings/>
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms/>
                </TabPane>
                <TabPane tab="Add rooms"key="3">
                    <Addroom/>
                </TabPane>
                <TabPane tab="Users"key="4">
                    <Users/>
                </TabPane>
            </Tabs>







        </div>
    );
}

export default Adminscreen

export function Bookings(){
    const[bookings,setookings] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState([]);
    const[users,setusers] = useState([])


    useEffect(async() =>{
        try {
            const data = (await axios.get('http://localhost:5000/api/bookings/getallbookings')).data
            const data1 = (await axios.get('http://localhost:5000/api/users/getallusers')).data
            setusers(data1)
            setookings(data)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(error)
            
        }

    },[])


    return (
        <div className='row'>
            <div className='col-md-12'>
                
                <h1>Bookings</h1>
                {loading && (<Loader/>)}

                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Booking Id</th> 
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Room Name</th>
                            <th>Room no</th>
                            <th>Status</th>                            

                        </tr>
                    </thead>
                    <tbody>
                    {bookings.length && (bookings.map(booking=>{
                        return <tr>
                        <td>{booking._id}</td>
                        <td>{booking.userid}</td>
                        <td>{users.filter(user=>{return user._id==booking.userid})[0].firstname}</td>
                        
                        <td>{booking.room}</td>
                        <td>{booking.roomnum}</td>
                        <td>{booking.status}</td>

                        
                        </tr>

                    }))}

                    </tbody>
                </table>
                


            </div>
        </div>
    )
};



export function Rooms(){
    const[rooms,setrooms] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState([]);


    useEffect(async() =>{
        try {
            const data = (await axios.get('http://localhost:5000/api/rooms/getallrooms')).data
            setrooms(data)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(error)
            
        }

    },[])


    return (
        <div className='row'>
            <div className='col-md-12'>
                
                <h1>Rooms</h1>
                {loading && (<Loader/>)}

                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Room Id</th> 
                            <th>Name</th>
                            <th>Room no</th>
                            <th>Type</th>
                            <th>Max Count</th>
                                                        

                        </tr>
                    </thead>
                    <tbody>
                    {rooms.length && (rooms.map(room=>{
                        return <tr>
                        <td>{room._id}</td>
                        <td>{room.name}</td>
                        <td>{room.roomno}</td>
                        <td>{room.type}</td>
                        <td>{room.maxcount}</td>
                        

                        
                        </tr>

                    }))}

                    </tbody>
                </table>
                


            </div>
        </div>
    );
}




export function Users(){
    const[users,setusers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState([]);


    useEffect(async() =>{
        try {
            const data = (await axios.get('http://localhost:5000/api/users/getallusers')).data
            setusers(data)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(error)
            
        }

    },[]);


    return (
        <div className='row'>
            <div className='col-md-12'>
                
                <h1>Users</h1>
                {loading && (<Loader/>)}

                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>User Id</th> 
                            <th>Name</th>
                            <th>USN</th>
                            <th>Email</th>
                            <th>Phno</th>
                            <th>Is Admin</th>
                                                        

                        </tr>
                    </thead>
                    <tbody>
                    {users && (users.map(user=>{
                        return <tr>
                        <td>{user._id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.USN}</td>
                        <td>{user.email}</td>
                        <td>{user.phno}</td>
                        <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                        

                        
                        </tr>

                    }))}

                    </tbody>
                </table>
                


            </div>
        </div>
    );
}


export function Addroom(){
    
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState([]);
    const[name,setname] = useState('')
    const[type,settype] = useState()
    const[floor,setfloor] = useState()
    const[Year,setYear] = useState()
    const[roomno,setroomno] = useState()
    const[maxcount,setmaxcount] = useState()
    const[filled,setfilled] = useState()
    const[description,setdescription] = useState()
    const[imgurl1,setimgurl1] = useState()
    const[imgurl2,setimgurl2] = useState()
    



    async function addRoom(){
        const newroom = {
            name,
            roomno,
            maxcount,
            floor,
            Year,
            filled,
            type,
            description,
            imageurls:[imgurl1,imgurl2]
            

        }
        try {
            setloading(true);
            const result = (await axios.post('http://localhost:5000/api/rooms/addroom', newroom)).data
            console.log(result)
            setloading(false);
            Swal.fire('congrats','Your New room Added Successfully','success').then(result=>{
                window.location.href='/home'
            })
            
        } catch (error) {
            console.log(error)
            setloading(false)
            Swal.fire("Oops","Something went wrong","error")
            
        }
    }


    return(
        <div className='row'>
                
            <div className='col-md-5'>
            {loading && <Loader />}
                <input type="text" className='form-control' placeholder='roomname'
                value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='roomno'
                value={roomno} onChange={(e)=>{setroomno(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='maxcount'
                value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='filled'
                value={filled} onChange={(e)=>{setfilled(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='Year'
                value={Year} onChange={(e)=>{setYear(e.target.value)}}/>
                


            </div>
            <div className='col-md-5'>
            <input type="text" className='form-control' placeholder='floor'
                value={floor} onChange={(e)=>{setfloor(e.target.value)}}/>
            <input type="text" className='form-control' placeholder='type'
            value={type} onChange={(e)=>{settype(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='description'
                value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='imgurl1'
                value={imgurl1} onChange={(e)=>{setimgurl1(e.target.value)}}/>
                <input type="text" className='form-control' placeholder='imgurl2'
                value={imgurl2} onChange={(e)=>{setimgurl2(e.target.value)}}/>

                <div className='text-right'>
                    <button className='btn btn-primary mt-2' onClick={addRoom}>Add Room</button>
                </div>
 


                
            </div>

        </div>
    )
}

 