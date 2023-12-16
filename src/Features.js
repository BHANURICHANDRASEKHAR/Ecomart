import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineStar,AiOutlineSafetyCertificate } from "react-icons/ai";
import {IoFlashOutline} from "react-icons/io5"
import {BsCheckAll} from "react-icons/bs"
import './features.css' 
import AOS from 'aos'
import "aos/dist/aos.css";
import features from './data/features';
AOS.init();
export default function Features() {
  
  return (
    <React.Fragment>
    <div className='container'>
   
    <div className='main-grid'>
    <div className='grid-item'> <i ><AiOutlineStar className='style' /><br/>
    <h2>Top Rank Farms</h2></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className='grid-item'> <i ><AiOutlineSafetyCertificate className='style' />
    <h2>Certificated</h2></i> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
    </div>
    <div className='grid-item'> <i ><IoFlashOutline className='style' />
    <h2>Fast Delivery</h2></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi </p>
    </div>
    <div className='grid-item'><i ><BsCheckAll className='style'/>
    <h2>Trusted products</h2></i> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi .</p>
    </div> </div>
    </div><hr/><Overall/></React.Fragment>
  )
}
const Overall=()=>{
  const [data,setdata]=useState(features)
  
  return(
    <div className='container'>
    <div className='main-grid' >
    {
     data.map((e)=>{
      const {id,img,name}=e;
      return(
        <Link  key={id} to={`/data/${name}`} value={name}>
        <div className='grid-item1 cards--two' >
        <img src={img}/>
        <span class="cards--two__rect"></span>
        <p >{name}</p>
        </div>
        </Link>
      )
     }) 
    }
  
    </div>
    </div>
  )
}