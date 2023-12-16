import React from 'react'
import UserContent from './UserContent'
import './usercontent.css'
export default function Reviews() {
    return (
      <React.Fragment>
      <div className='container'>   <div className='main'>
      <UserContent></UserContent><div className='right'><Noreviews/></div></div></div>
       </React.Fragment>
    )
  }
  const Noreviews=()=>
  {
    return(
        <div className='conatainer' style={{display:'grid',placeItems:'center'}}  data-aos="fade-down"
        data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'>
        <div className='row' style={{marginTop:'10%',marginLeft:'35%'}}>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myReviewsEmpty_343559.png" style={{objectFit:'contain',height:'110px',width:'300px'}}/><br/>
        <h4 style={{marginLeft:'38px',marginTop:'20px',fontSize:'20px'}}>No Reviews & Ratings</h4>
        <p>You have not rated or reviewed any product yet!</p></div>
        </div>
    )
  }