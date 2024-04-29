import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cart2 from "../assets/Cart2";
import Love from "../assets/Love";
import Compare from "../assets/Compare";
import Plus from "../assets/Plus";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

function AllProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);

  const fNameParse = JSON.parse(localStorage.getItem("image"));
  console.log(fNameParse);
  useEffect(() => {
    const searchP = JSON.parse(localStorage.getItem("post"));
    if (searchP != null) setPostDetails(searchP);
  }, []);
  const sort = () => {
    fNameParse.sort((a, b) => {
      return b.rating.length - a.rating.length;
    });
    console.log("h");
    localStorage.setItem("image", JSON.stringify(fNameParse));

    navigate("/all_products");
  };

  fNameParse.map((a) => {
    console.log(a.rating.length);
  });

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(postDetails));
  }, [postDetails]);

  useEffect(() => {
    let imageWrapper = document.querySelectorAll(".image-wrapper-pro");
    for (let i = 0; i < imageWrapper.length; i++) {
      let itemsHover = imageWrapper[i].childNodes[2];
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
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="product">
        <h1>All Products</h1>
        <button onClick={sort}></button>
        <div className="product-upper">
          {fNameParse
            ? fNameParse.map((product, indexP) => {
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

                      <div className="items-hover">
                        <a href="">
                          <Love />
                        </a>
                        <a href="">
                          <Compare />
                        </a>
                        <a href="">
                          <Plus />
                        </a>
                      </div>
                      <div className="top-offer">
                        <h2 className="product-ad">
                          {product ? perc : null} % OFF
                        </h2>
                      </div>
                    </div>
                    <div className="stars">
                      <h2 className="rating-star">
                        {product ? product.rating : null}
                      </h2>
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
                        setPostDetails(product);
                        setTimeout(() => {
                          if (location.state !== null) {
                            navigate("/view-product", {
                              state: { name: location.state.name },
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
                  </div>
                );
              })
            : "no items added"}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
