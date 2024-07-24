import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import { database } from "../firebase";
import { onValue, ref, remove, set } from "firebase/database";
import Cart2 from "../assets/Cart2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function WishList() {
    const location = useLocation();
    const navigate = useNavigate();
    const [fav, setFav] = useState([]);
    console.log(fav);

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
    console.log(newFav);
    
  }
  useEffect(() => {
    // let imageWrapper = document.querySelectorAll(".search-image-wrapper-pro");
    // // console.log(imageWrapper);
    // for (let i = 0; i < imageWrapper.length; i++) {
    //   let itemsHover = imageWrapper[i].childNodes[3];
    //   console.log(itemsHover);
    //   imageWrapper[i].addEventListener("mouseenter", (e) => {
    //     itemsHover.style.display = "flex";
    //     // itemsHover.style.transition="5s cubic-bezier(0.075, 0.82, 0.165, 1)"
    //   });

    //   imageWrapper[i].addEventListener("mouseleave", (e) => {
    //     itemsHover.style.display = "none";
    //   });
    // }
    
    
    let cartAction = document.querySelectorAll(".admin-carts");
    console.log(cartAction);
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
  const removed = (result) => {
    // console.log(items.uuid);
    remove(ref(database, "fav" + `/${result.uuid}`));
  };
  return (
    <>
    <Header />
      <Navbar userName={location} />
      <h2 className='wish-items' >My Wishlist  {newFav.length} Items</h2>
      {newFav
        ? newFav.map((result) => {
          console.log(result);
          let a = result
                ? (result.brandPriceOffer * 100) / result.brandPrice
                : null;

              let b=Math.trunc(a)
              let perc=100-b
            return (
              <div className="search-product-details">
                <div className="search-image-wrapper-pro">
                <div
                                  onClick={() => {
                                    removed(result);
                                  }}
                                  className="remove-fav"
                                >
                                  <FontAwesomeIcon icon={faTimes} />
                                </div>
                  <img
                    src={result ? result.url1 : null}
                    className="admin-image"
                    alt="normal"
                  />
                 

                  
                  <div className="admin-top-offer">
                    <h2 className="admin-product-ad">{perc} % OFF</h2>
                  </div>
                 
                  
                </div>
                <div className="admin-stars">
                  <h2 className="admin-rating-star">{result.rating}</h2>
                  {/* <div>
                      {newFav
                        ? newFav.map((items) => {
                            if (result.uuid == items.uuid2) {
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

                      
                    </div> */}
                </div>
                <a href="" className="admin-brand">
                  {result ? result.brand : null}
                </a>
                <a href="" className="admin-brand-details">
                  {result ? result.brandValue : null}
                </a>
                <div className="admin-variants">
                  <span className="admin-variant"></span>
                  <span className="admin-variant black"></span>
                </div>
                <a
                  onClick={() => {
                    let postDetail = [];
                    postDetail.push(result);
                    set(ref(database, "product-overview"), postDetail);
                    setTimeout(() => {
                      if (location.state !== null) {
                        navigate("/view-product", {
                          state: { name: location.state.name,email:location.state.email },
                        });
                      } else {
                        navigate("/view-product");
                      }
                    }, 100);
                  }}
                  className="admin-carts"
                >
                  <div className="admin-first-cart">
                    <div className="admin-left-cart">
                      <a href="">
                        <Cart2 />
                      </a>
                    </div>
                    <div className="admin-right-cart">
                      <a href="">₹ {result ? result.brandPriceOffer : null} /-</a>
                    </div>
                    <a className="actual-price" href="">
                        ₹ {result ? result.brandPrice : null} /-
                      </a>
                  </div>

                  <div className="admin-second-cart">
                    <div className="admin-second-cart-left">
                      <a href="">
                        <Cart2 />
                      </a>
                    </div>
                    <div className="admin-second-cart-right">
                      <p>View Deatails</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })
        : console.log("hf")}
    </>
  )
}

export default WishList
