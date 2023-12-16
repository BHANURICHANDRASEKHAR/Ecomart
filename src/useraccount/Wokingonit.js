import React from 'react'
import image from '../imgs/weareworkonit.png.jpg'

export default function Wokingonit() {
  return (
    <div className='conatiner' style={{position:'absolute',top:'30%',left:'40%'}}  data-aos="fade-down"
    data-aos-duration="900" data-aos-delay='600' data-aos-easing='ease-in-out'>
    <div className='row'>
    <img src={image} style={{objectFit:'contain',height:'300px',width:'500px'}}/><br/>
    </div><br/>
    <div className='row' style={{textAlign:'center'}}>
    <h2>We Are Working On It.......</h2>
    </div>
    </div>
    // <div className='conatainer' style={{display:'grid',placeItems:'center'}}>
    //     <div className='row' style={{marginTop:'10%',marginLeft:'35%'}}>
    //     <img src={image} style={{objectFit:'contain',height:'300px',width:'500px'}}/><br/>
    //     <h4 style={{marginLeft:'38px',marginTop:'20px',fontSize:'20px'}}>we are working on it</h4>
    //    </div>
    //     </div>
  )
}
