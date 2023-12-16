import React,{useContext} from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import './data.css'
import './navbar.css'
import './features.css'
import Ratinf from './Ratinf'
import rawdata from './data/testdata'
import { useState,useEffect } from 'react'
import Sticky from './Sticky';
import Sticky1 from './Sticky1';
import { json, useParams } from 'react-router-dom'
import axios from 'axios';
import { Authcontent } from './App';
import { Link } from 'react-router-dom';
export default function Data() {
 const {userdetails,auth,setcartcount}=useContext(Authcontent)
const navigate=useNavigate();
 function fun(filtervalue)
 {

  const newdata= groupdata.filter((e)=>{
    const {price,name}=e;
    if(filtervalue>=price)
    {
       return price;
    }
   })
   setgroupdata(newdata)

    }
  function newsetdata(data1)
  {
   
    setgroupdata(data1)
  }
// add data to cart function
const settocart=(id,productname,price,productimg)=>{

 if(auth)
 {
  const values=[{id:id,productname:productname,username:userdetails.name,usermail:userdetails.mail,price:price,productimg:productimg}]

  axios.post('http://localhost:8082/addtocart',values)
    .then((res) => {
      if (res.data.status === 'Success') {
        console.log(res)
        const userdata=res.data.data1;
        setcartcount(userdata.length)
        localStorage.setItem('itemscount',userdata.length)
        localStorage.setItem('cartstatus',true)
      
        localStorage.setItem('cartdata',JSON.stringify(userdata))
        
      }
      else{
        
      }
    })
    .catch((err) => {
      console.log('unsuccess', err);
    });
 }
 else{
 navigate('/login')
 }
};

const [groupdata,setgroupdata]=useState(rawdata)

  return (
 <div className='container-fluid' >
 <div className='rowdata11' >
<Sticky  fun={fun} newsetdata={newsetdata}/>
<div className='col'>
<div className='main-grid'>
 {
  groupdata.map((e)=>{
    const {id,image,name,price}=e;
    
    var randomratiing=6;
 
    return(
      <div class="card" data-aos="fade-up"
      data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'>
      <Link to={`/shop1/${name}`}><img src={image} alt="Avatar" style={{width:"100%"}}/></Link>
      <div class="container1">
        <h4><b>{name} 500grams</b></h4> 
        <Ratinf /><span style={{paddingBottom:'10px'}}>{randomratiing}</span>
        <p>Price: ₹{price}</p> 
        <button id="btn" onClick={()=>{settocart(id,name,price,image)}}><AiOutlineShoppingCart />Add to Cart</button>
      </div>
     
    </div>
   
    )
  })
 
}</div>
</div>
 </div>
 <Sticky1 fun={fun} newsetdata={newsetdata}/>

 </div>
  )
}
