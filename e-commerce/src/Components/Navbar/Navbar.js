import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import User from '../../assets/User'
import Love from '../../assets/Love'
import Cart from '../../assets/Cart'
import { faChevronDown,faStar } from '@fortawesome/free-solid-svg-icons'
// import Language from './Components/Language/Language';
import Language from '../Language/Language'
import { useState } from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    const shadowClick=()=>{
        document.querySelector('.placeSearch').style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        document.querySelector('.placeSearch').style.transition="2s cubic-bezier(0.075, 0.82, 0.165, 1)"

    }
    const[language,setLanguage]=useState("Mal","Fre")
  console.log(language);
    
  return (
    <div className='navbar' >
       
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div onClick={shadowClick} className="placeSearch">
          <input type="text" placeholder='Search...' />
          <FontAwesomeIcon icon={faSearch} />
      </div>
     <div className="cart">
        
        {/* <div  className="account">
          <ul>
            <li className='account-det' ><a href="" className="lang">Login</a></li>
            <li className='account-det' ><a href="" className="lang">Register</a></li>
          </ul>
        </div> */}
        <div className="dropdown">
          <a  href=""><User/></a>
          <ul className="dropdown-menu">
            <li  ><a className='slide' href="#"> Login</a></li>
            <Link style={{textDecoration:"none"}} to='/about'><li><a className='slide' href="">Register </a></li></Link>
          </ul>
        </div>
        <a href=""><Love/></a>
        <a  href=""><Cart/></a>
        <samp className="cart-count">0</samp>
        <Language  />
        <div className="dropdown">
          <a className='lang' href=""><p>USD</p>
          <FontAwesomeIcon icon={faChevronDown} /></a>
          
          <ul className="dropdown-menu">
            <li  ><a className='slide' href="#"> GGP</a></li>
            
            <li  ><a className='slide' href="#">USD </a></li>
          </ul>
        </div>
            
       
        </div>
    </div>
  )
}

export default Navbar
