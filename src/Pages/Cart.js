import React, { useEffect, useState } from "react";
import "./Cart.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Cart2 from "../assets/Cart2";
import { useLocation, useNavigate } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { database } from "../firebase";
import { onValue, ref, remove, set,update } from "firebase/database";
import { uid } from "uid";
// import { getDatabase, ref, set, serverTimestamp } from "firebase/database";

function Cart() {
  const location = useLocation();
  console.log(location);
  const[paymentId,setPaymentId]=useState()
  const[paymentMethod,setPaymentMethod]=useState()
  console.log(paymentMethod);
  const nav=useNavigate()
 const[qty,setQty]=useState()
 const[qtyi,setQtyi]=useState()
 console.log(qty);
  const [cart,setCart]=useState([])
  // console.log(cartItems.length);
  let totalSum = [];
  let totalSumInitial = 0;
  let priceSum = [];
  let priceSumInitial = 0;
  let discountSum = [];
  let discountSumInitial = 0;
  useEffect(() => {
    onValue(ref(database, "cart"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setCart(datas);
       
      }else{
        setCart([])
      }
    });
  }, []);

  const cancel = (items) => {
    console.log(items.uuid);
    remove(ref(database, "cart" + `/${items.uuid}`));
  };

  const newCart=[]
  cart.map((f)=>{
    if(location.state.email != null){

      if(f.userEmail==location.state.email){
        f.date=new Date().toDateString()
        console.log(f.date);
        newCart.push(f)
       
      }
    }
  })
  
  const pay=()=>{
   if(paymentMethod=='COD'){
    const uuid=uid()
      // set(ref(database, "orders" + `/${uuid}`),[...newCart],{
      //   date: new Date().toISOString()
      // });
     set(ref(database, `orders/${uuid}`), {
        cart: newCart,
        date:new Date().toDateString()
      });
      nav('/order',{ state: { name: location.state.name ,email:location.state.email} })
   }else if(paymentMethod=='online'){
    const options = {
      key: 'rzp_test_VYT3qiUFj68Unw',
      key_secret: 'UUu8gOXV8YOdqIS2gYtQCTOv',
      amount: priceSumInitial * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
     
      handler: (response) => {
        setPaymentId(response.razorpay_payment_id)
        // You can also verify the payment on the server-side
        // 5559 4265 3785 2759
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Corporate Office',
      },
      theme: {
        color: '#48CAB2',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
   }else{
    let sizeP = document.querySelector(".size-product");
        sizeP.style.boxShadow = "rgb(255 33 4 / 98%) 0px 0px 0px 1px";
        sizeP.style.transition = "1s cubic-bezier(0.075, 0.82, 0.165, 1)";
        sizeP.style.animation =
          "shake .5s 3.4 cubic-bezier(0.455, 0.03, 0.515, 0.955)";
   }
   
    

    
  }
  useEffect(()=>{
    if(paymentId){
      const uuid=uid()
      set(ref(database, `orders/${uuid}`), {
        cart: newCart,
        date: new Date().toISOString() 
      });
      nav('/order',{ state: { name: location.state.name ,email:location.state.email} })
    }else{
      console.log('sam');
    }
  },[pay])
const changeQ=(items,e)=>{
  
  
  update(ref(database,'cart'+ `/${items.uuid}`),{
    url: items.url,
        brand: items.brand,
        brandValue: items.brandValue,
        rating: items.rating,
        price: items.price,
        priceOffer: items.priceOffer,
        category: items.category,
        size: items.size,
        quantity: e.target.value,
        userEmail:location.state.email,
        overviewUuid:items.overviewUuid,
    uuid:items.uuid
  })
}
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="parent-product-view">
        <div className="product-cart-left">
          {newCart != null
            ? newCart.map((items,index) => {
             
              
                let all =[]
                let discount =[]
                all.push(items.priceOffer * items.quantity)
                  discount.push( (items.price - items.priceOffer) * items.quantity)
                  totalSum.push(parseInt(items.price*items.quantity));
                // if(qty && qtyi==items.uuid){
                //   all.push(items.priceOffer * qty)
                //   discount.push( (items.price - items.priceOffer) * qty)
                //   totalSum.push(parseInt(items.price*qty));
                  
                // }else if(qty && qtyi!=items.uuid){
                //   items.quantity=qty
                  
                  
                  
                // }else{
                //   all.push(items.priceOffer * items.quantity)
                //   discount.push( (items.price - items.priceOffer) * items.quantity)
                //   totalSum.push(parseInt(items.price*items.quantity));
                // }
                
               
                
               
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
                        <h4 className="qty-cart">Qty :</h4>
                        <select name="" id="" onChange={(e)=>changeQ(items,e) }  > 
                          <option value="">{items.quantity}</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                        <div className="product-category-cart">
                          <p className="p-category-cart">Categrories:</p>
                          <p>{items.category}</p>
                        </div>
                      </div>
                    </div>
                    <div  onClick={()=>{
                       cancel(items);
                      // cartItems.splice(index,1)
                      // localStorage.setItem("cart", JSON.stringify(cartItems));
                      // setTimeout(()=>{
                      //   window.location.reload();
                      // },100)
                    }} className="cart-delete">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                  </div>
                );
              })
            : "YOUR CART IS EMPTY"}
        </div>

       { newCart.length !=0 ? <div className="product-cart-right">
        
          {priceSum.map((x) => {
           let y=parseInt(x)
          
            priceSumInitial += y
           
          })}
          {discountSum.forEach((a) => {
           let y=parseInt(a)
          
           discountSumInitial += y
           
          })}
          {totalSum.forEach((b) => {
           let y=parseInt(b)
          
           totalSumInitial += y
           
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
            <div className="totalamount">
              <span>Payment Method</span>
              <select className="size-product" name="" id="" onChange={(e)=>setPaymentMethod(e.target.value)}>
              <option value="">Select Payment</option>
                <option value="COD">Cash On Delivery</option>
                <option value="online">Online Payment</option>
              </select>
            </div>
          </div>
          <div className="payable-amount">
            <div className="total-amount">
              <span>Total Amount</span>
              <span>₹ {priceSumInitial ? priceSumInitial : null}</span>
            </div>
            <div className="proceed-to-pay">
              <a className="add-to-cart-text" onClick={pay}>
                PROCEED TO PAY
              </a>
            </div>
          </div>
        </div> : "Cart is empty"}
      </div>
    </>
  );
}

export default Cart;
