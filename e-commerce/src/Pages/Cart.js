import React from "react";
import "./Cart.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Cart2 from "../assets/Cart2";
import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  console.log(location);
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItems);
  // console.log(cartItems.length);

  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="parent-product-view">
        {cartItems !=null
          ? cartItems.map((items) => {
              return (
                <div className="product-view-cart">
                  <div className="left-view-cart">
                    <img src={items.url} alt="" />
                  </div>
                  <div className="right-view-cart">
                    <div className="details-product-view-cart">
                      <h1 className="brand-cart">{items.brand}</h1>
                      <h2 className="brand-value-cart">
                        {items.brandValue}
                      </h2>
                      <h2 className="price-view-cart">$ {items.price}/-</h2>
                      <h2 className="star-rating-cart">{items.rating}</h2>
                      <h4 className="size-cart" >Size :{items.size}</h4>
                      <h4 className="qty-cart" >Qty :{items.quantity}</h4>
                      <div className="product-category-cart">
                        <p className="p-category-cart">Categrories:</p>
                        <p>{items.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "YOUR CART IS EMPTY"}
      </div>
    </>
  );
}

export default Cart;
