import React, { useEffect } from 'react'
import './Reviews.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import diego from '../../images/diego.avif'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
    

    const options ={
        items:2,
        loop:true,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:4000,
        animateOut: 'fadeOut',
        center:false,
        nav:false,
        pagination:false,
        navigation:true,    
        margin: 0,
        autoHeight : true,
    }
    

  return (
    <div className="reviews">
        <h1>The Frshest and Most Exciting News</h1>
        <OwlCarousel className='owl-carousel owl-theme' {...options} >
        
            <div class='item'>
                <a href='' className="review-sub-1">
                    <div className="upper-main">
                        <div className="review-sub-upper">
                            <h2 className='heads' >Well strectured UI Design</h2>
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
            </div>
            <div class='item'>
                <a href='' className="review-sub-1">
                    <div className="upper-main">
                        <div className="review-sub-upper">
                            <h2 className='heads' >Well strectured UI Design</h2>
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
            </div>
            <div class='item'>
                <a href='' className="review-sub-1">
                    <div className="upper-main">
                        <div className="review-sub-upper">
                            <h2 className='heads' >Well strectured UI Design</h2>
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
            </div>
            <div class='item'>
                <a href='' className="review-sub-1">
                    <div className="upper-main">
                        <div className="review-sub-upper">
                            <h2 className='heads' >Well strectured UI Design</h2>
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
            </div>
            


            
        
        
        </OwlCarousel>
    </div>
  )
}

export default Reviews
