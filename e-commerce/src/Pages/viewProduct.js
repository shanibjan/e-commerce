import React, { useEffect, useState } from "react";
import "./viewProduct.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../images/collection-2.webp";
import Products from "../Components/Products/Products";
import Cart2 from "../assets/Cart2";

function ViewProduct() {
  const[smallImage,setSmallImage]=useState()
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState();
  const [qty, setQty] = useState(["1"]);
  const location = useLocation();
  const nav = useNavigate();

  // console.log(location.state.name);
  const postView = JSON.parse(localStorage.getItem("post"));
  console.log(postView);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) setCart(cartItems);
  }, []);
  // console.log(smallImage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  function CartClick(e) {
    e.preventDefault()
    if (location.state != null) {
      setCart((img2) => {
        return [
          ...img2,
          {
            url: postView.url1,
            tag: postView.tag,
            brand: postView.brand,
            brandValue: postView.brandValue,
            rating: postView.rating,
            price: postView.brandPrice,
            category: postView.category,
            size: size,
            quantity: qty,
          },
        ];
      });

      window.alert("Item added to cart");
    } else {
      window.alert("Please Login");
      nav("/user_login");
    }
  }
  const ab=()=>{
   setSmallImage(postView.url1)
  }
  const bc=()=>{
    setSmallImage(postView.url2)
   }
   const cd=()=>{
    setSmallImage(postView.url3)
   }
   const de=()=>{
    setSmallImage(postView.url4)
   }
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="product-view">
        <div className="left-view">
          <div className="left-small">
            <img onMouseOver={ab} src={postView ? postView.url1 : null} alt="" />
            <img onMouseOver={bc} src={postView ? postView.url2 : null} alt="" />
            <img onMouseOver={cd} src={postView ? postView.url3 : null} alt="" />
            <img onMouseOver={de} src={postView ? postView.url4 : null} alt="" />
          </div>
          <img className="image-preview" src={smallImage ? smallImage : postView.url1} alt="" />
        </div>
        <div className="right-view">
          <div className="details-product-view">
            <h1>{postView ? postView.brand : null}</h1>
            <h2>{postView ? postView.brandValue : null}</h2>
            <h2 className="price-view">
              $ {postView ? postView.brandPrice : null}/-
            </h2>
            <h2 className="star-rating">{postView ? postView.rating : null}</h2>
            <div className="product-category">
              <p className="p-category">Categrories:</p>
              <p>{postView ? postView.category : null}</p>
            </div>
            <p className="desc-prod">
              {postView ? postView.description : null}
            </p>
            <label htmlFor="">Size :</label>
            <select
              onChange={(e) => {
                setSize(e.target[e.target.selectedIndex].text);
              }}
              className="size-product"
              name="size"
              id="sizes"
            >
              <option value="1">Select Your Size</option>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
              <option value="4">XL</option>
              <option value="5">XXL</option>
            </select>
            <br />
            <label htmlFor="">Qty :</label>
            <select
              onChange={(e) => {
                setQty(e.target[e.target.selectedIndex].text);
              }}
              className="size-product"
              name="size"
              id="sizes"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1">6</option>
              <option value="2">7</option>
              <option value="3">8</option>
              <option value="4">9</option>
              <option value="5">10</option>
            </select>
          </div>
          <div onClick={CartClick} className="add-to-cart">
            <a className="cart-add" href="">
              <Cart2 />
            </a>
            <a className="add-to-cart-text" href="">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("image");
        }}
      >
        kk
      </button>
    </>
  );
}

export default ViewProduct;
