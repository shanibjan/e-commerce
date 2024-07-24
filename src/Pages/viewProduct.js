import React, { useEffect, useState } from "react";
import "./viewProduct.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../images/collection-2.webp";
import Products from "../Components/Products/Products";
import Cart2 from "../assets/Cart2";
import { database } from "../firebase";
import { onValue, ref, remove, set } from "firebase/database";
import { uid } from "uid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ViewProduct() {
  //   var _lsTotal = 0,
  //   _xLen, _x;
  // for (_x in localStorage) {
  //   if (!localStorage.hasOwnProperty(_x)) {
  //       continue;
  //   }
  //   _xLen = ((localStorage[_x].length + _x.length) * 2);
  //   _lsTotal += _xLen;
  //   console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
  // };
  const [smallImage, setSmallImage] = useState();
  const[data,setData]=useState([])
  console.log(data);
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState();
  const [qty, setQty] = useState(["1"]);
  const location = useLocation();
  const nav = useNavigate();
  const [fav, setFav] = useState([]);


  useEffect(() => {
    onValue(ref(database, "product-overview"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setData(datas);
       
      }
    });
  }, []);
  useEffect(() => {
    onValue(ref(database, "fav"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setFav(datas);
      } else {
        setFav([]);
      }
    });
  }, []);
  let newFav = [];
  if (location.state != null) {
    fav.map((favs) => {
      if (favs.userEmail == location.state.email) {
        newFav.push(favs);
      }
    });
  }
  console.log(newFav);
  // const postView = JSON.parse(localStorage.getItem("post"));
  // console.log(postView);

  // useEffect(() => {
  //   const cartItems = JSON.parse(localStorage.getItem("cart"));
  //   if (cartItems) setCart(cartItems);
  // }, []);
  // console.log(smallImage);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  // const cartItems = JSON.parse(localStorage.getItem("cart"));

  function CartClick(e) {
    e.preventDefault();
    const uuid=uid()
    if (location.state != null && size != null) {
      set(ref(database,'cart' +`/${uuid}`),{
        uuid,
        url: data[0].url1,
            brand: data[0].brand,
            brandValue: data[0].brandValue,
            rating: data[0].rating,
            price: data[0].brandPrice,
            priceOffer: data[0].brandPriceOffer,
            category: data[0].category,
            size: size,
            quantity: qty,
            userEmail:location.state.email
      })
      // setCart((img2) => {
      //   return [
      //     ...img2,
      //     {
      //       url: postView.url1,
      //       tag: postView.tag,
      //       brand: postView.brand,
      //       brandValue: postView.brandValue,
      //       rating: postView.rating,
      //       price: postView.brandPrice,
      //       priceOffer: postView.brandPriceOffer,
      //       category: postView.category,
      //       size: size,
      //       quantity: qty,
      //     },
      //   ];
      // });

      window.alert("Item added to cart");
     
    } else {
      if (size == null) {
        let sizeP = document.querySelector(".size-product");
        sizeP.style.boxShadow = "rgb(255 33 4 / 98%) 0px 0px 0px 1px";
        sizeP.style.transition = "1s cubic-bezier(0.075, 0.82, 0.165, 1)";
        sizeP.style.animation =
          "shake .5s 3.4 cubic-bezier(0.455, 0.03, 0.515, 0.955)";
      }
      if (location.state == null) {
        window.alert("Please login");
        nav("/user_login");
      }
    }
  }
  const ab = () => {
    setSmallImage(data[0].url1);
  };
  const bc = () => {
    setSmallImage(data[0].url2);
  };
  const cd = () => {
    setSmallImage(data[0].url3);
  };
  const de = () => {
    setSmallImage(data[0].url4);
  };

  return (
    <>
      <Header />
      <Navbar userName={location} />
        {data.map((item)=>{
          return(
            <div className="product-view">

        <div className="left-view">
          <div className="left-small">
            <img
              onMouseOver={ab}
              src={item ? item.url1 : null}
              alt=""
            />
            <img
              onMouseOver={bc}
              src={item ? item.url2 : null}
              alt=""
            />
            <img
              onMouseOver={cd}
              src={item ? item.url3 : null}
              alt=""
            />
            <img
              onMouseOver={de}
              src={item ? item.url4 : null}
              alt=""
            />
            
            
          </div>
          <img
            className="image-preview"
            src={smallImage ? smallImage : item.url1}
            alt=""
          />
          {newFav.map((list)=>{
            console.log(list.uuid2);
            console.log(item.uuid2);
              if(list.uuid2==item.uuid || list.uuid2==item.uuid2){
                return(
                  <div className="heart-fav-over" >
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                )
                
              }
          })}
        </div>
        <div className="right-view">
          <div className="details-product-view">
            <div className="cap_head">
              <h1>{item ? item.brand : null}</h1>
              <h2>{item ? item.brandValue : null}</h2>
            </div>

            <h2 className="price-view">
              ₹ {item ? item.brandPriceOffer : null}/-
            </h2>
            <h2 className="star-rating">{item ? item.rating : null}</h2>
            <div className="product-category">
              <p className="p-category">Categrories:</p>
              <p>{item ? item.category : null}</p>
            </div>
            <p className="desc-prod">
              {item ? item.description : null}
            </p>
            <label htmlFor="">Size :</label>
            {item ? (item.category=="shirt" ||item.category=="jacket" ?
            <select
            onChange={(e) => {
              setSize(e.target[e.target.selectedIndex].text);
              let sizeP = document.querySelector(".size-product");
              sizeP.style.boxShadow = "none";
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
          : <select
          onChange={(e) => {
            setSize(e.target[e.target.selectedIndex].text);
            let sizeP = document.querySelector(".size-product");
            sizeP.style.boxShadow = "none";
          }}
          className="size-product"
          name="size"
          id="sizes"
        >
          <option value="1">Select Your Size</option>
          <option value="1">38</option>
          <option value="2">39</option>
          <option value="3">40</option>
          <option value="4">41</option>
          <option value="5">42</option>
        </select>) :null
          }
            
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
          )
        })}
      
      
    </>
  );
}

export default ViewProduct;
