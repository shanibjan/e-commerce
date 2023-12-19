import React from 'react'
import './Theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding,faTruck ,faMale,faList,faFemale,faUndo,faTimes,faBarChart,faQuestion,faEnvelope,faWrench,faCog} from '@fortawesome/free-solid-svg-icons'
import product1 from '../../images/product-1.jpeg'
import product2 from '../../images/product-2.jpeg'
import product3 from '../../images/product-3.jpeg'
import product4 from '../../images/product-4.jpeg'
import product5 from '../../images/product-5.jpeg'
import product6 from '../../images/product-6.jpeg'
import { useEffect } from 'react'


function Theme() {
    const yankaEnter=()=>{
        let yanka = document.querySelector('.yanka-head')
        let yankAfter =window.getComputedStyle(yanka,'::after')
        yanka.style.setProperty('--afterBack','scaleX(1)')
    }
    const yankaLeave=()=>{
        let yanka = document.querySelector('.yanka-head')
        let yankAfter =window.getComputedStyle(yanka,'::after')
        yanka.style.setProperty('--afterBack','scaleX(0)')
    }
    useEffect(()=>{
        let nodeLookSub=document.querySelectorAll('.look-sub')
        // console.log(nodeLookSub);
        for(let i=0;i<nodeLookSub.length;i++){
            let nodeLookBase=nodeLookSub[i].childNodes[0]
            // console.log(nodeLookBase);
            let nodeLookHead=nodeLookBase.childNodes[0]
            let box2 = window.getComputedStyle(nodeLookHead, '::after')
            console.log(nodeLookHead);


            nodeLookSub[i].addEventListener('mouseenter',(e)=>{
                nodeLookBase.style.backgroundSize="110%"
                nodeLookHead.style.setProperty('--afterBack', 'scaleX(1)')
            })

            nodeLookSub[i].addEventListener('mouseleave',(e)=>{
                nodeLookBase.style.backgroundSize="100%"
                nodeLookHead.style.setProperty('--afterBack', 'scaleX(0)')
            })
            
        }
    })
    
    
  return (

    <div className='theme' >
      <div className="categories">
        <div className="heading">
        <div className="font-awesome">
                    <FontAwesomeIcon icon={faList}/>
                </div>
            <h4>CATEGORIES</h4>
        </div>
        <ul className='category-list' >
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faFemale}/>
                </div>
                <p>WOMENS</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faMale}/>
                </div>
                <p>MENS</p>
                </a>
            </li>
            <li><a href="" className="setting">
                <div className="font-awesom">
                    <FontAwesomeIcon icon={faBuilding}/>
                </div>
                
                <p>ABOUT US</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <p>SHIPPING</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faUndo}/>
                </div>
                <p className='parag' >RETURN</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <p>PAGE 404</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faBarChart}/>
                </div>
                <p>SIZING GUIDE</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faQuestion}/>
                </div>
                <p>FAQS</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <p>CONTACT US</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faWrench}/>
                </div>
                <p>MAINTENCE</p>
                </a>
            </li>
            <li><a href="" className="setting">
            <div className="font-awesom">
                    <FontAwesomeIcon icon={faCog}/>
                </div>
                <p>DOCUMENTATION</p>
                </a>
            </li>
        </ul>
      </div>
      <div className="details">
        <div className="portfolio">
            <ul  className='portfolio-list' >
                <li className='port-list-main' ><a href="" className="port-nav">HOME</a></li>
                <div className="dropdown-list">
                        <li className='port-list '  >
                            <a href="" className="port-nav">SHOP</a>
                            <ul class="dropdown-list-shop">
                                <div className="shop">
                                    <div className="shop-sub">
                                        <li  ><a className='slide-list bold' href="#"> Listing Styles</a></li>
                                        <li  ><a className='slide-list' href="#">Collections Type 1 </a></li>
                                        <li  ><a className='slide-list' href="#">Collections Type 2</a></li>
                                        <li  ><a className='slide-list' href="#"> With Left Sidebar</a></li>
                                        <li  ><a className='slide-list' href="#">With Right Sidebar</a></li>
                                        <li  ><a className='slide-list' href="#">Without Sidebar </a></li>
                                        <li  ><a className='slide-list' href="#">Without Sidebar Full Width</a></li>
                                        <li  ><a className='slide-list' href="#"> Without Sidebar and Filters</a></li>
                                        <li  ><a className='slide-list' href="#"> In One Row</a></li>
                                    </div>
                                    <div className="shop-sub">
                                        <li  ><a className='slide-list bold' href="#">Product Page Style</a></li>
                                        <li  ><a className='slide-list' href="#"> Product 1</a></li>
                                        <li  ><a className='slide-list' href="#"> Product 2</a></li>
                                        <li  ><a className='slide-list' href="#"> Product 3</a></li>
                                        <li  ><a className='slide-list' href="#">Product 4 </a></li>
                                        <li  ><a className='slide-list' href="#">Product Layout </a></li>
                                        <li  ><a className='slide-list' href="#"> Tabs Full Width -- Example 1</a></li>
                                        <li  ><a className='slide-list' href="#"> Tabs Full Width -- Example 2</a></li>
                                        <li  ><a className='slide-list' href="#"> Tabs Full Width -- Example 3</a></li>
                                        <li  ><a className='slide-list' href="#"> Three Columns</a></li>
                                        <li  ><a className='slide-list' href="#"> Three Columns Reverse</a></li>
                                    </div>
                                    <div className="shop-sub">
                                        <li  ><a className='slide-list bold' href="#">Product Page Types</a></li>
                                        <li  ><a className='slide-list' href="#"> Standard Product </a></li>
                                        <li  ><a className='slide-list' href="#"> Variable Product </a></li>
                                        <li  ><a className='slide-list' href="#"> Grouped Product </a></li>
                                        <li  ><a className='slide-list' href="#">New Product  </a></li>
                                        <li  ><a className='slide-list' href="#">Sale Product </a></li>
                                        <li  ><a className='slide-list' href="#"> Sold Out Product</a></li>
                                        <li  ><a className='slide-list' href="#"> Images by Variant</a></li>
                                    </div>
                                    <div className="shop-sub">
                                        <li  ><a className='slide-list bold' href="#">Product Page Types</a></li>
                                        <li  ><a className='slide-list' href="#"> Cart </a></li>
                                        <li  ><a className='slide-list' href="#"> Account </a></li>
                                        <li  ><a className='slide-list' href="#"> Register </a></li>
                                    </div>
                                </div>
                                
                                
                                
                            </ul>
                        </li>
                    </div>

                    <div className="dropdown-list">
                        <li className='port-list '  >
                            <a href="" className="port-nav">PAGES</a>
                            <ul class="dropdown-list-menu">
                                <li  ><a className='slide-list' href="#"> About Us</a></li>
                                <li  ><a className='slide-list' href="#">Shipping and Returns </a></li>
                                <li  ><a className='slide-list' href="#">Page 404</a></li>
                                <li  ><a className='slide-list' href="#"> Sizing Guide</a></li>
                                <li  ><a className='slide-list' href="#"> FAQs</a></li>
                                <li  ><a className='slide-list' href="#"> Contact Us</a></li>
                            </ul>
                        </li>
                    </div>
                    
                    <div className="dropdown-list">
                        <li className='port-list '  >
                            <a href="" className="port-nav">BLOG</a>
                            <ul class="dropdown-list-menu">
                                <li  ><a className='slide-list bold' href="#"> Blog Style</a></li>
                                <li  ><a className='slide-list' href="#">Standard without Sidebars </a></li>
                                <li  ><a className='slide-list' href="#">Standard with Left Sidebars</a></li>
                                <li  ><a className='slide-list' href="#"> Standard with Right Sidebars</a></li>
                                <li  ><a className='slide-list' href="#"> Two Columns</a></li>
                                <li  ><a className='slide-list' href="#"> Three Columns</a></li>
                                <li  ><a className='slide-list bold' href="#">Post Type</a></li>
                                <li  ><a className='slide-list' href="#"> Standard</a></li>
                                <li  ><a className='slide-list' href="#"> Video</a></li>
                                <li  ><a className='slide-list' href="#"> Gallery</a></li>
                            </ul>
                        </li>
                    </div>

                    <div className="dropdown-list">
                        <li className='port-list '  >
                            <a href="" className="port-nav">PORTFOLIO</a>
                            <ul class="dropdown-list-menu">
                                        <li  ><a className='slide-list bold' href="#"> Boxed Width</a></li>
                                        <li  ><a className='slide-list' href="#">Two Columns </a></li>
                                        <li  ><a className='slide-list' href="#">Three Columns</a></li>
                                        <li  ><a className='slide-list' href="#"> Four Columns</a></li>
                                        <li  ><a className='slide-list bold' href="#">Full Width</a></li>
                                        <li  ><a className='slide-list' href="#"> Three Columns</a></li>
                                        <li  ><a className='slide-list' href="#"> Four Columns</a></li>
                                        <li  ><a className='slide-list' href="#"> Five Columns</a></li>
                                
                                
                                
                            </ul>
                        </li>
                    </div>
                    <div className="dropdown-list">
                        <li className='port-list '  >
                            <a href="" className="port-nav">WOMEN'S</a>
                            <div className="women-list">
                                <ul class="dropdown-list-women">
                                    <div className="women-top">
                                        <div className="women-pack">
                                            <div className="women-cloth">
                                                <li ><a className='slide-list bold' href="#"> Clothing</a></li>
                                                <li  ><a className='slide-list' href="#">Coats</a></li>
                                                <li  ><a className='slide-list' href="#">Jackets</a></li>
                                                <li  ><a className='slide-list' href="#"> Blazers</a></li>
                                                <li  ><a className='slide-list' href="#">Trousers</a></li>
                                                <li  ><a className='slide-list' href="#"> Jeans</a></li>
                                                <li  ><a className='slide-list' href="#"> Knitwear</a></li>
                                                <li  ><a className='slide-list' href="#"> Sweetshirts</a></li> 
                                                <li  ><a className='slide-list' href="#"> T-Shirt</a></li> 
                                            </div>
                                            <div className="women-cloth">
                                                <li ><a className='slide-list bold' href="#"> Shoes</a></li>
                                                <li  ><a className='slide-list' href="#">Trainers</a></li>
                                                <li  ><a className='slide-list' href="#">Boots</a></li>
                                                <li  ><a className='slide-list' href="#"> Heels</a></li>
                                                <li  ><a className='slide-list' href="#">Flats</a></li>
                                                <li  ><a className='slide-list' href="#"> Platforms</a></li> 
                                            </div>
                                            <div className="women-cloth">
                                                <li ><a className='slide-list bold' href="#"> Accessories</a></li>
                                                <li  ><a className='slide-list' href="#">Bags</a></li>
                                                <li  ><a className='slide-list' href="#">Bootpacks</a></li>
                                                <li  ><a className='slide-list' href="#"> Belts</a></li>
                                                <li  ><a className='slide-list' href="#">Jwellery</a></li>
                                                <li  ><a className='slide-list' href="#"> Hots & Beanie</a></li> 
                                                <li  ><a className='slide-list' href="#"> Purses</a></li> 
                                            </div>
                                                
                                        </div>
                                        <div className="women-other">
                                            <a className='slide-list bold' href="#"> Other Pages</a>
                                            <div className="women-products">
                                                    <div className="women-image">
                                                        <div class="image-wrapper">
                                                            <img src={product1} class="image" alt="normal" />
                                                            <img src={product2} class="image-hover" alt="hover" />
                                                        </div>
                                                        <a href="" className="slide-list">Belt Bag with Chain</a>
                                                        <p className="product-price">$215.00</p>
                                                    </div>
                                                    <div className="women-image">
                                                        <div class="image-wrapper">
                                                            <img src={product3} class="image" alt="normal" />
                                                            <img src={product4} class="image-hover" alt="hover" />
                                                        </div>
                                                        <a href="" className="slide-list">Belt Bag with Chain</a>
                                                        <p className="product-price">$215.00</p>
                                                    </div>
                                                    <div className="women-image">
                                                        <div class="image-wrapper">
                                                            <img src={product5} class="image" alt="normal" />
                                                            <img src={product6} class="image-hover" alt="hover" />
                                                        </div>
                                                        <a href="" className="slide-list">Belt Bag with Chain</a>
                                                        <p className="product-price">$215.00</p>
                                                    </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                
                                    <div className="look">
                                            <a  className="look-sub">
                                                <div className="look-sub-1">
                                                    <h2 className='look-head' >Complete Your Look</h2>
                                                    <p>The worlds most stylish women are buying right now</p>
                                                </div>
                                               
                                            </a>
                                            <a  className="look-sub">
                                                <div className="look-sub-2">
                                                    <h2 className='look-head' >Complete Your Look</h2>
                                                    <p>The worlds most stylish women are buying right now</p>
                                                </div>
                                            </a>
                                    </div>
                                            
                                </ul>
                            </div>
                            
                        </li>
                    </div>
                <li  className='port-list' ><a href="" className="port-nav">MEN'S</a></li>
                <li  className='port-list' ><a href="" className="port-nav">RTL</a></li>
            </ul>
            <div className="buy">
                <a href="" className="buy-theme">BUY THEME!</a>
            </div>
        </div>
        <div className="products">
            <div className="first-product">
                <p className="first-one">NEED-IT-NOW</p>
                <h2 className="second-one">Must-haves <br />for the Season</h2>
                <p>Here to bring your life stylle to next level</p>
            </div>
            <a onMouseOver={yankaEnter} onMouseLeave={yankaLeave} className="second-product">
                <h2 className='yanka-head' >YANKA</h2>
                <h3>Created to grow </h3>
                <h3>Your Sale</h3>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Theme
