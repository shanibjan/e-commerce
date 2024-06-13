import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";
import { useLocation, useNavigate } from "react-router-dom";
import Cart2 from "../assets/Cart2";
import Love from "../assets/Love";
import Compare from "../assets/Compare";
import Plus from "../assets/Plus";
import { database } from "../firebase";
import { onValue, ref, remove, set } from "firebase/database";

function SearchProducts() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);
  const[lowtoH,setLowtoH]=useState([])
  const[data,setData]=useState([])
  console.log(data);
  // const searched = JSON.parse(localStorage.getItem("search"));
  // console.log(searched);
  useEffect(() => {
    onValue(ref(database, "product-search"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setData(datas);
       
      }else{
        setData([])
      }
    });
  }, []);

  useEffect(() => {
    const searchP = JSON.parse(localStorage.getItem("post"));
    if (searchP) setPostDetails(searchP);
  }, []);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(postDetails));
  }, [postDetails]);
  useEffect(() => {
    let imageWrapper = document.querySelectorAll(".admin-image-wrapper-pro");
    // console.log(imageWrapper);
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
    let cartAction = document.querySelectorAll(".admin-carts");
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
  useEffect(()=>{
    if(lowtoH=="Popularity"){
     data.sort((a,b)=>{
       return b.rating.length-a.rating.length
     })
     set(ref(database, "product-search"), data);
    } 
    else if(lowtoH=="Price: High to Low"){
     data.sort((a,b)=>{
       return b.brandPriceOffer-a.brandPriceOffer
     })
     set(ref(database, "product-search"), data);
    }
    else if(lowtoH=="Price: Low to High"){
     data.sort((a,b)=>{
       return a.brandPriceOffer-b.brandPriceOffer
     })
     set(ref(database, "product-search"), data);
    }
    else if(lowtoH=="Latest"){
     data.sort((a,b)=>{
      
       return new Date(b.date)-new Date(a.date)
       
     })
     
     set(ref(database, "product-search"), data);
    }
   
   },[lowtoH])
  return (
    <>
      <Header />
      <Navbar userName={location} isSearch />
      <div className="sort">
      <select className="sorted" name="" id="" onChange={((e)=>{
          setLowtoH(e.target[e.target.selectedIndex].text)
        })}>
        <option value="">Sort by</option>
        <option value=""  >Price: Low to High</option>
        <option value=""  >Price: High to Low</option>
        <option value=""  >Popularity</option>
        <option value=""  >Latest</option>
      </select>
      </div>
      {data
        ? data.map((result) => {
            let a = result
              ? (result.brandPriceOffer * 100) / result.brandPrice
              : null;

            let b = Math.trunc(a);
            let perc = 100 - b;
            return (
              
              <div className="search-product-details">
                <div className="search-image-wrapper-pro">
                  <img
                    src={result ? result.url1 : null}
                    className="admin-image"
                    alt="normal"
                  />
                  <img
                    src={result ? result.url2 : null}
                    className="admin-image-hover"
                    alt="hover"
                  />

                  <div className="admin-items-hover">
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
                  <div className="admin-top-offer">
                    <h2 className="admin-product-ad">{perc} % OFF</h2>
                  </div>
                </div>
                <div className="admin-stars">
                  <h2 className="admin-rating-star">{result.rating}</h2>
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
                      <a href="">
                        ₹ {result ? result.brandPriceOffer : null} /-
                      </a>
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
  );
}

export default SearchProducts;
