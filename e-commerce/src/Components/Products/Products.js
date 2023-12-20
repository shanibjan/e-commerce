import React from 'react'
import './Products.css'
import product1 from '../../images/product-1.jpeg'
import product2 from '../../images/product-2.jpeg'
import { faStar,faCodeCompare,faSearchPlus,faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart2 from '../../assets/Cart2'
import Love from '../../assets/Love'
import Compare from '../../assets/Compare'
import Plus from '../../assets/Plus'
import { useEffect } from 'react'

function Products() {
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
                <div className="top-offer">
                    <h2>TOP</h2>
                </div>
            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$290.00</a>
                    </div>
                </div>

                <a className="second-cart">
                    <a className="second-cart-left">
                        <a  href=""><Cart2/></a>
                    </a>
                    <a className="second-cart-right">
                        <p>Add To Cart</p>
                    </a>
                </a>
                
            </a>
        </div>
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>

            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
                <div className="top-offer red-offer">
                    <h2>SALE-21%</h2>
                </div>
            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
                <div className="top-offer">
                    <h2>FEATURED</h2>
                </div>

            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
                <div className="top-offer">
                    <h2>NEW</h2>
                </div>

            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
        <div className="product-details">
            <div class="image-wrapper-pro">
                <img src={product1} class="image" alt="normal" />
                <img src={product2} class="image-hover" alt="hover" />
                <div className="items-hover">
                    <a href=""><Love/></a>
                    <a href=""><Compare/></a>
                    <a href=""><Plus/></a>
                </div>
            </div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <a href="" className="brand">LACOSTE</a>
            <a href="" className="brand-details">Push up low rise jeans</a>
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
                        <a href="">$270.00-$290.00</a>
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
      </div>
    </div>
  )
}

export default Products
