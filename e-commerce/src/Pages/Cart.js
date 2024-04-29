import React, { useEffect } from "react";
import "./Cart.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Cart2 from "../assets/Cart2";
import { useLocation, useNavigate } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart() {
  const location = useLocation();
  const nav=useNavigate()
  console.log(location);
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItems);
  // console.log(cartItems.length);
  let totalSum = [];
  let totalSumInitial = 0;
  let priceSum = [];
  let priceSumInitial = 0;
  let discountSum = [];
  console.log(discountSum);
  let discountSumInitial = 0;

  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="parent-product-view">
        <div className="product-cart-left">
          {cartItems != null
            ? cartItems.map((items,index) => {
                let all = items.priceOffer * items.quantity;
                let discount =
                  (items.price - items.priceOffer) * items.quantity;
                totalSum.push(parseInt(items.price*items.quantity));
                priceSum.push(all);
                discountSum.push(discount);

                return (
                  <div className="product-view-cart">
                    <div className="left-view-cart">
                      <img src={items.url} alt="" />
                    </div>
                    <div className="right-view-cart">
                      <div className="details-product-view-cart">
                        <h1 className="brand-cart">{items.brand}</h1>
                        <h2 className="brand-value-cart">{items.brandValue}</h2>
                        <h2 className="price-view-cart">₹ {all} /-</h2>
                        <h2 className="star-rating-cart">
                          Discount on MRP : ₹ {discount} /-
                        </h2>
                        <h4 className="size-cart">Size :{items.size}</h4>
                        <h4 className="qty-cart">Qty :{items.quantity}</h4>
                        <div className="product-category-cart">
                          <p className="p-category-cart">Categrories:</p>
                          <p>{items.category}</p>
                        </div>
                      </div>
                    </div>
                    <div  onClick={()=>{
                      cartItems.splice(index,1)
                      localStorage.setItem("cart", JSON.stringify(cartItems));
                      setTimeout(()=>{
                        window.location.reload();
                      },100)
                    }} className="cart-delete">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                  </div>
                );
              })
            : "YOUR CART IS EMPTY"}
        </div>

       { cartItems ? <div className="product-cart-right">
        {console.log(priceSum)}
          {priceSum.forEach((x) => {
            priceSumInitial = priceSumInitial + x;
          })}
          {discountSum.forEach((a) => {
            discountSumInitial = discountSumInitial + a;
            console.log(discountSumInitial);
          })}
          {totalSum.forEach((b) => {
            totalSumInitial = totalSumInitial + b;
            console.log(typeof totalSumInitial);
          })}
          <div className="payable">
            <div className="totalamount">
              <span>Total MRP</span>
              <span>₹ {totalSumInitial ? totalSumInitial : null}</span>
            </div>
            <div className="totalamount">
              <span>Discount on MRP</span>
              <span> - ₹ {discountSumInitial ? discountSumInitial : null}</span>
            </div>
            <div className="totalamount">
              <span>Coupon Discount</span>
              <span>
                <a className="coupon" href="">
                  Apply coupon
                </a>
              </span>
            </div>
            <div className="totalamount">
              <span>Platform Fee</span>
              <span>
                <a className="coupon">FREE</a>
              </span>
            </div>
            <div className="totalamount">
              <span>Shipping Fee</span>
              <span>
                <a className="coupon">FREE</a>
              </span>
            </div>
          </div>
          <div className="payable-amount">
            <div className="total-amount">
              <span>Total Amount</span>
              <span>₹ {priceSumInitial ? priceSumInitial : null}</span>
            </div>
            <div className="proceed-to-pay">
              <a className="add-to-cart-text" href="">
                PROCEED TO PAY
              </a>
            </div>
          </div>
        </div> : null}
      </div>
    </>
  );
}

export default Cart;
