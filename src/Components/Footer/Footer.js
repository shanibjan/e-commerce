import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram,faPinterestP } from '@fortawesome/free-brands-svg-icons'
import paypal from '../../images/paypal.png'
import visa from '../../images/visa.png'
import mc from '../../images/mc.png'
import discover from '../../images/discover.png'
import ae from '../../images/ae.png'

function Footer() {
  return (
    <div className="footer">
        <div className="upper-footer">
            <div className="info">
                <h1 className='headings' >Info</h1>
                <a href="" className="infos">About us</a>
                <a href="" className="infos">Shipping and Returns</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="info">
                <h1 className='headings' >Our Policies</h1>
                <a href="" className="infos">fAQS</a>
                <a href="" className="infos">Shipping and Returns</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="info">
                <h1 className='headings' >Orders</h1>
                <a href="" className="infos">My Account</a>
                <a href="" className="infos">View Cart</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="store">
                <h1 className='headings' >Store</h1>
                <p>2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America</p>
                <p>
                    Call us:
                    <strong className='phone' >1-23456-78901</strong> <br />
                    Mon-Sun:9.00AM-5.00PM
                </p>
            </div>
            <div className="news-letter">
                <h1 className='headings' >Subscribe to Our Newsletter!</h1>
                <div className="letter">
                    <input type="text" placeholder='Enter Your e-mail' />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>By entering your email, you agree to our Terms of Service and Privacy Policy.</p>
                <div className="follow">
                    <h1 className='headings'>Follow us:</h1>
                    <a href=""><FontAwesomeIcon icon={faFacebookF} /></a> 
                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a> 
                    <a href=""><FontAwesomeIcon icon={faPinterestP} /></a> 
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="courtesy">
                <p>© 2020 Yanka Ecommerce WordPress Theme. All Rights Reserved by</p>
                <a href="">JMS</a>
            </div>
            <ul className="gate-way">
                <li >
                    <a href=""><img src={paypal} alt="" /></a>
                    
                </li>
                <li >
                    <a href=""> <img src={visa} alt="" /></a>
                   
                </li>
                <li >
                    <a href=""><img src={mc} alt="" /></a>
                    
                </li>
                <li >
                    <a href=""><img src={discover} alt="" /></a>
                    
                </li>
                <li >
                    <a href=""><img src={ae} alt="" /></a>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer

