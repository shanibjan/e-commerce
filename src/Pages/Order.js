import React, { useEffect, useState } from "react";
import "../index.css";
import Confetti from "react-confetti";
import { database } from "../firebase";
import { onValue, ref, remove, set } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Order() {
  const location = useLocation();
  const nav=useNavigate()
  // const[loading,setLoading]=useState(true)
  // const[orders,setOrders]=useState([])

  //   setTimeout(()=>{
  //     setLoading(false)
  // },4500)

 const orders=()=>{
  nav('/orders',{ state: { name: location.state.name ,email:location.state.email} })
 }
  return (
    <>
      {location.state ? (
        <div className="order-head">
          <motion.div initial={{x:-600,}} animate={{x:0,fontSize: 50}} transition={{delay:.02,type:'spring',stiffness:100}} className="order-sub">
            <h1 className="order-h1">Your Order is Confirmed</h1>
            <div className="order-shopping">

            <button className="order-button" onClick={orders} >View Orders</button>
            <button className="order-button" onClick={()=>nav('/',{ state: { name: location.state.name ,email:location.state.email} })} >Continue Shopping</button>
            </div>
          </motion.div>
          <Confetti />
        </div>
      ) : (
        "404 Not Found"
      )}
    </>
  );
}

export default Order;
