import React, { useEffect, useRef, useState } from "react";
import "./Create.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

function Create() {
  const brandName = useRef();
  const brandValue=useRef()
  const brandPrice=useRef()
  const navigate=useNavigate()
  const location = useLocation();
  const [createProduct, setCreateProduct] = useState([]);
  const [image, setImage] = useState([]);
  const [rating,setRating]=useState()
  const[tag,setTag]=useState()
  console.log(createProduct);
  console.log(rating);

  useEffect(() => {
    const fNameParse = JSON.parse(localStorage.getItem("image"));
    console.log(fNameParse);
    if (fNameParse) setCreateProduct(fNameParse);
  }, []);

  useEffect(() => {
    console.log(createProduct);
    localStorage.setItem("image", JSON.stringify(createProduct));
  }, [createProduct]);
  const jan = () => {
    console.log(image);
    console.log(createProduct);
    const reader = new FileReader();
    console.log(reader);
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      let imageLoader = reader.result;
      console.log(imageLoader);
      let uBrand = brandName.current.value;
      let uBrandValue=brandValue.current.value
      let uBrandPrice=brandPrice.current.value
      console.log(uBrand);
        setCreateProduct((productCopy) => {
          return [
            ...productCopy,
            {
              url: imageLoader,
              brand: uBrand,
              brandValue:uBrandValue,
              brandPrice:uBrandPrice,
              rating:rating,
              tag:tag
            },
          ];
        });
      
      
      setTimeout(()=>{
        navigate('/admin')
      },1000)
    });
  };

  // const handleChange = (e) => {

  //   const image = e.target.files[0];
  //   console.log(image);
  //   const reader = new FileReader();
  //   console.log(reader);
  //   reader.addEventListener("load", () => {
  //     let imageLoader=reader.result
  //     console.log(imageLoader);
  //     let uBrand=brandName.current.value
  //     console.log(uBrand);
  //       setCreateProduct((productCopy) => {
  //         return [
  //          ...productCopy,
  //           {
  //             url: imageLoader,
  //             brand:uBrand
  //           }
  //         ];
  //       });

  //   });
  //    reader.readAsDataURL(image);

  //   // const newImage = localStorage.getItem("image");
  //   // console.log(newImage);

  // };

  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="create-product">
        <h1>Create a Product</h1>

        <div className="informations">
          <label htmlFor="">Rating</label>
          <br />
          <select onChange={(e) => {
              setRating(e.target[e.target.selectedIndex].text);
            }} className="stars-product" name="stars" id="stars">
            <option value="1">Rate Stars Here</option>
            <option value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
          </select>
          <br />
          <label htmlFor="">Tag</label>
          <br />
          <select onChange={(e) => {
              setTag(e.target[e.target.selectedIndex].text);
            }} className="stars-product" name="stars" id="stars">
            <option value="1">Select Tag</option>
            <option value="1">NEW</option>
            <option value="2">FEATURED</option>
            <option value="3">POPULAR</option>
            <option value="4">PREMIUM</option>
            <option value="5">OFFER </option>
          </select>
          <br />
          <label htmlFor="">Brand Name</label>
          <br />
          <input ref={brandName} type="text" placeholder="Brand name..." />
          <br />
          <label htmlFor="">Brand value</label>
          <br />
          <input ref={brandValue}
            type="text"
            placeholder="Brand value..."
          />
          <br />
          <label htmlFor="">Price</label>
          <br />
          <input ref={brandPrice} type="number" placeholder="Price..." step="0.01" />
          <br />
          <label htmlFor="">Product 1</label>
          <br />
          <input
            type="file"
            id="myFile"
            name="filename"
            multiple
            accept=".jpg,.jpeg,.png,.gif,.webp"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <label htmlFor="">Product 2</label>
          <br />
          <input
            type="file"
            id="myFile"
            name="filename"
            // onChange={(e)=>{
            //   setCreateProduct(e.target.files[0])
            // }}
          />
          <br />
        </div>
        
          <a onClick={jan} className="create">
            <p>CREATE</p>
          </a>
       
        <button  >h</button>

        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <a href="" className="return-store">
            Or Return to Home
          </a>
        </Link>
      </div>
    </>
  );
}

export default Create;
