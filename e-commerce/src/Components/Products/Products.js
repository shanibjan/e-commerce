import React from 'react'
import './Products.css'
import { faStar,faCodeCompare,faSearchPlus,faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart2 from '../../assets/Cart2'
import Love from '../../assets/Love'
import Compare from '../../assets/Compare'
import Plus from '../../assets/Plus'
import { useEffect } from 'react'
import imagePath from '../assetHelper/assetHelper.js'

function Products() {

    let productsDynamic=[
        {img1:'product-3.jpeg',img2:'product-4.jpeg',brand:"NIKE",brandValue:"NOTHING IS IMPOSSIBLE",price:"250.00",rating:"★★★★",ad:"TOP"},
        {img1:'product-5.jpeg',img2:'product-6.jpeg',brand:"PUMA",brandValue:"FOREVER FASTER IS ALWAYS ",price:"350.00",rating:"★★",ad:""},
        {img1:'product-1.jpeg',img2:'product-2.jpeg',brand:"ADIDAS",brandValue:"RISK EVERYTHING ",price:"375.00",rating:"★★★",ad:"NEW"},
        {img1:'product-7.jpeg',img2:'collection-2.jpeg',brand:"GUCCI",brandValue:"LUXURY FOR THE BEST",price:"975.00",rating:"★★★★★",ad:"FEATURED"}

    ]

    useEffect(()=>{
        let imageWrapper=document.querySelectorAll('.image-wrapper-pro')
        for(let i=0;i<imageWrapper.length;i++){
            let itemsHover=imageWrapper[i].childNodes[2]
            imageWrapper[i].addEventListener('mouseenter',(e)=>{
                itemsHover.style.display="grid"
                // itemsHover.style.transition="5s cubic-bezier(0.075, 0.82, 0.165, 1)"
            })

            imageWrapper[i].addEventListener('mouseleave',(e)=>{
                itemsHover.style.display="none"
            })

        }


        let cartAction=document.querySelectorAll('.carts')
        for(let i=0;i<cartAction.length;i++){
            let firstCart=cartAction[i].childNodes[0]
            let secondCart=cartAction[i].childNodes[1]
            let childFirstCart=firstCart.childNodes[0]
            let childSecondCart1=secondCart.childNodes[0]
            let childSecondCart2=secondCart.childNodes[1]
            let grandChildSecondCart=childSecondCart2.childNodes[0]

            cartAction[i].addEventListener('mouseenter',(e)=>{
                firstCart.style.opacity="0"
                secondCart.style.opacity="1"
                secondCart.style.visibility="visible"
                secondCart.style.animation="none"
                childSecondCart2.style.width="150px"
                childSecondCart1.style.transform="translateX(15px)"
                grandChildSecondCart.style.transform="translateX(25px)"
            })

            cartAction[i].addEventListener('mouseleave',(e)=>{
                firstCart.style.opacity="1"
                secondCart.style.opacity="0"
                secondCart.style.animation="slideRight .2s cubic-bezier(0.455, 0.03, 0.515, 0.955)"
                childSecondCart2.style.width="130px"
                childSecondCart1.style.transform="translateX(0px)"
                grandChildSecondCart.style.transform="translateX(0px)"
            })
        }
    })
  return (
    <div className='product'>
      <h1>Top Products of This Week</h1>
      <div className="product-upper">
        {productsDynamic.map((product,index)=>{
            return(
                <div className="product-details">
            <div className="image-wrapper-pro">
                <img key={`${product.img1}`} src={`${imagePath(product.img1)}`} className="image" alt="normal" />
                <img  key={`${product.img2}`} src={`${imagePath(product.img2)}`} className="image-hover" alt="hover" />
                
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
                <div className="top-offer">
                    <h2 key={`${product.ad}`} className="product-ad" >{product.ad}</h2>
                </div>
            </div>
            <div className="stars">
                <h2 key={`${product.rating}`} className="rating-star" >{product.rating}</h2>
            </div>
            <a key={`${product.brand}`} href="" className="brand">{product.brand}</a>
            <a key={`${product.brandValue}`} href="" className="brand-details">{product.brandValue}</a>
            <div className="variants">
                <span className="variant"></span>
                <span className="variant black"></span>
            </div>
            <a className="carts">
                <div className="first-cart">
                    <div className="left-cart">
                        <a  href=""><Cart2/></a>
                    </div>
                    <div className="right-cart">
                        <a key={`${product.price}`} href="">${product.price}</a>
                    </div>
                </div>

                <div className="second-cart">
                    <div className="second-cart-left">
                        <a  href=""><Cart2/></a>
                    </div>
                    <div className="second-cart-right">
                        <p>Add To Cart</p>
                    </div>
                    
                </div>
                
            </a>
        </div>
            )
            
        })}
        
        
      </div>
    </div>
  )
}

export default Products
