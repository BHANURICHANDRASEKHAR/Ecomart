import React,{useContext, useEffect, useState} from 'react'
import './cartitems.css'
import { Link } from 'react-router-dom'
import Empty from './Empty'
import {FcDeleteDatabase} from'react-icons/fc'
import { Authcontent } from '../App'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// function toasting
function notify(msg)
{
  toast.success(msg, {
    position: "bottom-left", 
    autoClose: 1500,      
    hideProgressBar: false, 
    closeOnClick: true,    
    pauseOnHover: true,
    fontSize:'20px',
    background:'green',
    color:'white',
   
  });
}
var subtotal,delivarycharge=40;
var item;
var total;
export default function Cart() {
  const {emptystatus,setemptystatus,cartitemscount}=useContext(Authcontent)
 var bool= localStorage.getItem('cartstatus');
  const [emptystatus1,setemptystatus1]=useState(bool)
   useEffect(()=>{
    try{
      if(cartitemscount<=0)
      {
        setemptystatus1(false)
        localStorage.setItem('cartstatus',false)
      }
      else{
        setemptystatus1(true)
        localStorage.setItem('cartstatus',true)
      }
    
    }
    catch(e)
    {
      console.log('error')
    }
  },[cartitemscount,bool])
    try{
      const items=localStorage.getItem('cartdata');
   
   
        item=JSON.parse(items)
     
    
    
  }
  catch(e)
  {
    console.log('ignore')
  }

  return (
    <div className='container' style={{marginTop:'30px',padding:'30px',height:'100vh',maxHeight:'fitContent',width:'100%',background:'white'}}>
    <div style={{display:'flex'}}>
    {
       emptystatus1 ? (
        <React.Fragment>
        <CartItem emptystatus1={emptystatus1} setemptystatus1={setemptystatus1} />
        <ToastContainer/>
        </React.Fragment>
      )
      :
      (
      <Empty/>
      )
    }
   
    </div></div>
  )
}
const CartItem=(pro)=>{
  function flagcheck()
  {
    try{
      if(cartitemscount<=0)
      {
        setemptystatus1(false)
        localStorage.setItem('cartstatus',false)
      }
      else{
        setemptystatus1(true)
        localStorage.setItem('cartstatus',true)
      }
    
    }
    catch(e)
    {
      console.log('error')
    }
 
  }
  const {cartitemscount,setcartitemscount,setcartstate}=useContext(Authcontent)
  const {emptystatus1,setemptystatus1}=pro
   var totalitemscost=0;
 function inc(productname,mail,opr,count)
  
 {
  const value=[
    {
     productname:productname,
     mail:mail,
     opr:opr
    }
   ]
  if(count>=1)
  {
  

  
  axios.post('http://localhost:8082/addtocartinc',value)
 
    .then((res) => {
     
      if (res.data.status === 'Success') {
        const userdata=res.data.data1;
        item=userdata;
        localStorage.setItem('cartdata',JSON.stringify(userdata))
        console.log('heelo chandu njhauhyu')
         localStorage.setItem('itemscount',item.length)
        setcartitemscount(item.length)
        notify("😌"+"Successfully Updated cart");
        flagcheck();
       
          
      }
      else{
        
      }
    })
    .catch((err) => {
      console.log('unsuccess', err);
    });
 }
 else{
  axios.post('http://localhost:8082/removetocart',value)
 
  .then((res) => {
    
    if (res.data.status === 'Success') {
      const userdata=res.data.data1;
      item=userdata;
      localStorage.setItem('cartdata',JSON.stringify(userdata))
   
      localStorage.setItem('itemscount',item.length)
        setcartitemscount(item.length)
        flagcheck();
        
        
    }
    else{
      
    }
  })
  .catch((err) => {
    console.log('unsuccess', err);
  });
 }
}
function entireitemdelete(productname,mail)
{
  const value=[
    {
     productname:productname,
     mail:mail,
    
    }
  ]
  axios.post('http://localhost:8082/removetocart',value)
 
  .then((res) => {
    console.log(res.data.data1)
    if (res.data.status === 'Success') {
      const userdata=res.data.data1;
      item=userdata;
      localStorage.setItem('cartdata',JSON.stringify(userdata))
      localStorage.setItem('itemscount',item.length)
      setcartitemscount(item.length)
       notify('🥺successfully removed')
      console.log(res.data.status)
       flagcheck();
        
    }
    else{
      
    }
  })
  .catch((err) => {
    console.log('unsuccess', err);
  });
 
}

//  function dec(productname,mail)
//  {
//   const value=[
//    {
//     productname:productname,
//     mail:mail,
//    }
//   ]
  
//   axios.post('http://localhost:8082/removetocartinc',value)
 
//     .then((res) => {
//       console.log(res.data.data1)
//       if (res.data.status === 'Success') {
//         const userdata=res.data.data1;
//         item=userdata;
//         localStorage.setItem('cartdata',JSON.stringify(userdata))
//         setcartitemscount(userdata.count)
          
//       }
//       else{
        
//       }
//     })
//     .catch((err) => {
//       console.log('unsuccess', err);
//     });
//  }
  return(
    <React.Fragment>
    <div className='row' style={{width:'68%',height:'fitContent',padding:'10px',background:"transparent",}}>
    <h2>Cart</h2>
    {
      item.map((e,index)=>{
       const {productname,count,price,productimg,mail} = e;
       setcartitemscount(count)
         total=count*price;
         totalitemscost=totalitemscost+total;
        return(
          <div className='cartitem' key={index}>
      <img src={productimg} />
      <h5>{productname} Per-500 Grams</h5>
      <p>₹{price}</p>
  <button style={{width:'100px'}} onClick={()=>{inc(productname,mail,'dec',count)}}>-</button><span style={{textAlign:'center ',fontSize:"20px"}}>{count}</span><button style={{width:'100px'}} onClick={()=>{inc(productname,mail,'inc',count)}}>+</button>
      <p>₹{total}</p>
      <FcDeleteDatabase style={{height:'30px',width:'30px',position:'absolute',right:'37%',marginTop:'30px',cursor:'pointer' }} onClick={()=>{entireitemdelete(productname,mail,)}}/>
      </div>
        )
      })
    }
      <PriceDetails totalitemscost={totalitemscost}/>
      <Free totalitemscost={totalitemscost}/>
    </div>
   
    </React.Fragment>
  )
}
const PriceDetails=(pro)=>{
 
 
  return(
    <div className='pricecard'>
    <table>
    <thead>    <h3 style={{marginBotom:'0px'}}>Cart Totals</h3>
    </thead>
    <tr>
    <td>
    <h5 >Sub Total</h5></td>
    <td><h5 style={{textAlign:'right',color:"red",fontSize:'25px'}}>₹{pro.totalitemscost}</h5></td>
    </tr>
    <tr>
    <td><h5 >Delivary Charge</h5></td>
    <td><h5 style={{textAlign:'right',color:"red",fontSize:'25px'}}>₹{delivarycharge}</h5></td>
    </tr>
   <tr>
   <td><h5 >Shipping</h5>
   </td>
   <td><p>enter your address to view shipping options
          </p>
          <Link to ='/user/manageaddress' style={{textDecoration:'none',color:'darkgreen',textAlign:'right'}}>Shipping Adress</Link></td>
   </tr>
    <tr><td> <hr className='hr'/></td><td> <hr className='hr'/></td></tr>
   <tr>
   <td><h5>Total</h5></td>
   <td><h5 style={{textAlign:'right',color:"red",fontSize:'25px'}}>₹{delivarycharge+pro.totalitemscost}</h5></td></tr>
    </table>
    <button style={{width:'100%',margin:'5px'}} >Procced to Checkout</button>
    </div>
    
  )
}
const Free=(pro)=>{
  var subtotal=pro.totalitemscost
  var  progresstotal=Math.floor(subtotal/15);
var spend=1500-subtotal;
var  setcong=true;

  if(progresstotal<100)
  {

    progresstotal=Math.floor(subtotal/15);
    delivarycharge=40;
  }
  else{
      setcong=false;
    progresstotal=100;
    delivarycharge=0;
    spend=0;
    
   
  }
 

  return(
    <div className='conatiner' style={{position:'static',}}>
    <div className='row'>
   <div className='progress1'>
   
   <div className="progress" style={{ width: `${progresstotal}%` }}>{progresstotal}%</div></div>
   {
    setcong ?
    (
      <div className='progress-text'>
  <p style={{textShadow:'1px black'}}>Spend <b style={{color:'green',fontSize:'22px'}}>₹{spend}</b> more to reach <b>FREE SHIPPING!</b></p>
  <p>
  to add more products to your cart and receive free shipping for order ₹1,500..</p></div>
    )
    :
    (
   <div className='progress-text'>  <p>Congratulations! You get <b>FREE SHIPPING!</b> with your order greater ₹1,500</p>
   </div>
    )
   }


    </div></div>
  )
}