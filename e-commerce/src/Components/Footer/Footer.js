import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram, faInstagramSquare, faPinterestP } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
        <div className="upper-footer">
            <div className="info">
                <h1>Info</h1>
                <a href="" className="infos">About us</a>
                <a href="" className="infos">Shipping and Returns</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="policy">
                <h1>Our Policies</h1>
                <a href="" className="infos">fAQS</a>
                <a href="" className="infos">Shipping and Returns</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="order">
                <h1>Orders</h1>
                <a href="" className="infos">My Account</a>
                <a href="" className="infos">View Cart</a>
                <a href="" className="infos">Contact Us</a>
                <a href="" className="infos">404 Page</a>
                <a href="" className="infos">Maintenanace</a>
            </div>
            <div className="store">
                <h1>Store</h1>
                <p>2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America</p>
                <p>
                    Call us:
                    <strong>1-23456-78901</strong> <br />
                    Mon-Sun:9.00AM-5.00PM
                </p>
            </div>
            <div className="news-letter">
                <h1>Subscribe to Our Newsletter!</h1>
                <div className="letter">
                    <input type="text" placeholder='Enter Your e-mail' />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>By entering your email, you agree to our Terms of Service and Privacy Policy.</p>
                <div className="follow">
                    <h1>Follow us:</h1>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faPinterestP} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

