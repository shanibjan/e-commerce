import React from 'react'
import './Header.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Header() {
  const jan={
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false
}
  return (
    <div class="header">
    <span class="left">
        <p class="light" > Call us:</p>
        <p class="bold" >1–234–5678901</p>
    </span>
    <div className="owl-main-part">
      <OwlCarousel className='owl-theme' {...jan}>
            <div class='item-header'>
              <span class="center">
                <p class="bold">50% OFF</p>
                <p class="light">all new collection</p>
                <a class="more" >More Details</a>
              </span>
            </div>

            <div class='item-header'>
              <span class="center">
                <p class="bold">50% OFF</p>
                <p class="light">all new collection</p>
                <a class="more" >More Details</a>
              </span>
            </div>

            <div class='item-header'>
              <span class="center">
                <p class="bold">50% OFF</p>
                <p class="light">all new collection</p>
                <a class="more" >More Details</a>
              </span>
            </div>
            
          </OwlCarousel>
    </div>
        
      
    <span class="right">
        <a  class="link" href="">Facebook</a>
        <a class="link" href="">Instagram</a>
        <a class="link" href="">Twitter</a>
    </span>
    
    
</div>
  )
}

export default Header

