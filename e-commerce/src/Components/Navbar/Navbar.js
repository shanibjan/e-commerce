import React, { useEffect, useRef } from "react";
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
import { Link,  useNavigate } from "react-router-dom";
import Login from "../../Pages/Login";

function Navbar({ userName }) {
  const [userLogin, setUserLogin] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(userName);
  const navigate = useNavigate();
  const searchitems = useRef();
  console.log(search);
  useEffect(() => {
    const searchP = JSON.parse(localStorage.getItem("search"));
    if (searchP) setSearch(searchP);
  }, []);
  const shadowClick = () => {
    let searchPro = searchitems.current.value;
    const prods = JSON.parse(localStorage.getItem("image"));
    console.log(prods);

    if(prods !=null){
      const filterSearch = prods.filter((val) => {
        return val.brand == searchPro || val.category == searchPro;
      })
      if (filterSearch) {
        setSearch(filterSearch);
      }
    }else{
      <h1>no</h1>
    }
   

    console.log(search);
    setTimeout(()=>{
      if(userName.state != null ){
        navigate('/search_products',{
          state: { name: userName.state.name },
        })
      }else{
        navigate('/search_products')
        
      }
      
    },100)
    

    document.querySelector(".placeSearch").style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.querySelector(".placeSearch").style.transition =
      "2s cubic-bezier(0.075, 0.82, 0.165, 1)";
  };

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);

  

  const cartItems = JSON.parse(localStorage.getItem("cart"));
  const userLogOut = () => {
    setUserLogin(false);
    localStorage.removeItem("cart");
    //  localStorage.clear()
  };
  const cartMainClick = () => {
    if (userName.state != null) {
      navigate("/cart", {
        state: { name: userName.state.name },
      });
    } else {
      window.alert("Please Login");
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to='/'>
         <img src={logo} alt="" />
        </Link>
        
      </div>
      <div className="placeSearch">
        <input ref={searchitems} type="text" placeholder="Search..." />
        <div onClick={shadowClick} className="search-lense">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="user-details-nav">
        {
          <h2 className="user-name">
            {userName.state != null ? userName.state.name : null}
          </h2>
        }
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
                  {userName.state != null ? null : "Login"}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user_register">
              <li>
                <a className="slide" href="">
                  {userName.state != null ? null : "Register"}{" "}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user_login">
              <li>
                <a className="slide" href="" onClick={userLogOut}>
                  {userName.state != null ? "Logout" : null}
                </a>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/admin-login">
              <li>
                <a className="slide" href="">
                  {userName.state != null ? null : "Admin login"}
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <a href="">
          <Love />
        </a>
        <a onClick={cartMainClick} href="">
          <Cart />
        </a>
        <samp className="cart-count">
          {userName.state != null && cartItems ? cartItems.length : "0"}
        </samp>
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
