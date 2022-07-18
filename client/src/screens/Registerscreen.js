import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
function Registerscreen() {
  const[firstname,setfirstname] = useState('')
  const[lastname,setlastname] = useState('')
  const[DOB,setDOB] = useState('')
  const[USN,setUSN] = useState('')
  const[branch,setbranch] = useState('')
  const[year,setyear] = useState('')
  const[phno,setphno] = useState('')
  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[cpassword,setcpassword] = useState('')
  const[mothername,setmothername] = useState('')
  const[fathername,setfathername] = useState('')
  const[address,setaddress] = useState('')
  const[city,setcity] = useState('')
  const[impinfo,setimpinfo] = useState('')
  const[state,setstate] = useState('')
  const[loading, setloading] = useState(false);
  const[error, seterror] = useState();
  const[success, setsuccess] = useState();

  async function register(){

    if(password == cpassword)
    {
      const user={
        firstname,
        lastname,
        USN,
        DOB,
        branch,
        phno,
        year,
        impinfo,
        email,
        password,
        cpassword,
        fathername,
        mothername,
        address,
        city,
        state
  
      }
      try {
        setloading(true);
        const result = await axios.post('http://localhost:5000/api/users/register', user).data;
        setloading(false)
        setsuccess(true)

        setfirstname('')
        setlastname('')
        setDOB('')
        setUSN('')
        setyear('')
        setbranch('')
        setphno('')
        setfathername('')
        setmothername('')
        setstate('')
        setaddress('')
        setcity('')
        setemail('')
        setpassword('')
        setcpassword('')
        setimpinfo('')

      } catch (error) {
        console.log(error)
        setloading(false);
        seterror(true);
      }

    }
    else{
      alert('passwords do not match')
    }

  }


  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error/>)}
      
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5'>
          {success && (<Success message='Registration success'/>)}
            <div className='bs'>
              <h2>Register</h2>
              <input type="text" className='form-control' placeholder='firstname' 
              value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='lastname'
              value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='DOB'
              value={DOB} onChange={(e)=>{setDOB(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='USN'
              value={USN} onChange={(e)=>{setUSN(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='Branch'
              value={branch} onChange={(e)=>{setbranch(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='Year'
              value={year} onChange={(e)=>{setyear(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='phno'
              value={phno} onChange={(e)=>{setphno(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='email'
              value={email} onChange={(e)=>{setemail(e.target.value)}}/>
              <input type="password" className='form-control' placeholder='password'
              value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
              <input type="password" className='form-control' placeholder='confirm password'
              value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='fathername'
              value={fathername} onChange={(e)=>{setfathername(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='mothername'
              value={mothername} onChange={(e)=>{setmothername(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='address'
              value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='city'
              value={city} onChange={(e)=>{setcity(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='state'
              value={state} onChange={(e)=>{setstate(e.target.value)}}/>
              <input type="text" className='form-control' placeholder='Important Information'
              value={impinfo} onChange={(e)=>{setimpinfo(e.target.value)}}/>

              <button className='btn btn-primary mt-3' onClick={register}>Register</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Registerscreen