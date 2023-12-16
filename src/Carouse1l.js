import React,{useEffect} from 'react'
import './carosel.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import car1 from "./imgs/car1.jpg";
import car2 from "./imgs/car2.jpg";
import car3 from "./imgs/car3.jpg";
import Features from './Features'
export default function Carousel1() {
useEffect(()=>{
  AOS.init();
})
  return (
    <React.Fragment>
   <div className='container'>
    <div class="carousel">
    <ul class="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
        <div className='content'>
        <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1200' data-aos-delay='0'> Fresh Vegitables,Fruits 100% Organic</h2>
        <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
        <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button></div>
        <img src={car1} className='carimg'/>

        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
        <div className='content'>
        <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1200' data-aos-delay='0'> Fresh Meat   & 100% Organic</h2>
        <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
        <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button></div>
        <img src="https://c4.wallpaperflare.com/wallpaper/978/326/380/meat-herbs-chop-steak-wallpaper-preview.jpg" className='carimg'/>
        </div>
        <div class="carousel-controls">
          <label for="img-1" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
      </div>
    </ul>
  </div>
  </div>
</React.Fragment>
  )
}
