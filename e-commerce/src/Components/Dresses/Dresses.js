import React, { useEffect } from 'react'
import './Dresses.css'

function Dresses() {

    useEffect(() => {
        let nodeDressSub = document.querySelectorAll('.dress-sub');
        // console.log(nodeDressSub)
        // console.log(nodeDressSub.length)        
        for(let i=0;i<nodeDressSub.length;i++){
            let nodeImage = nodeDressSub[i].childNodes[0]
            // console.log(nodeImage)
            let box = nodeDressSub[i].childNodes[1]
            let box2 = window.getComputedStyle(box, '::after')

            nodeDressSub[i].addEventListener('mouseenter', (event) => {
                nodeImage.style.backgroundSize = "110%"
                box.style.setProperty('--afterBack', 'scaleX(1)')
            })

            nodeDressSub[i].addEventListener('mouseleave', (event) => {
                nodeImage.style.backgroundSize = "100%"
                box.style.setProperty('--afterBack', 'scaleX(0)')
            })
        }
    })

    return (
        <div className="dresses">
            <a href='' className="dress-sub">
                <div className="image-1"></div>
                <h2 className='head' >Coats</h2>
            </a>
            <a href='' className="dress-sub">
                <div className="image-2"></div>
                <h2 className='head' >Jackets</h2>
            </a>
            <a href='' className="dress-sub">
                <div className="image-3"></div>
                <h2 className='head-3' >Dresses</h2>
            </a>
            <a href='' className="dress-sub">
                <div className="image-4"></div>
                <h2 className='head-4' >Shoes</h2>
            </a>
            <a href='' className="dress-sub">
                <div className="image-5"></div>
                <h2 className='head-5' >Jeans</h2>
            </a>
            <a href='' className="dress-sub">
                <div className="image-6"></div>
                <h2 className='head-6' >T-shirts</h2>
            </a>

           
        </div>
    )
}

export default Dresses
