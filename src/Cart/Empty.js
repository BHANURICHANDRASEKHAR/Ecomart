import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export default function Empty() {
  return (
   <div>
   <div style={{display:'grid',placeItems:'center',margin:'150px 150px 0px 450px'}}  data-aos="fade-down"
   data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'><img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' style={{width:'300px',height:'200px',objectFit:'contain'}}></img>
   <h2>You are Cart is Empty!</h2>
   <p>Add items to it now.
   </p></div>
   <Link to='/shop'><button style={{width:'180px'}} data-aos="fade-left" 
   data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'><BsFillArrowLeftCircleFill/>&ensp; Back to Shop   </button></Link>

   </div>
  )
}
