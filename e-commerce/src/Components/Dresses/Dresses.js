import React from 'react'
import './Dresses.css'
import shoe from '../../images/shoe.jpeg'
import coat from '../../images/coat.jpeg'
import jacket from '../../images/jacket.jpeg'
import dress from '../../images/dress.jpeg'
import jeans from '../../images/jeans.jpeg'
import tShirts from '../../images/t-shirts.jpeg'


function Dresses() {
   
    const coatEnt=()=>{
        let box=document.querySelector('.head')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-1').style.backgroundSize="110%"
        

    }
    const coatLeav=()=>{
        let box=document.querySelector('.head')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-1').style.backgroundSize="100%"
    }
    const jacketEnt=()=>{
        let box=document.querySelector('.head-2')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-2').style.backgroundSize="110%"
        

    }
    const jacketLeav=()=>{
        let box=document.querySelector('.head-2')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-2').style.backgroundSize="100%"
    }
    const dressEnt=()=>{
        let box=document.querySelector('.head-3')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-3').style.backgroundSize="110%"
        

    }
    const dressLeav=()=>{
        let box=document.querySelector('.head-3')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-3').style.backgroundSize="100%"
    }
    const shoeEnt=()=>{
        let box=document.querySelector('.head-4')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-4').style.backgroundSize="110%"
        

    }
    const shoeLeav=()=>{
        let box=document.querySelector('.head-4')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-4').style.backgroundSize="100%"
    }
    const jeansEnt=()=>{
        let box=document.querySelector('.head-5')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-5').style.backgroundSize="110%"
        

    }
    const jeansLeav=()=>{
        let box=document.querySelector('.head-5')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-5').style.backgroundSize="100%"
    }
    const tEnt=()=>{
        let box=document.querySelector('.head-6')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(1')
        document.querySelector('.image-6').style.backgroundSize="110%"
        

    }
    const tLeav=()=>{
        let box=document.querySelector('.head-6')
        let box2=window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','scaleX(0')
        document.querySelector('.image-6').style.backgroundSize="100%"
    }
  return (
    <div className="dresses">
        <a onMouseOver={coatEnt} onMouseLeave={coatLeav} className="dress-sub">
            <div className="image-1"></div>
            <h2 className='head' >Coats</h2>
        </a>
        <a onMouseOver={jacketEnt} onMouseLeave={jacketLeav} className="dress-sub">
            <div className="image-2"></div>
            <h2 className='head-2' >Jackets</h2>
        </a>
        <a onMouseOver={dressEnt} onMouseLeave={dressLeav} className="dress-sub">
            <div className="image-3"></div>
            <h2 className='head-3' >Dresses</h2>
        </a>
        <a onMouseOver={shoeEnt} onMouseLeave={shoeLeav} className="dress-sub">
            <div className="image-4"></div>
            <h2 className='head-4' >Shoes</h2>
        </a>
        <a onMouseOver={jeansEnt} onMouseLeave={jeansLeav} className="dress-sub">
            <div className="image-5"></div>
            <h2 className='head-5' >Jeans</h2>
        </a>
        <a onMouseOver={tEnt} onMouseLeave={tLeav} className="dress-sub">
            <div className="image-6"></div>
            <h2 className='head-6' >T-shirts</h2>
        </a>
    </div>
  )
}

export default Dresses
