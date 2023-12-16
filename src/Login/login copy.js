// import React,{useState,useContext} from 'react'
// import img from '../imgs/login_back.jpg'
// import './login.css'
// import { Authcontent } from '../App';
// import axios from 'axios';
// import { Link,useNavigate } from 'react-router-dom'
// export default function Login() {
//   const isuath=useContext(Authcontent)
//  const {auth,setauth}=isuath;
//   const navigate = useNavigate(); 
//   const [msg,setmsg]=useState('')
//   const [values,setcvalues]=useState(
//     {

// email:'',
// password:'',

//     }
//   )
//   axios.defaults.withCredentials=true;
//   const submit=(event)=>{
    
//     event.preventDefault();
//     axios.post('http://localhost:8082/login',values)
//     .then(res=>{
//       if(res.data.status=='Success')
//       {
//        setauth(true)
//         navigate('/')
//       }
//       else{
//         setauth(false)
//         setmsg(res.data.Error)

//       }
//     })
//     .catch(err=>{
//       console.log("unsuccess");
//     })
//   }
//   const handlechange=(event)=>
//   {
// setcvalues({...values, 
//   [event.target.name]:[event.target.value]
// })
//   }
//   return (
// <React.Fragment>
// <div className='center_login'>
// <div className='login-grid'>

// <div className='login_grid_item'><img src={img} className='login-grid-item-img'/></div>
// <div className='login_grid-item'>

// <form>
// <h2>Login</h2>

//   <div class="row1">
//     <label for="email">Email</label>
//     <input type="email" name="email" autocomplete="off" placeholder="email@example.com" onChange={handlechange}/>
//   </div>
//   <div class="row1">
//     <label for="password">Password</label>
//     <input type="password" name="password" onChange={handlechange}/>
//     <span style={{color:'red',marginTop:"10px",marginLeft:'30px'}}>{msg}</span>

//   </div>
//   <button type="submit" className='login_button' onClick={submit}>Submit</button>
//   <Link to='/signup' style={{textDecoration:'none'}}><button className='donthaveaccount'>Don't have any accoount</button><br/></Link>
// </form></div>
// </div>
// </div></React.Fragment>
//   )
// }
