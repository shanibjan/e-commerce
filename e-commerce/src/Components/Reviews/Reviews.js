import React, { useEffect } from 'react'
import './Reviews.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import diego from '../../images/diego.avif'

function Reviews() {

    useEffect(()=>{
        let reviewSub1=document.querySelectorAll('.review-sub-1')
        for(let i =0;i<reviewSub1.length;i++){
            let upperMain=reviewSub1[i].childNodes[0]
            let reviewSubUpper=upperMain.childNodes[0]
            let reviewHead=reviewSubUpper.childNodes[0]
            let reviewHeadAfter = window.getComputedStyle(reviewHead, '::after')
    
            reviewSub1[i].addEventListener('mouseenter',(e)=>{
                reviewHead.style.setProperty('--afterBack', 'scaleX(1)')
            })
    
            reviewSub1[i].addEventListener('mouseleave',(e)=>{
                reviewHead.style.setProperty('--afterBack', 'scaleX(0)')
            })
        }
    })
    

  return (
    <div className="reviews">
        <h1>The Frshest and Most Exciting News</h1>
        <div className="review-sub">
            <a href='' className="review-sub-1">
                <div className="upper-main">
                    <div className="review-sub-upper">
                        <h2 className='head' >Well strectured UI Design</h2>
                        <div className="review-stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,
                    </p>
                </div>
                
                <div className="review-sub-bottom">
                    <div className="review-img">
                        <img src={diego} alt="" />
                    </div>
                    <div className="review-developer">
                        <strong>DIEGO LOPEZON</strong>
                        -DEVELOPER
                    </div>
                </div>
            </a>

            <a href='' className="review-sub-1">
                <div className="upper-main">
                    <div className="review-sub-upper">
                        <h2 className='head' >Well strectured UI Design</h2>
                        <div className="review-stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,
                    </p>
                </div>
                <div className="review-sub-bottom">
                    <div className="review-img">
                        <img src={diego} alt="" />
                    </div>
                    <div className="review-developer">
                        <strong>DIEGO LOPEZON</strong>
                        --DEVELOPER
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Reviews
