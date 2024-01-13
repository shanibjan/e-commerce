import React, { useEffect } from 'react'
import './Dresses.css'
import imagePath from '../assetHelper/assetHelper.js'

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


    let dressesDynamic=[
        {src :'jacket.jpeg',name:"jacket"},
        {src:'coat.jpeg',name:"Coat"},
        {src:'dress.jpeg',name:"Dress"},
        {src:'jeans.jpeg',name:"Jeans"},
        {src:'jacket.jpeg',name:"jacket"},
        {src:'jacket.jpeg',name:"jacket"}
]




console.log(dressesDynamic[0].src);


    return (
        
        <div className="dresses">
             {/* <img src={process.env.PUBLIC_URL + imgNameWithPath} /> */}
            <img  alt="" />
            
                
                    {dressesDynamic.map((dressesDynamic,index)=>{
                    return (
                        <a href='' className="dress-sub">
                            <div key1={`${dressesDynamic.src}`} className="image-1" style={{backgroundImage:`url(${imagePath(`${dressesDynamic.src}`)})`}}></div>
                            <h2  key2={`${dressesDynamic.name}`} className='head' >{dressesDynamic.name}</h2>
                            
                        </a>
                        
                    ) 
                    
                    })}
        </div>
    )
    
}

export default Dresses
