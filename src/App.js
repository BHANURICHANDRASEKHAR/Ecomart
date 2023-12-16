import React,{useState,useEffect} from 'react'
import Home from './Home'
import About from './About'
import {  Route,Routes, json } from 'react-router-dom'
import Navbar from './Navbar';
import Login from './Login/login'
import Data from './Data'
import AOS from 'aos'
import Account from './useraccount/Account';
import "aos/dist/aos.css";
import Userifo from './useraccount/Userifo';
import Cart from './Cart/Cart'
import Userdom  from './useraccount/Userdom';
import Signup from './Login/Sign'
import axios from 'axios';
import Address from './useraccount/Address';
import Reviews from './useraccount/Reviews';
import Notifications from './useraccount/Notifications';
import Wishlist from './useraccount/Wishlist';
import Cuppons from './useraccount/Cuppons';
import Orders from './useraccount/Orders';
import { ToastContainer, toast } from 'react-toastify';
import Indepthdetails from './Deep/Indepthdetails';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './useraccount/Footer';
export const Authcontent=React.createContext();
AOS.init();
  
export default function App() {
  const [auth,setauth]=useState(false);
  const [userdetails,setuserdetails]=useState('')
  const [userfulldetails,setuserfulldetails]=useState([])
  var cc=localStorage.getItem('itemscount');
  const [cartitemscount,setcartitemscount]=useState(cc);
  const [useraddressdata,setuseraddressdata]=useState()
  const [cartcount,setcartcount]=useState();
  const [cartstate,setcartstate]=useState(true);
  const [emptystatus,setemptystatus]=useState(false)
  const [deepitem,setdeepitem]=useState([])

  useEffect(()=>{
    const a=localStorage.getItem('auth')
    try{ 
      setcartcount(localStorage.getItem('itemscount'))
      const users=localStorage.getItem('userdetails')
      const addressdata=localStorage.getItem('useraddressdata');
      setuseraddressdata(JSON.parse(addressdata))
      setuserdetails(JSON.parse(users))
    }
   catch(e){
    console.log('error at parsing')
   }
    const b=JSON.parse(a)
    
   setauth(b)
  },[auth])
 
  return (
   
    <Authcontent.Provider value={{auth,setauth,userdetails,setuserdetails,userfulldetails,setuserfulldetails,cartitemscount,setcartitemscount,cartstate,setcartstate,cartcount,setcartcount,emptystatus,setemptystatus,useraddressdata,setuseraddressdata,deepitem,setdeepitem}}><App1 auth={auth}/></Authcontent.Provider>  
   
  )
}
const App1=(pro)=>{
  const {auth}=pro;
  return(
    <div >
    <Navbar></Navbar>
      <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Data/>}>    
    </Route>
      <Route path='/data/:name' element={<Data/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
   
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/user/review' element={<Reviews/>}></Route>
      <Route path="/user/personalinformation" element={<Userifo/>}/>
     <Route path="/user/notifications" element={<Notifications/>}/>
     <Route path="/user/wishlist" element={<Wishlist/>}/>
     <Route path="/user/cuppons" element={<Cuppons/>}/>
     <Route path="/user/manageaddress" element={<Address/>}/>
     <Route path="/user/orders" element={<Orders/>}/>
     <Route path='/shop1/:name' element={< Indepthdetails/>}/>
      </Routes>
      {auth 
        && <Footer/>
      
    }
      </div>
  )
}