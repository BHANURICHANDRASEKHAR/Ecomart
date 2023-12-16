import React, { useState,useContext } from 'react';
import './input.css';
import UserContent from './UserContent';
import axios from 'axios';
import { Authcontent } from '../App';
import {FcDeleteDatabase} from 'react-icons/fc'
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
export default function Address() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='main'>
          <UserContent />
          <div className='right' style={{height:'maxContent'}}>
            <UserAdd />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </React.Fragment>
  );
}

const UserAdd = () => {

var user1;
var username;

  const {useraddressdata,setuseraddressdata}=useContext(Authcontent)
  console.log('usersdata'+useraddressdata)
  const [edit, setEdit] = useState(false);
  const [error,seterror]=useState('')
  const [errorflag,seterrorflag]=useState(false)
  const divStyle = {
    color: errorflag ? 'red' : 'green',
    marginTop:'20px',
    fontSize:'16px'
    
  };
  try{
    const username1=localStorage.getItem('userdetails');
    username=JSON.parse("username"+username1)
    console.log(username1)
    const user=localStorage.getItem('useraddressdata')
     user1=JSON.parse(user);
     setuseraddressdata(user1)
  }
  catch(e)
  {
    console.log(error)
  }
  const [values, setValues] = useState({
    name:'',
    email:'',
    number:'',
    pincode:'',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    altphone: '',
    addtype:'',

  });

  const changeHandler = (event) => {
    
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
   
   
  };

  function show() {
    setEdit(true);
  }
  const submit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/address',values)
      .then((res) => {
        if (res.data.status === 'Success') {
          seterrorflag(false)
          try{
            const userdata=res.data.data1;
            setuseraddressdata(userdata)
              console.log('console data'+userdata.length)
            localStorage.setItem('useraddressdata',JSON.stringify(userdata))
            notify();
          }
          catch(e)
          {
            console.log('error')
          }
          seterror("sucessfully updated")
        } 
        else{
          seterrorflag(true)

          seterror(res.data.Error)
        }
      })
      
  };
  return (
    <div className='id'>
      <h3>Manage Address</h3>
      <p
        style={{
          border: '1px solid skyblue',
          height: '36px',
          fontSize: '18px',
          paddingLeft: '10px',
          color: 'blue'
        }}
        onClick={show}
      >
        + Add New Address
      </p>
      {edit && (
        <React.Fragment >
          <div className='input'>
            <input
              type="mail"
              placeholder='Email'
              name='mail'
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder='10 digits of number'
              name='name'
              onChange={changeHandler}
            />
          </div>
          <div className='input'>
            <input
              type="text"
              placeholder='pincode'
              name='pincode'
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder='Locality'
              name='locality'
              onChange={changeHandler}
            />
          </div>
          <div className='input' style={{ marginTop: '30px' }}>
            <label>Address</label>
            <br />
            <input
              type="text"
              placeholder='address'
              style={{ width: '62.5%', height: '10vh' }}
              name='address'
              onChange={changeHandler}
            />
          </div>
          <div className='input'>
            <input
              type="text"
              placeholder='city/town'
              name='city'
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder='state'
              name='state'
              onChange={changeHandler}
            />
          </div>
          <div className='input'>
            <input
              type="text"
              placeholder='landmark(optional)'
              name='landmark'
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder='alt phone number(optional)'
              name='altphone'
              onChange={changeHandler}
            />
            </div>
            <div className='input'>
            <label>Address Type</label><br/><br/>
            <input type="radio"  name='addtype' value="Home"  onChange={changeHandler}/><label>Home</label>
            <input type="radio"  name='addtype' value="Office"  onChange={changeHandler}/><label>Office</label>
             </div>
             <div style={divStyle}>{error}</div>
          <button type="button" onClick={submit} style={{marginBottom:"20px"}}>
            Save
          </button>
          <button type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </React.Fragment>
      )}
      <UserAddressP user1={user1} userfulldetails={useraddressdata} setuseraddressdata={setuseraddressdata}/>
    </div>
  );
};
const UserAddressP=(pro)=>{
  function addressdelete(value)
  {
    const values={
      value:value,
    }
    axios.post('http://localhost:8082/addressdelete',values)
      .then((res) => {
        if (res.data.status === 'Success') {
          
          try{
            const userdata=res.data.data1;
            setuseraddressdata(userdata)
            localStorage.setItem('useraddressdata',JSON.stringify(userdata))
            notify();
          }
          catch(e)
          {
            console.log('error')
          }
          
        } 
        else{
          
        }
      }) 
  }
  const {useraddressdata,setuseraddressdata}=useContext(Authcontent)

  return(
  //   <React.Fragment>
  //   <div className='container'>
  //  {
  //     useraddressdata.map((e)=>{
  //     const{name,phnumber,addtype,pincode,city,state,address,locality}=e;
  //     return(
  //       <div className='row' style={{border:'1px solid 	#D3D3D3',padding:'10px',marginBottom:'5px'}}>
  //  <button style={{width:'100px',background:'#F0F0F0',color:'black',margin:'0px',marginTOP:'10px',fontSize:"16px",height:'29px'}}>{addtype}</button><br/>
  //  <div ><h4>{name}&ensp;{phnumber}</h4></div>
  //  <div>{locality || ''}&ensp;{address}&ensp;{city}&ensp;{state}-{pincode}</div>
  //  <FcDeleteDatabase style={{height:'50px',width:'50px',position:'absolute',right:'13%',marginTop:'30px',cursor:'pointer' }} onClick={()=>{addressdelete(address)}} />

  //  </div>
  //      )
  //   })
  //  }
 
  //   </div></React.Fragment>
  <div>hkejhu</div>
  )
}