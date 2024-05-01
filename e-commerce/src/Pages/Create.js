import React, { useEffect, useRef, useState } from "react";
import "./Create.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { logDOM } from "@testing-library/react";
import imageCompression from "browser-image-compression";

function Create() {
  const brandName = useRef();
  const brandValue = useRef();
  const brandPrice = useRef();
  const brandPriceOffer = useRef();
  const brandDesc = useRef();
  const brandCategory = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [createProduct, setCreateProduct] = useState([]);

  const [image, setImage] = useState([]);
  const [imageHover, setImageHover] = useState([]);
  const [rating, setRating] = useState();
  console.log(rating);

  let a = createProduct.reverse();

  console.log(createProduct);

  useEffect(() => {
    const fNameParse = JSON.parse(localStorage.getItem("image"));
    if (fNameParse) setCreateProduct(fNameParse);
  }, []);
  console.log(createProduct);
  let imageLoader;
  let imageLoaderHover;
  console.log(image);

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(createProduct));
  }, [createProduct]);

  const jan = () => {
    const reader = new FileReader();
    const reader2 = new FileReader();

  const store = (e) => {
    let val = e.target.files[0];
    console.log(val.size);
    const reader = new FileReader();
    reader.readAsDataURL(val);
    reader.addEventListener("load", () => {
      imageLoader = reader.result;
      setImage((stateCopy) => {
        return [...stateCopy, { loader: imageLoader }];
      });
    });
  };
  const jan = () => {
    let uBrand = brandName.current.value;
    let uBrandValue = brandValue.current.value;
    let uBrandPrice = brandPrice.current.value;
    let uBrandPriceOffer = brandPriceOffer.current.value;
    let uBrandCategory = brandCategory.current.value;
    let uBrandDesc = brandDesc.current.value;
    console.log(a);
    setCreateProduct((a) => {
      return [
        ...a,
        {
          brand: uBrand,
          url1: image[0].loader,
          url2: image[1].loader,
          brandValue: uBrandValue,
          brandPrice: uBrandPrice,
          brandPriceOffer: uBrandPriceOffer,
          rating: rating,
          date:new Date(),

    setCreateProduct((productCopy) => {
      return [
        ...productCopy,
        {
          url: image,
          urlHover: imageHover,
          brand: uBrand,
          brandValue: uBrandValue,
          brandPrice: uBrandPrice,
          rating: rating,
          tag: tag,
          category: uBrandCategory,
          description: uBrandDesc,
        },
      ];
    });

    setTimeout(() => {
      navigate("/admin", { state: { name: "shanibjan" } });
    }, 100);
  };
      navigate("/admin");
    }, 1000);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(selectedImage);

    reader.addEventListener('load', () => {
      const imageLoader = reader.result;
      setImage(imageLoader);
    });
  };

  const handleImageHoverChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(selectedImage);

    reader.addEventListener('load', () => {
      const imageLoader = reader.result;
      setImageHover(imageLoader);
    });
  };


  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="create-product">
        <h1>Create a Product</h1>

        <div className="informations">
          <label htmlFor="">Rating</label>
          <br />
          <select
            onChange={(e) => {
              setRating(e.target[e.target.selectedIndex].text);
            }}
            className="stars-product"
            name="stars"
            id="stars"
          >
            <option value="1">Rate Stars Here</option>
            <option value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
          </select>
          <br />

          <label htmlFor="">Brand Name</label>
          <br />
          <input ref={brandName} type="text" placeholder="Brand name..." />
          <br />
          <label htmlFor="">Categories</label>
          <br />
          <input
            ref={brandCategory}
            type="text"
            placeholder="Brand categories..."
          />
          <br />
          <label htmlFor="">Brand value</label>
          <br />
          <input ref={brandValue} type="text" placeholder="Brand value..." />
          <br />
          <label htmlFor="">Description</label>
          <br />
          <input
            ref={brandDesc}
            type="text"
            min="0"
            max="500"
            placeholder="Brand value..."
          />
          <br />
          <label htmlFor="">Price</label>
          <br />
          <input ref={brandPrice} type="number" min="1" step="0.01" />
          <br />
          <label htmlFor="">Offer Price</label>
          <br />
          <input ref={brandPriceOffer} type="number" min="1" step="0.01" />
          <br />

          <label htmlFor="">Product 1</label>
          <br />
          <input
            type="file"
            id="myFile"
            name="filename"
            multiple
<<<<<<< HEAD
            accept=".jpg,.jpeg,.png,.gif,.webp,.avif,.html"
            onChange={store}
=======
            accept=".jpg,.jpeg,.png,.gif,.webp,.avif"
            onChange={handleImageChange}
>>>>>>> origin/main
          />
          <br />

          <label htmlFor="">Product 2</label>
          <br />
          <input
            type="file"
            id="myFile"
            name="filename"
<<<<<<< HEAD
            multiple
            accept=".jpg,.jpeg,.png,.gif,.webp,.avif"
            onChange={store}
=======
            onChange={handleImageHoverChange}
>>>>>>> origin/main
          />
          <br />
        </div>

        <a onClick={jan} className="create">
          <p>CREATE</p>
        </a>

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
