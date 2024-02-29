import React from "react";
import "./viewProduct.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import img from "../images/collection-2.webp";
import Products from "../Components/Products/Products";
import Cart2 from "../assets/Cart2";

function ViewProduct() {
  const location = useLocation();
  console.log(location);
  const postView = JSON.parse(localStorage.getItem("post"));
  console.log(postView);
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="product-view">
        <div className="left-view">
          <img src={ postView ? postView.url : null} alt="" />
        </div>
        <div className="right-view">
          <div className="details-product-view">
            <h1>{postView ? postView.brand : null}</h1>
            <h2>{postView ? postView.brandValue : null}</h2>
            <h2 className="price-view">$  {postView ? postView.brandPrice : null}/-</h2>
            <h2 className="star-rating" >{postView ? postView.rating : null}</h2>
            <div className="product-category">
              <p className="p-category" >Categrories:</p>
              <p>{postView ? postView.category : null}</p>
            </div>
            <p className="desc-prod" >{postView ? postView.description : null}</p>
          </div>
          <div className="add-to-cart">
            <a className="cart-add" href="">
              <Cart2 />
            </a>
            <a className="add-to-cart-text" href="">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
