import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import mc from '../imgs/mastercard.png'
import sc from '../imgs/skrill.png'
import pp from '../imgs/phonepe.png'
import payp from '../imgs/paypal.png'
import logo from '../imgs/logo1.png'
export default function Footer() {
  return (
   <React.Fragment>
 
<footer class="footer-distributed container">

      <div class="footer-left">

      
        <img src={logo} style={{width:'200px',height:'130px',margin:'0'}}/>
        <p class="footer-links">
        <Link to='/'>Home</Link>
        <Link to='/account'>Account</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        </p>

        <p class="footer-company-name">Ecomart © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>dhiwancheruvu</span>rajahmundry,ap</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91939988487</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">bhanurichandu@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#"><BsFacebook/></a>
          <a href="#"><BsTwitter/></a>
          <a href="#"><BiLogoLinkedin/></a>
          <a href="#"><FaGithub/></a>

        </div>

      </div>
<div className='paymentlogos'>
<img src={payp}></img>
<img src={pp}></img>
<img src={sc}></img>


</div>
    </footer>
   </React.Fragment>
  )
}
