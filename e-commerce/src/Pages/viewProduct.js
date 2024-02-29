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
          <img src={postView.url} alt="" />
        </div>
        <div className="right-view">
          <div className="details-product-view">
            <h1>{postView.brand}</h1>
            <h2>{postView.brandValue}</h2>
            <h2 className="price-view">$  {postView.brandPrice}/-</h2>
            <h2 className="star-rating" >{postView.rating}</h2>
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
