import React from 'react'
import './Dresses.css'
import shoe from '../../images/shoe.jpeg'
import coat from '../../images/coat.jpeg'
import jacket from '../../images/jacket.jpeg'
import dress from '../../images/dress.jpeg'
import jeans from '../../images/jeans.jpeg'
import tShirts from '../../images/t-shirts.jpeg'


function Dresses() {

    const componentMouseEventDresses = (headClassName, imageClass, mouseEvent) => {
        try {
            let box = document.querySelector(headClassName)
            let box2 = window.getComputedStyle(box, '::after')
            if (mouseEvent == 'over') {
                box.style.setProperty('--afterBack', 'scaleX(1)')
                document.querySelector(imageClass).style.backgroundSize = "110%"
            } else if (mouseEvent == 'leave') {
                box.style.setProperty('--afterBack', 'scaleX(0)')
                document.querySelector(imageClass).style.backgroundSize = "100%"
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dresses">
            <a onMouseOver={() => { componentMouseEventDresses('.head', '.image-1','over') }} onMouseLeave={() => { componentMouseEventDresses('.head', '.image-1','leave') }} className="dress-sub">
                <div className="image-1"></div>
                <h2 className='head' >Coats</h2>
            </a>
            <a onMouseOver={() => { componentMouseEventDresses('.head-2', '.image-2','over') }} onMouseLeave={() => { componentMouseEventDresses('.head-2', '.image-2','leave') }} className="dress-sub">
                <div className="image-2"></div>
                <h2 className='head-2' >Jackets</h2>
            </a>
            <a onMouseOver={() => { componentMouseEventDresses('.head-3', '.image-3','over') }} onMouseLeave={() => { componentMouseEventDresses('.head-3', '.image-3','leave') }} className="dress-sub">
                <div className="image-3"></div>
                <h2 className='head-3' >Dresses</h2>
            </a>
            <a onMouseOver={() => { componentMouseEventDresses('.head-4', '.image-4','over') }} onMouseLeave={() => { componentMouseEventDresses('.head-4', '.image-4','leave') }} className="dress-sub">
                <div className="image-4"></div>
                <h2 className='head-4' >Shoes</h2>
            </a>
            <a onMouseOver={() => { componentMouseEventDresses('.head-5', '.image-5','over') }} onMouseLeave={() => { componentMouseEventDresses('.head-5', '.image-5','leave') }} className="dress-sub">
                <div className="image-5"></div>
                <h2 className='head-5' >Jeans</h2>
            </a>
            <a onMouseOver={() => { componentMouseEventDresses('.head-6', '.image-6','over') }} onMouseLeave={() => { componentMouseEventDresses('.head-6', '.image-6','leave') }} className="dress-sub">
                <div className="image-6"></div>
                <h2 className='head-6' >T-shirts</h2>
            </a>
        </div>
    )
}

export default Dresses
