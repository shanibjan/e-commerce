import React from 'react'
import { useEffect } from 'react'
import './Collections.css'
import imagePath from '../assetHelper/assetHelper'

function Collections() {

    let collectionDynamic=[
        {src:'collection-1.jpeg' ,tag:"Discover new"},
        {src:'collection-2.avif' ,tag:"Go traditional"},
    ]
    let collectionDynamicRight=[
        {src:'collection-3.avif' ,tag:"Fit to win"},
        {src:'collection-4.webp' ,tag:"Look famous"},

    ]

    useEffect(()=>{
        let collectionLeftSub=document.querySelectorAll('.collection-sub-division')
        for(let i=0;i<collectionLeftSub.length;i++){
            let left1=collectionLeftSub[i].childNodes[0]
            let headLeft=left1.childNodes[0]
            let headLeftAfter = window.getComputedStyle(headLeft, '::after')

            collectionLeftSub[i].addEventListener('mouseenter',(e)=>{
                left1.style.backgroundSize = "110%"
                headLeft.style.setProperty('--afterBack', 'scaleX(1)')
            })

            collectionLeftSub[i].addEventListener('mouseleave',(e)=>{
                left1.style.backgroundSize = "100%"
                headLeft.style.setProperty('--afterBack', 'scaleX(0)')
            })
        }
    })
  return (
    <div className="collections">
        <h1>Popupal Collections</h1>
        <div className="collection-sub">

            <div className="collection-left">
                {collectionDynamic.map((collection,index)=>{
                    return(
                        <div className="collection-sub-division">
                             <a key={`${collection.src}`} href="" className="left-collection" style={{backgroundImage:`url(${imagePath(`${collection.src}`)})`}}>
                                <h1 key={`${collection.tag}`} className="head-left">{collection.tag}</h1>
                            </a>
                         </div> 
                    )
                })}
                
            </div>

                <div className="collection-center">
                    <div className="collection-sub-division">
                        <a href="" className="center-collection">
                            <h1 className="head-center">Complete Your Look</h1>
                        </a>
                    </div>
                    
                </div>
                <div className="collection-right">
                {collectionDynamicRight.map((collection,index)=>{
                    return(
                        <div className="collection-sub-division">
                             <a key={`${collection.src}`} href="" className="left-collection" style={{backgroundImage:`url(${imagePath(`${collection.src}`)})`}}>
                                <h1 key={`${collection.tag}`} className="head-left">{collection.tag}</h1>
                            </a>
                         </div> 
                    )
                })}
                    
                </div>
        </div>
                
    </div>
  )
}

export default Collections
