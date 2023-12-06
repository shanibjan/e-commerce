import React, { useEffect } from 'react'
import './Dresses.css'
import shoe from '../../images/shoe.jpeg'
import coat from '../../images/coat.jpeg'
import jacket from '../../images/jacket.jpeg'
import dress from '../../images/dress.jpeg'
import jeans from '../../images/jeans.jpeg'
import tShirts from '../../images/t-shirts.jpeg'
import { useState } from 'react'

function Dresses() {

    // useEffect(() => {
    //     // let nodeDressSub = document.querySelectorAll('.dress-sub');
    //     // console.log(nodeDressSub)
    //     // console.log(nodeDressSub.length)
    //     // for(let i=0;nodeDressSub.length-1;i++) {
    //         // let nodeImage = nodeDressSub[i].childNodes[0]
    //         // console.log(nodeImage)
    //         // let box = nodeDressSub[i].childNodes[1]
    //         // let box2 = window.getComputedStyle(box, '::after')

    //         // nodeDressSub[i].addEventListener('mouseenter', (event) => {
    //         //     nodeImage.style.backgroundSize = "110%"
    //         //     box.style.setProperty('--afterBack', 'scaleX(1)')
    //         // })

    //         // nodeDressSub[i].addEventListener('mouseleave', (event) => {
    //         //     nodeImage.style.backgroundSize = "100%"
    //         //     box.style.setProperty('--afterBack', 'scaleX(0)')
    //         // })
    //     }
    // })

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
            <a className="dress-sub">
                <div className="image-1"></div>
                <h2 className='head' >Coats</h2>
            </a>
            <a className="dress-sub">
                <div className="image-2"></div>
                <h2 className='head' >Jackets</h2>
            </a>
            <a className="dress-sub">
                <div className="image-3"></div>
                <h2 className='head-3' >Dresses</h2>
            </a>
            <a className="dress-sub">
                <div className="image-4"></div>
                <h2 className='head-4' >Shoes</h2>
            </a>
            <a className="dress-sub">
                <div className="image-5"></div>
                <h2 className='head-5' >Jeans</h2>
            </a>
            <a className="dress-sub">
                <div className="image-6"></div>
                <h2 className='head-6' >T-shirts</h2>
            </a>
        </div>
    )
}

export default Dresses
