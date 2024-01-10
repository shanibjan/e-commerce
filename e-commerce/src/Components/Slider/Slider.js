import React from 'react'
import './Slider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    const jan={
        items:1,
        dots:true,
        center:true
    }
  return (
    <div>
      <OwlCarousel className='owl-theme' {...jan}>
        <div className='item'>
            <h4>1</h4>
        </div>
        <div className='item'>
            <h4>2</h4>
        </div>
        <div className='item'>
            <h4>3</h4>
        </div>  
</OwlCarousel>
    </div>
  )
}

export default Slider
