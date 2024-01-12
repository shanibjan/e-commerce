import React, { useEffect } from 'react'
import './Reviews.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import diego from '../../images/diego.avif'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imagePath from '../assetHelper/assetHelper'

function Reviews() {

    let reviewDynamic=[
        {head:"Well strectured UI Developing", desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,",
         img:'JAN.jpeg',name:"SHANIB JAN",prof:"REACT DEVELOPER"
        },
        {head:"Well System Managing", desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,",
         img:'kutt.jpeg',name:"CHRISTINA",prof:"SYSTEM ENGINEER"
        },
        {head:"Hard Core Python ", desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,",
         img:'shah.jpeg',name:"ANIRUDH",prof:"PYTHON DEVELOPER"
        },
        {head:"Dot Net Developing ", desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque harum inventore provident similique, porro neque. Minima exercitationem, reprehenderit veritatis illo,",
         img:'janu.jpeg',name:"JAN SHANIB",prof:".NET TESTER"
        }
    ]
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
        margin: 0,
    }
    

  return (
    <div className="reviews">
        <h1>The Frshest and Most Exciting News</h1>
        <OwlCarousel className='owl-carousel owl-theme' {...options} >

        {reviewDynamic.map((review,index)=>{
            return(
                <div className='item'>
                <a href='' className="review-sub-1">
                    <div className="upper-main">
                        <div className="review-sub-upper">
                            <h2 key={`${review.head}`} className='heads' >{review.head}</h2>
                            <div className="review-stars">
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                        </div>
                        <p key={`${review.desc}`} > 
                            {review.desc}
                        </p>
                    </div>
                    
                    <div className="review-sub-bottom">
                        <div className="review-img">
                            <img key={`${review.img}`} src={`${imagePath(review.img)}`} alt="" />
                        </div>
                        <div key={`${review.prof}`} className="review-developer">
                            <strong key={`${review.name}`} >{review.name}</strong>
                                 -    {review.prof}
                        </div>
                    </div>
                </a>
            </div>
            )
        })}
            
        </OwlCarousel>
    </div>
  )
}

export default Reviews
