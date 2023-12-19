import React from 'react'
import { useEffect } from 'react'
import './Collections.css'

function Collections() {

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
                <div className="collection-sub-division">
                    <a href="" className="left-collection left-1">
                        <h1 className="head-left">New In</h1>
                    </a>
                </div>
                <div className="collection-sub-division">
                    <a href="" className="left-collection left-2">
                        <h1 className="head-left">The All-In-One</h1>
                    </a>
                </div>  
            </div>



                <div className="collection-center">
                    <div className="collection-sub-division">
                        <a href="" className="center-collection">
                            <h1 className="head-center">Complete Your Look</h1>
                        </a>
                    </div>
                    
                </div>
                <div className="collection-right">
                    <div className="collection-sub-division">
                        <a href="" className="right-collection right-1">
                            <h1 className="head-right">New In</h1>
                        </a>
                    </div>
                    
                    <div className="collection-sub-division">
                        <a href="" className="right-collection right-2">
                            <h1 className="head-right">Must Haves</h1>
                        </a>
                    </div>
                    
                </div>
        </div>
                
    </div>
  )
}

export default Collections
