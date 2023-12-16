import React,{useEffect} from 'react'
import './carosel.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import Features from './Features'
export default function Carousel1() {
useEffect(()=>{
  AOS.init();
})
  return (
    <React.Fragment>
   
   
    <div className='container'>
  
    <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
        <div className='content'>
        <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1200' data-aos-delay='0'> Fresh Vegitables,Fruits 100% Organic</h2>
        <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
        <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button></div>
            <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
        <div className='content'>
        <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1200' data-aos-delay='0'> Fresh Meat   & 100% Organic</h2>
        <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
        <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button></div>
        
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
         
    </li>
   
   
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
     
    </ol>
  </aside>

</section>

</div>
</React.Fragment>
  )
}
