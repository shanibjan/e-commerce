import React, { useEffect, useState } from "react";
import "./Dresses.css";
import imagePath from "../assetHelper/assetHelper.js";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase.js";
import { onValue, ref, remove, set } from "firebase/database";

function Dresses({ userName }) {
  const navigate = useNavigate();
  const [prodsFilter, setProdsFilter] = useState([]);
  const[data,setData]=useState([])
  useEffect(() => {
    const searchP = JSON.parse(localStorage.getItem("prods-filter"));
    if (searchP) setProdsFilter(searchP);
  }, []);

  useEffect(() => {
    let nodeDressSub = document.querySelectorAll(".dress-sub");
    // console.log(nodeDressSub)
    // console.log(nodeDressSub.length)
    for (let i = 0; i < nodeDressSub.length; i++) {
      let nodeImage = nodeDressSub[i].childNodes[0];
      // console.log(nodeImage)
      let box = nodeDressSub[i].childNodes[1];
      let box2 = window.getComputedStyle(box, "::after");

      nodeDressSub[i].addEventListener("mouseenter", (event) => {
        nodeImage.style.backgroundSize = "110%";
        box.style.setProperty("--afterBack", "scaleX(1)");
      });

      nodeDressSub[i].addEventListener("mouseleave", (event) => {
        nodeImage.style.backgroundSize = "100%";
        box.style.setProperty("--afterBack", "scaleX(0)");
      });
    }
  });

  let dressesDynamic = [
    { src: "zaj.jpeg", name: "jacket" },
    { src: "kids.jpeg", name: "kids" },
    { src: "product-3.jpeg", name: "women" },
    { src: "pant.jpeg", name: "pants" },
    { src: "zs1.jpeg", name: "shirt" },
    { src: "collection-2.jpeg", name: "shoe" },
  ];

  useEffect(() => {
    onValue(ref(database, "products"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const datas = Object.values(data);

        setData(datas);
       
      }else{
        setData([])
      }
    });
  }, []);
  const prods = JSON.parse(localStorage.getItem("image"));
  console.log(prodsFilter);

  useEffect(() => {
    localStorage.setItem("prods-filter", JSON.stringify(prodsFilter));
  }, [prodsFilter]);

  return (
    
    <div className="dresses">
      {/* <img src={process.env.PUBLIC_URL + imgNameWithPath} /> */}
      <img alt="" />

      {dressesDynamic.map((dressesDynamic, index) => {
        return (
          <a
            onClick={(e) => {
              e.preventDefault();
              if (data != null) {
                const filterSearch = data.filter((val) => {
                  return val.category == dressesDynamic.name;
                });
                if (filterSearch) {
                  set(ref(database, "product-filter"), filterSearch);
                }
              }
              setTimeout(() => {
                if (userName.state != null) {
                  navigate("/filter_products", {
                    state: { name: userName.state.name,email:userName.state.email },
                  });
                } else {
                  navigate("/filter_products");
                }
              }, 100);
            }}
            href=""
            className="dress-sub"
          >
            <div
              key1={`${dressesDynamic.src}`}
              className="image-1"
              style={{
                backgroundImage: `url(${imagePath(`${dressesDynamic.src}`)})`,
              }}
            ></div>
            <h2 key2={`${dressesDynamic.name}`} className="head">
              {dressesDynamic.name}
            </h2>
          </a>
        );
      })}
    </div>
  );
}

export default Dresses;
