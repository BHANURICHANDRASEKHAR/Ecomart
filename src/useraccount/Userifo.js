import React, { useState } from 'react';
import './usercontent.css';
import './input.css';
import UserContent from './UserContent';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// function toasting
function notify()
{
  toast.success("Successfully Updated", {
    position: "bottom-left", 
    autoClose: 3000,      
    hideProgressBar: false, 
    closeOnClick: true,    
    pauseOnHover: true,
    fontSize:'20px',
    background:'green',
    color:'white',
   
  });
}
export default function UserInfo() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='main'>
          <UserContent />
          <div className='right'>
            <Details />
          </div>
        </div>
        <ToastContainer/>
      </div>
     
    </React.Fragment>
  );
}

const Details = () => {
  const user=localStorage.getItem('userdetails')
  const user1=JSON.parse(user);
  const [edit, setEdit] = useState(false);
  const [firstname,setfirstname]=useState(user1.firstname)
  const [lastname,setlastname]=useState(user1.lastname)
  const [phnumber,setphnumber]=useState(user1.phnumber)
  const [gender,setgender]=useState(user1.gender)
  
  const [error,seterror]=useState('')
  const [errorflag,seterrorflag]=useState(false)
  const divStyle = {
    color: errorflag ? 'red' : 'green',
    marginTop:'20px',
    fontSize:'16px'
    
  };
  
const userInfo={
  firstname:firstname,
        lastname:lastname,
        gender:gender,
        phnumber:phnumber,
        email:user1.mail,
}

    const submit = (event) => {
    
    
      event.preventDefault();
      axios.post('http://localhost:8082/userinfo', userInfo)
        .then((res) => {
          if (res.data.status === 'Success') {
            
            seterrorflag(false)
            seterror("sucessfully updated")
            notify();
          } 
          else{
            seterrorflag(true)

            seterror(res.data.Error)
          }
        })
        
    };
  
  
  function editFun() {
 
    setEdit(!edit); 
  }

  
    // // const changehandler1= (event) => {
    // // const { name, value } = event.target;
   
    // // setUserInfo({
    // //   ...userInfo,
    // //   [name]: value,
    // // });
    // }
  return (
    <div className='id' data-aos="fade-down"
    data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'>
      <h3 style={{width:'maxContent'}}>
        Personal Information <span onClick={editFun} style={{marginLeft:'10px',color:'blue',fontWeight:"500",fontSize:'16px'}}>{edit ? <span>Cancel</span> : <span>Edit</span>}</span>

         </h3>
        
     <div className='input' >
     <label>firstname</label>
       <input
         type="text"
         id="userInfoInput"
        value={firstname}
         name='firstname'
         
         disabled={!edit}
         onChange={(e) => setfirstname(e.target.value)}
       />
       
     <label>lastname</label>
     <input
       type="text"
       id="userInfoInput"
     value={lastname}  
       name='lastname'
       disabled={!edit}
       onChange={(e) => setlastname(e.target.value)}
     />
       
  
    </div>
      <div className='input'>
      <label>Gender</label><br/>
      <input type="radio"  name='gender' value="male" disabled={!edit}  onChange={(e) => setgender(e.target.value)}/><label>Male</label><br/>
      <input type="radio"  name='gender' value="female" disabled={!edit}  onChange={(e) => setgender(e.target.value)}/><label>FeMale</label><br/>
      <input type="radio"  name='gender' value="orthers" disabled={!edit}  onChange={(e) => setgender(e.target.value)}/><label>Orthers</label><br/>
      </div>
   <div className='input'>
  <label >Email</label>
   <br/>
   <input
   type="mail"
   id="userInfoInput"
  
   name='email'
   disabled
   value={user1.mail}
 /> 
    </div>
    <div className='input'>
    <label >Phone number</label>
     <br/>
     <input
     type="text"
     id="userInfoInput"
   
     name='phnumber'
    value={phnumber}
     disabled={!edit}
      onChange={(e) => setphnumber(e.target.value)}
   />    
      </div>{edit?(<div><div style={divStyle}>{error}</div>
      <button onClick={submit}>Save</button></div>):(<span></span>)}
      </div>
    
  );
};
