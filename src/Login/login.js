import React,{useState,useContext, useEffect} from 'react'
import img from '../imgs/login_back.jpg'
import './login.css'
import { Authcontent } from '../App';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// function toasting
function notify(msg)
{
  toast.success(msg, {
    position: "bottom-left",

    });
}
function notify1(msg)
{
  toast.success(msg, {
    position: "bottom-left",
    autoClose: 3000,
    
    });
}
export default function Login() {
  const isuath=useContext(Authcontent)
 const {auth,setauth}=isuath;
 const {userdetails,setuserdetails}=useContext(Authcontent);
  const navigate = useNavigate(); 
  const [msg,setmsg]=useState('')
  const [values,setcvalues]=useState(
    {

email:'',
password:'',

    }
  )
  useEffect(()=>{

  },[auth])
  axios.defaults.withCredentials=true;
  const submit=(event)=>{
    
    event.preventDefault();
    axios.post('http://localhost:8082/login',values)
    .then(res=>{
      if(res.data.status=='Success')
      {
        localStorage.setItem('auth',true)
        localStorage.setItem('userdetails',JSON.stringify(res.data.data[0]));
        
        notify('hello ✋'+res.data.data[0].name)
       setauth(true)
        navigate('/')
      }
      else{
         localStorage.clear();
        setauth(false)
        setmsg(res.data.Error)
        notify1('😱'+msg)

      }
    })
    .catch(err=>{
      console.log("unsuccess");
    })
  }
  const handlechange=(event)=>
  {
setcvalues({...values, 
  [event.target.name]:[event.target.value]
})
  }
  return (
<React.Fragment>
<div className='center_login'>
<div className='login-grid'>

<div className='login_grid_item'><img src={img} className='login-grid-item-img'/></div>
<div className='login_grid-item'>

<form>
<h2>Login</h2>

  <div class="row1">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" autocomplete="off" placeholder="email@example.com" onChange={handlechange}/>
  </div>
  <div class="row1">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" onChange={handlechange}/>
    

  </div>
  <button type="submit" className='login_button' onClick={submit}>Submit</button>
  <Link to='/signup' style={{textDecoration:'none'}}><button className='donthaveaccount'>Don't have any accoount</button><br/></Link>
</form></div>
<ToastContainer/>
</div>
</div></React.Fragment>
  )
}
