import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontent } from '../App'
import './usercontent.css'
import Userdom from './Userdom'
import {AiFillWallet} from 'react-icons/ai'
import {BiSolidUser,BiSolidContact,BiSolidLogOutCircle,BiSolidLogInCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Userifo from './Userifo'
export default function UserContent() {
    const {userdetails,setuserdetails}=useContext(Authcontent)
  return (
    <React.Fragment><Left/></React.Fragment>
  )
}
const Left=()=>
{
    return(
        <div className='main1'><HelloUser/>
        <UserDeatils/></div>
    )
}
const HelloUser=()=>{
    const {userdetails}=useContext(Authcontent)
   return(
    <div className='hello'>
    <div>
    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg " style={{margin:'5px'}}/>
 </div>
 <div><p>Hello &nbsp;<b>{userdetails.name || "none"}</b><br/>Welcome to EcoMart</p> 
</div>
    </div>
   )
}
const UserDeatils=()=>{
    const {auth,setauth}=useContext(Authcontent)
  const navigate=useNavigate();
  const logout=()=>
  {
    if (window.confirm("are you sure want to logout!") == true) {
      localStorage.clear();
     setauth(false);
     navigate('/')
    }
  }
    return(
        <div className='hello1'>
         <div className='div' style={{height:'38px'}}><AiFillWallet className='icons'/><Link to='/user/orders' className='link'><p>My Orders</p></Link>
         </div><br/>
         <hr/>
         <div>
         <div className='div' ><BiSolidUser className='icons'/> <p>ACCOUNT SETTINGS</p></div>
          <ul>
          <li>
          <Link to ='/user/personalinformation' className='link'><p>personal information</p></Link></li>
          <li>
          <Link to ='/user/manageaddress' className='link'><p>manage address</p></Link></li>
          </ul>
         </div>
    
        <hr/>
         <div>
         <div className='div' ><BiSolidContact className='icons'/> <p> my Stuff</p></div>
          <ul>
          <li>
          <Link to ='/user/cuppons' className='link'><p>my coupons</p></Link></li>
          <li>
          <Link to ='/user/review' className='link'><p>my reviews&ratings</p></Link></li>
          <li>
          <Link to ='/user/notifications' className='link'><p>allnotifications</p></Link></li>
          <li>
          <Link to ='/user/wishlist' className='link'><p>my wishlist</p></Link></li>
          </ul>
         </div> 
        <hr/>
        {
            auth ?(
            <div className='div' onClick={logout}><BiSolidLogOutCircle className='icons'/> <p> Logout</p></div>)
           :
           (
            <div className='div'><BiSolidLogInCircle className='icons'/> <Link to='/login' className='link'><p>Login</p></Link></div>

           )
        }
        </div>
    )
}