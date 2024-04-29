import React, { useContext, useEffect, useState } from "react";
import "./Admin.css";
// import "../Components/Products/Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prod1 from "../images/product-1.jpeg";
import prod2 from "../images/product-2.jpeg";
import Cart2 from "../assets/Cart2";
import Love from "../assets/Love"; 
import Compare from "../assets/Compare";
import Plus from "../assets/Plus";
import User from "../assets/User";
import AdminLogo from "../assets/AdminLogo";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Admin() {
  const nav=useNavigate()
  const fNameParse = JSON.parse(localStorage.getItem("image"));
  // console.log(fNameParse);
  const location = useLocation();

  // console.log(location);

  return (
    <>
      <Header />
      
      {location.state != null ? (
        <div className="admin-main">
          <div className="admin-left">
            <div className="admin-heading">
              <h4>Admin</h4>
              <div className="admin-dropdown">
                <a href="">
                  <AdminLogo />
                </a>
                <ul className="admin-dropdown-menu">
                  <Link style={{ textDecoration: "none" }} to="/">
                    <li>
                      <a className="slide" href="#">
                        Logout
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <ul className="admin-ul">
              <li className="admin-li">
                <a href="" className="admin-setting">
                  <p>Products</p>
                </a>
                <Link to="/create-product">
                  <a href="">
                    <div className="font-awesome">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>SHIPPING</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p className="parag">RETURN</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>PAGE 404</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>SIZING GUIDE</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>FAQS</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>CONTACT US</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>MAINTENCE</p>
                </a>
              </li>
              <li>
                <a href="" className="admin-setting">
                  <p>DOCUMENTATION</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="admin-right">
            {fNameParse
              ? fNameParse.map((img,index) => {
                  return (
                    <div className="admin-product-details">
                      <div className="admin-image-wrapper-pro">
                        <img
                          src={img ? img.url1 : null}
                          className="admin-image"
                          alt="normal"
                        />
                        <img
                          src={img ? img.url2 : null}
                          className="admin-image-hover"
                          alt="hover"
                        />

                        <div className="admin-items-hover">
                          <a href="">
                            <Love />
                          </a>
                          <a href="">
                            <Compare />
                          </a>
                          <a href="">
                            <Plus />
                          </a>
                        </div>
                        
                      </div>
                      <div className="admin-stars">
                        <h2 className="admin-rating-star">{img.rating}</h2>
                      </div>
                      <a href="" className="admin-brand">
                        {img ? img.brand : null}
                      </a>
                      <a href="" className="admin-brand-details">
                        {img ? img.brandValue : null}
                      </a>
                      <div className="admin-variants">
                        <span className="admin-variant"></span>
                        <span className="admin-variant black"></span>
                      </div>
                      <a className="admin-carts">
                        <div className="admin-first-cart">
                          <div className="admin-right-cart">
                            <a href="">₹ {img ? img.brandPriceOffer : null}</a>
                          </div>
                          <a className="actual-price" href="">
                            ₹ {img ? img.brandPrice : null}
                          </a>
                        </div>
                      </a>
                      <div  onClick={()=>{
                      fNameParse.splice(index,1)
                      localStorage.setItem("image", JSON.stringify(fNameParse));
                      nav('/admin', {
                        state: { name: location.state.name },
                      })
                    }} className="cart-delete">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                    </div>
                  );
                })
              : "No Items Added Yet...."}
          </div>
        </div>
      ) : (
        "ERROR 404"
      )}
    </>
  );
}

export default Admin;
