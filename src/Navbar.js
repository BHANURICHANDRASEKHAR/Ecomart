import React, { useState, useContext, useEffect} from 'react';
import './navbar.css';
import { PiShoppingCartLight } from 'react-icons/pi';
import {BsCartFill} from "react-icons/bs"
import './cart.css';
import Login from './Login/login';
import './index.css';
import { Authcontent } from './App';
import { Link, NavLink,useNavigate} from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import { ToastContainer, toast } from 'react-toastify';
// function toasting
function notify(msg)
{
  toast.warn(msg, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
export default function Navbar() {
  const isAuth = useContext(Authcontent);
  const { auth ,setauth,cartcount,setcartcount,cartitemscount } = isAuth;
  
  const handleUser = () => {
   
  try{
    if (window.confirm("are you sure to logout")) 
   { localStorage.clear();
    notify('🥺 we miss you bro')
    setauth(false)

   }
   
  }
  catch(e)
  {
    console.log('error at logout')
  }
    
  };
 
const navigate=useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">𝕰𝖈𝖔 𝖒𝖆𝖗𝖙</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
            </label>
          </div>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          
 
            <NavLink to="/cart" ><button className='button1'><span className='count'>{localStorage.getItem('itemscount')}</span><BsCartFill className='cart'/><span style={{fontSize:'20px'}}>Cart</span></button></NavLink>
           
            {auth ? (
              <React.Fragment>
            
              <NavLink to="/account">Account</NavLink>  
              <Link to="/" onClick={handleUser}>
                Logout
              </Link>
              </React.Fragment>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
        <ToastContainer/>
      </div>
    </React.Fragment>
  );
}
