import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { onValue, ref, remove, set } from "firebase/database";
import { useLocation } from "react-router-dom";
import '../index.css'
function Orders() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    onValue(ref(database, "orders"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setOrders(datas);
      } else {
        setOrders([]);
      }
    });
  }, []);
  // orders.map((a)=>{
  //  a.cart.map((b)=>{
  //   console.log(b);
  //   console.log(a.date);
  //  })
  // })
  let Filtered = [];
  let date=[]
  if (location.state != null) {
    orders.map((a) => {
      
      a.cart.map((b) => {
      
        if (b.userEmail == location.state.email) {
          Filtered.push(b);
          date.push({dates:a.date,uuid:b.uuid})
        }
      });
    });
  }
  const cancelOrder=(filter)=>{
      console.log(filter);
  }
  return (
    <div>
      {location.state
        ? Filtered.map((filter) => {
            return (
                <div className="order_confirm">

              <div className="product-view-cart-2">
                <div className="left-view-cart">
                  <img className="img-order" src={filter.url} alt="" />
                </div>
                <div className="right-view-cart">
                  <div className="details-product-view-cart-2">
                    <h1 className="brand-cart">{filter.brand}</h1>
                    <h2 className="brand-value-cart">{filter.brandValue}</h2>
                    <h2 className="price-view-cart">₹ {filter.price} /-</h2>
                    <h2 className="star-rating-cart">
                      Discount on MRP : ₹ {filter.priceOffer} /-
                    </h2>
                    <h4 className="size-cart">Size :{filter.size}</h4>
                    <h4 className="qty-cart">Qty :{filter.quantity}</h4>
                    {date.map((d)=>{
                      return(
                        <h4>Ordered on:{d.uuid==filter.uuid?d.dates:null}</h4>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div onClick={()=>cancelOrder(filter)} className="proceed-to-pay-2">
              <a className="add-to-cart-text">
                Cancel Order
              </a>
            </div>
                </div>
            );
          })
        : "404 not found"}
    </div>
  );
}

export default Orders;
