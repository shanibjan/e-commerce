import React, { useEffect, useState } from 'react'
import '../index.css'
import Confetti from 'react-confetti';

function Order() {
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
  },4500)
     
  },[])
  return (
    <div className='order-head' >
      <div className='order-sub' >

      <h1 className='order-h1'  >Your Order is Confirmed</h1>
      <h2 className='order-h2' >Your Payment Id : 85966</h2>
      <button className='order-button' >View Orders</button>
      </div>
     {loading ?  <Confetti /> :null}
     
    </div>
  )
}

export default Order
