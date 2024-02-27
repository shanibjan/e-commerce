import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import User from "../../assets/User";
import Love from "../../assets/Love";
import Cart from "../../assets/Cart";
import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
// import Language from './Components/Language/Language';
import Language from "../Language/Language";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "../../Pages/Login";

function Navbar({ userName }) {
  const [userLogin, setUserLogin] = useState([]);
  const navigate=useNavigate()
  console.log(userName);
  const shadowClick = () => {
    document.querySelector(".placeSearch").style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.querySelector(".placeSearch").style.transition =
      "2s cubic-bezier(0.075, 0.82, 0.165, 1)";
  };
  const userLogOut = () => {
   setUserLogin(false)
  //  localStorage.clear()
  };
  

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div onClick={shadowClick} className="placeSearch">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="user-details-nav" >
      {<h2 className="user-name">{userName.state !=null ? userName.state.name : null}</h2>}
      </div>
      <div className="cart">
        <div className="dropdown">
          <a href="">
            <User />
          </a>
          <ul className="dropdown-menu">
            <Link style={{ textDecoration: "none" }} to="/user_login">
              <li>
                <a className="slide" href="#">
                  {userName.state !=null ? null : "Login"}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user_register">
              <li>
                <a className="slide" href="">
                  {userName.state !=null ? null : "Register"}{" "}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user_login">
              <li>
                <a className="slide" href="" onClick={userLogOut}>
                  {userName.state !=null ? "Logout" : null}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/admin"  >
              <li>
                <a className="slide" href="" >
                  {userName.state !=null ? null : "Admin"}
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <a href="">
          <Love />
        </a>
        <a href="">
          <Cart />
        </a>
        <samp className="cart-count">0</samp>
        <Language />
        <div className="dropdown">
          <a className="lang" href="">
            <p>USD</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="slide" href="#">
                {" "}
                GGP
              </a>
            </li>

            <li>
              <a className="slide" href="#">
                USD{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
