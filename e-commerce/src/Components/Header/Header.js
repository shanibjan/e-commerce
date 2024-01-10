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
    dots:false,
}
  return (
    <div className="header">
    <span className="left">
        <p className="light" > Call us:</p>
        <p className="bold" >1–234–5678901</p>
    </span>
    <div className="owl-main-part">
      <OwlCarousel className='owl-theme' {...jan}>
            <div className='item-header'>
              <span className="center">
                <p className="bold">50% OFF</p>
                <p className="light">all new collection</p>
                <a className="more" >More Details</a>
              </span>
            </div>

            <div className='item-header'>
              <span className="center">
                <p className="bold">TAKE 30% OFF</p>
                <p className="light">When you spent $99</p>
                <a className="more" >More Details</a>
              </span>
            </div>

            <div className='item-header'>
              <span className="center">
                <p className="bold">FREE 2-DAYS</p>
                <p className="light">On standard shipping of $255</p>
                <a className="more" >More Details</a>
              </span>
            </div>
            
          </OwlCarousel>
    </div>
        
      
    <span className="right">
        <a  className="link" href="">Facebook</a>
        <a className="link" href="">Instagram</a>
        <a className="link" href="">Twitter</a>
    </span>
    
    
</div>
  )
}

export default Header

