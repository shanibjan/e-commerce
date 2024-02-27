import React, { useEffect } from "react";
import "./Admin.css";
// import "../Components/Products/Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import prod1 from "../images/product-1.jpeg";
import prod2 from "../images/product-2.jpeg";
import Cart2 from "../assets/Cart2";
import Love from "../assets/Love";
import Compare from "../assets/Compare";
import Plus from "../assets/Plus";

function Admin() {
  const fNameParse = JSON.parse(localStorage.getItem("image"));
  console.log(fNameParse);

  //   if(images !=null){
  //     console.log("image und");
  // let adminImage=document.querySelector('.admin-image')
  // adminImage.src=localStorage.getItem("image")

  const location = useLocation();
  useEffect(() => {
    let imageWrapper = document.querySelectorAll(".admin-image-wrapper-pro");
    console.log(imageWrapper);
    for (let i = 0; i < imageWrapper.length; i++) {
      let itemsHover = imageWrapper[i].childNodes[2];
      imageWrapper[i].addEventListener("mouseenter", (e) => {
        itemsHover.style.display = "grid";
        // itemsHover.style.transition="5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      });

      imageWrapper[i].addEventListener("mouseleave", (e) => {
        itemsHover.style.display = "none";
      });
    }
    let cartAction = document.querySelectorAll(".admin-carts");
    for (let i = 0; i < cartAction.length; i++) {
      let firstCart = cartAction[i].childNodes[0];
      let secondCart = cartAction[i].childNodes[1];
      let childFirstCart = firstCart.childNodes[0];
      let childSecondCart1 = secondCart.childNodes[0];
      let childSecondCart2 = secondCart.childNodes[1];
      let grandChildSecondCart = childSecondCart2.childNodes[0];

      cartAction[i].addEventListener("mouseenter", (e) => {
        firstCart.style.opacity = "0";
        secondCart.style.opacity = "1";
        secondCart.style.visibility = "visible";
        secondCart.style.animation = "none";
        childSecondCart2.style.width = "150px";
        childSecondCart1.style.transform = "translateX(15px)";
        grandChildSecondCart.style.transform = "translateX(25px)";
      });

      cartAction[i].addEventListener("mouseleave", (e) => {
        firstCart.style.opacity = "1";
        secondCart.style.opacity = "0";
        secondCart.style.animation =
          "slideRight .2s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        childSecondCart2.style.width = "130px";
        childSecondCart1.style.transform = "translateX(0px)";
        grandChildSecondCart.style.transform = "translateX(0px)";
      });
    }
  });
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="admin-main">
        <div className="admin-left">
          <div className="admin-heading">
            <h4>Admin</h4>
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
          
          { 
          
            fNameParse ? fNameParse.map((img) => {
              return(
                <div className="admin-product-details">
            <div className="admin-image-wrapper-pro">
              <img src={img ? img.url : null} className="admin-image" alt="normal" />
              <img src={img ? img.url : null} className="admin-image-hover" alt="hover" />

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
              <div className="admin-top-offer">
                <h2 className="admin-product-ad">{img.tag}</h2>
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
                <div className="admin-left-cart">
                  <a href="">
                    <Cart2 />
                  </a>
                </div>
                <div className="admin-right-cart">
                  <a href="">$ {img ? img.brandPrice : null}</a>
                </div>
              </div>

              <div className="admin-second-cart">
                <div className="admin-second-cart-left">
                  <a href="">
                    <Cart2 />
                  </a>
                </div>
                <div className="admin-second-cart-right">
                  <p>Add To Cart</p>
                </div>
              </div>
            </a>
          </div>
              )
          }) : "No Items Added Yet...."}
          
        </div>
      </div>
    </>
  );
}

export default Admin;
