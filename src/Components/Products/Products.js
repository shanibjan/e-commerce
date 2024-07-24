import React, { useState } from "react";
import "./Products.css";
import {
  faStar,
  faCodeCompare,
  faSearchPlus,
  faHeart,
  faN,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart2 from "../../assets/Cart2";
import Love from "../../assets/Love";
import Compare from "../../assets/Compare";
import Plus from "../../assets/Plus";
import { useEffect } from "react";
import imagePath from "../assetHelper/assetHelper.js";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase.js";
import { onValue, ref, remove, set } from "firebase/database";
import { uid } from "uid";

function Products({ userName }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(userName);
  const [fav, setFav] = useState([]);
  const [favor, setFavor] = useState(false);

  useEffect(() => {
    onValue(ref(database, "products"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setData(datas);
      } else {
        setData([]);
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
  if (userName.state != null) {
    fav.map((favs) => {
      if (favs.userEmail == userName.state.email) {
        newFav.push(favs);
      }
    });
  }
  console.log(newFav);

  let mainProducts = [];
  for (let i = 0; i <= 3; i++) {
    if (data[i] != null) {
      mainProducts.push(data[i]);
    }
  }
  console.log(mainProducts);

  useEffect(() => {
    let imageWrapper = document.querySelectorAll(".image-wrapper-pro");
    for (let i = 0; i < imageWrapper.length; i++) {
      let itemsHover = imageWrapper[i].childNodes[3];
      console.log(itemsHover);
      imageWrapper[i].addEventListener("mouseenter", (e) => {
        itemsHover.style.display = "grid";
        // itemsHover.style.transition="5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      });

      imageWrapper[i].addEventListener("mouseleave", (e) => {
        itemsHover.style.display = "none";
      });
    }

    let cartAction = document.querySelectorAll(".carts");
    for (let i = 0; i < cartAction.length; i++) {
      let firstCart = cartAction[i].childNodes[0];
      let secondCart = cartAction[i].childNodes[1];
      let childFirstCart = firstCart.childNodes[0];
      let childSecondCart1 = secondCart.childNodes[0];
      let childSecondCart2 = secondCart.childNodes[1];
      let grandChildSecondCart = childSecondCart2.childNodes[0];

      cartAction[i].addEventListener("mouseenter", (e) => {
        firstCart.style.opacity = "0";
        secondCart.style.opacity = "1";
        secondCart.style.visibility = "visible";
        secondCart.style.animation = "none";
        childSecondCart2.style.width = "150px";
        childSecondCart1.style.transform = "translateX(15px)";
        grandChildSecondCart.style.transform = "translateX(25px)";
      });

      cartAction[i].addEventListener("mouseleave", (e) => {
        firstCart.style.opacity = "1";
        secondCart.style.opacity = "0";
        secondCart.style.animation =
          "slideRight .2s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        childSecondCart2.style.width = "130px";
        childSecondCart1.style.transform = "translateX(0px)";
        grandChildSecondCart.style.transform = "translateX(0px)";
      });
    }
  });

  const addFav = (product) => {
    console.log(product);
    let isFavo = false;
    // console.log(newFav);
    newFav.map((favItem) => {
      if (favItem.uuid2 == product.uuid) {
        isFavo = true;
        setFavor(true);
      }
    });

    const uuid = uid();
    if (userName.state != null && isFavo == false) {
      set(ref(database, "fav" + `/${uuid}`), {
        brand: product.brand,
        url1: product.url1,
        url2: product.url2,
        url3: product.url3,
        url4: product.url4,
        brandValue: product.brandValue,
        brandPrice: product.brandPrice,
        brandPriceOffer: product.brandPriceOffer,
        rating: product.rating,
        date: new Date(),
        category: product.category,
        description: product.description,
        uuid2: product.uuid,
        uuid,
        userEmail: userName.state.email,
      });
    } else if(userName.state == null ) {
      window.alert("Please login ");
    } else if(isFavo == true){
      window.alert('Item already added to favourite')
    }
  };

  const removed = (items) => {
    // console.log(items.uuid);
    remove(ref(database, "fav" + `/${items.uuid}`));
  };
  const allProductsClick=(e)=>{
    e.preventDefault()
    if (userName.state != null) {
      navigate("/all_products", {
        state: {
          name: userName.state.name,
          email: userName.state.email,
        },
      });
    } else {
      navigate("/all_products");
    }
  }

  return (
    <div className="product">
      <h1>Top Products of This Week</h1>
      <div className="product-upper">
        {mainProducts
          ? mainProducts.map((product, indexP) => {
              let a = product
                ? (product.brandPriceOffer * 100) / product.brandPrice
                : null;

              let b = Math.trunc(a);
              let perc = 100 - b;
              return (
                <div className="product-details">
                  <div className="image-wrapper-pro">
                    <img
                      src={product ? product.url1 : null}
                      className="image"
                      alt="normal"
                    />
                    <img
                      src={product ? product.url2 : null}
                      className="image-hover"
                      alt="hover"
                    />

                    {/* <div className="items-hover">
                      <a  >
                        <Love />
                      </a>
                      <a href="">
                        <Compare />
                      </a>
                      <a href="">
                        <Plus />
                      </a>
                    </div> */}
                    <div className="top-offer">
                      <h2 className="product-ad">
                        {product ? perc : null}% OFF
                      </h2>
                    </div>
                    <div className="wishlist" onClick={() => {
                          addFav(product);
                        }} >Add to Wishlist</div>
                  </div>
                  <div className="stars">
                    <h2 className="rating-star">
                      {product ? product.rating : null}
                    </h2>
                    <div>
                      {newFav
                        ? newFav.map((items) => {
                            if (product.uuid == items.uuid2) {
                              return (
                                <div
                                  onClick={() => {
                                    removed(items);
                                  }}
                                  className="heart-fav"
                                >
                                  <FontAwesomeIcon icon={faHeart} />
                                </div>
                              );
                            }
                          })
                        : null}

                      
                    </div>
                  </div>
                  <a href="" className="brand">
                    {product ? product.brand : null}
                  </a>
                  <a href="" className="brand-details">
                    {product ? product.brandValue : null}
                  </a>
                  <div className="variants">
                    <span className="variant"></span>
                    <span className="variant black"></span>
                  </div>
                  <a
                    onClick={() => {
                      let postDetail = [];
                      postDetail.push(product);
                      set(ref(database, "product-overview"), postDetail);
                      setTimeout(() => {
                        if (userName.state !== null) {
                          navigate("/view-product", {
                            state: {
                              name: userName.state.name,
                              email: userName.state.email,
                            },
                          });
                        } else {
                          navigate("/view-product");
                        }
                      }, 100);
                    }}
                    className="carts"
                  >
                    <div className="first-cart">
                      <div className="left-cart">
                        <a href="">
                          <Cart2 />
                        </a>
                      </div>
                      <div className="right-cart">
                        <a href="">
                          ₹ {product ? product.brandPriceOffer : null} /-
                        </a>
                      </div>
                      <a className="actual-price" href="">
                        ₹ {product ? product.brandPrice : null} /-
                      </a>
                    </div>

                    <div className="second-cart">
                      <div className="second-cart-left">
                        <a href="">
                          <Cart2 />
                        </a>
                      </div>
                      <div className="second-cart-right">
                        <p>View Details</p>
                      </div>
                    </div>
                  </a>

                  {/* <button
                    onClick={() => {
                      fNameParse.splice(indexP, 1);
                      console.log(fNameParse);
                      localStorage.setItem("image", JSON.stringify(fNameParse));
                    }}
                  >
                    ki
                  </button> */}
                </div>
              );
            })
          : "no items added"}
        {
          <div
            onClick={allProductsClick}
            className="all-products"
          >
            <a className="all-products-text" href="">
              {mainProducts ? "VIEW ALL" : "No Items Added"}
            </a>
          </div>
        }
      </div>
    </div>
  );
}

export default Products;
