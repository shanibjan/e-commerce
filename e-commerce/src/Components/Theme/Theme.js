import React from "react";
import "./Theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faTruck,
  faMale,
  faList,
  faFemale,
  faUndo,
  faTimes,
  faBarChart,
  faQuestion,
  faEnvelope,
  faWrench,
  faCog,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";
import menCloth from "../../images/clothing.webp";
import menShoe from "../../images/men-shoe.jpeg";
import menCap from "../../images/man-cap.webp";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imagePath from "../assetHelper/assetHelper";

function Theme() {
  let womenDynamic = [
    {
      img1: "product-1.jpeg",
      img2: "product-2.jpeg",
      product: "Adidas Shoe",
      price: "250.00",
    },
    {
      img1: "product-3.jpeg",
      img2: "product-4.jpeg",
      product: "Nike Shoe",
      price: "250.00",
    },
    {
      img1: "product-1.jpeg",
      img2: "product-2.jpeg",
      product: "Adidas Shoe",
      price: "250.00",
    },
    {
      img1: "product-3.jpeg",
      img2: "product-4.jpeg",
      product: "Adidas Shoe",
      price: "250.00",
    },
    {
      img1: "product-5.jpeg",
      img2: "product-6.jpeg",
      product: "Adidas Shoe",
      price: "250.00",
    },
    {
      img1: "product-3.jpeg",
      img2: "product-4.jpeg",
      product: "Adidas Shoe",
      price: "250.00",
    },
  ];
  let menDynamic = [
    {
      src: "product-7.jpeg",
      head: "Top Trending",
      desc: "Collection of 2023/24",
    },
    {
      src: "men-dresses-1.jpeg",
      head: "The All-In-One",
      desc: "Offer Upto 75% OFF",
    },
  ];

  let ProductDynamic = [
    {
      src: "look-2.webp",
      head: "NEED-IT-NOW",
      desc1: "Must-haves",
      desc2: "for the Season",
      para: "Here to bring your life stylle to next level",
    },
    {
      src: "collection-2.avif",
      head: "NEW PERSONALIZABLE COLLECTION",
      desc1: "Get Up To",
      desc2: "50% OFF",
      para: "Elegant.Mininal beautyfully iconic",
    },
    {
      src: "collection-3.avif",
      head: "COMPLETE YOUR LOOK",
      desc1: "Collections",
      desc2: "2023/24",
      para: "Distinguish.Individual.Self.Disctinctive.Classic",
    },
  ];

  const yankaEnter = () => {
    let yanka = document.querySelector(".yanka-head");
    let yankAfter = window.getComputedStyle(yanka, "::after");
    yanka.style.setProperty("--afterBack", "scaleX(1)");
  };
  const yankaLeave = () => {
    let yanka = document.querySelector(".yanka-head");
    let yankAfter = window.getComputedStyle(yanka, "::after");
    yanka.style.setProperty("--afterBack", "scaleX(0)");
  };
  useEffect(() => {
    let nodeLookSub = document.querySelectorAll(".look-sub");
    // console.log(nodeLookSub);
    for (let i = 0; i < nodeLookSub.length; i++) {
      let nodeLookBase = nodeLookSub[i].childNodes[0];
      // console.log(nodeLookBase);
      let nodeLookHead = nodeLookBase.childNodes[0];
      let box2 = window.getComputedStyle(nodeLookHead, "::after");
      console.log(nodeLookHead);

      nodeLookSub[i].addEventListener("mouseenter", (e) => {
        nodeLookBase.style.backgroundSize = "110%";
        nodeLookHead.style.setProperty("--afterBack", "scaleX(1)");
      });

      nodeLookSub[i].addEventListener("mouseleave", (e) => {
        nodeLookBase.style.backgroundSize = "100%";
        nodeLookHead.style.setProperty("--afterBack", "scaleX(0)");
      });
    }

    let menDressSub = document.querySelectorAll(".men-dress-sub");
    for (let i = 0; i < menDressSub.length; i++) {
      let menImage = menDressSub[i].childNodes[0];
      let menHead = menDressSub[i].childNodes[1];
      let menHeadAfter = window.getComputedStyle(menHead, "::after");

      menDressSub[i].addEventListener("mouseenter", (e) => {
        menImage.style.backgroundSize = "110%";
        menHead.style.setProperty("--afterBack", "scaleX(1)");
      });

      menDressSub[i].addEventListener("mouseleave", (e) => {
        menImage.style.backgroundSize = "100%";
        menHead.style.setProperty("--afterBack", "scaleX(0)");
      });
    }
  });

  const womenSlide = {
    nav: true,
    items: 3,
    dots: false,
  };
  const product = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 2000,
  };

  return (
    <div className="theme">
      <div className="categories">
        <div className="heading">
          <div className="font-awesome">
            <FontAwesomeIcon icon={faList} />
          </div>
          <h4>CATEGORIES</h4>
        </div>
        <ul className="category-list">
          <div className="dropdown-list-women-list">
            <li>
              <a href="" className="setting">
                <div className="font-awesom">
                  <FontAwesomeIcon icon={faFemale} />
                </div>
                <p>WOMENS</p>
                <div className="right-arrow">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="dropdown-list-menu-women-list">
                  <div className="women-pack-list">
                    <div className="women-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Coats
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Jackets
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Blazers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Trousers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Knitwear
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Sweetshirts
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          T-Shirt
                        </a>
                      </li>
                    </div>
                    <div className="women-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Trainers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Boots
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Heels
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Flats
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Platforms
                        </a>
                      </li>
                    </div>
                    <div className="women-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Bags
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Bootpacks
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Belts
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Jwellery
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Hots & Beanie
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Purses
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="look">
                    <a className="look-sub">
                      <div className="look-sub-1">
                        <h2 className="look-head">Complete Your Look</h2>
                        <p>
                          The worlds most stylish women are buying right now
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div className="dropdown-list-men-list">
            <li>
              <a href="" className="setting">
                <div className="font-awesom">
                  <FontAwesomeIcon icon={faFemale} />
                </div>
                <p>MENS</p>
                <div className="right-arrow-men">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="dropdown-list-menu-men-list">
                  <div className="women-pack-list">
                    <div className="women-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a href="" className="men-fashion-image">
                          <img src={menCloth} alt="" />
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Coats
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Jackets
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Blazers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Trousers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Knitwear
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Sweetshirts
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          T-Shirt
                        </a>
                      </li>
                    </div>
                    <div className="men-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a href="" className="men-fashion-image">
                          <img src={menShoe} alt="" />
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Trainers
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Boots
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Heels
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Flats
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Platforms
                        </a>
                      </li>
                    </div>
                    <div className="men-cloth-list">
                      <li className="li-clothing">
                        <a className="women-slide-list" href="#">
                          {" "}
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a href="" className="men-fashion-image">
                          <img src={menCap} alt="" />
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Bags
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Bootpacks
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Belts
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Jwellery
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Hots & Beanie
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Purses
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faBuilding} />
              </div>

              <p>ABOUT US</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <p>SHIPPING</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faUndo} />
              </div>
              <p className="parag">RETURN</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <p>PAGE 404</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faBarChart} />
              </div>
              <p>SIZING GUIDE</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <p>FAQS</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>CONTACT US</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <p>MAINTENCE</p>
            </a>
          </li>
          <li>
            <a href="" className="setting">
              <div className="font-awesom">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <p>DOCUMENTATION</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="details">
        <div className="portfolio">
          <ul className="portfolio-list">
            <li className="port-list-main">
              <a href="" className="port-nav">
                HOME
              </a>
            </li>
            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  SHOP
                </a>
                <ul className="dropdown-list-shop">
                  <div className="shop">
                    <div className="shop-sub">
                      <li>
                        <a className="slide-list bold" href="#">
                          {" "}
                          Listing Styles
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Collections Type 1{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Collections Type 2
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          With Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          With Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Without Sidebar{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Without Sidebar Full Width
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Without Sidebar and Filters
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          In One Row
                        </a>
                      </li>
                    </div>
                    <div className="shop-sub">
                      <li>
                        <a className="slide-list bold" href="#">
                          Product Page Style
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Product 1
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Product 2
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Product 3
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Product 4{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Product Layout{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Tabs Full Width -- Example 1
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Tabs Full Width -- Example 2
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Tabs Full Width -- Example 3
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Three Columns
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Three Columns Reverse
                        </a>
                      </li>
                    </div>
                    <div className="shop-sub">
                      <li>
                        <a className="slide-list bold" href="#">
                          Product Page Types
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Standard Product{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Variable Product{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Grouped Product{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          New Product{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          Sale Product{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Sold Out Product
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Images by Variant
                        </a>
                      </li>
                    </div>
                    <div className="shop-sub">
                      <li>
                        <a className="slide-list bold" href="#">
                          Product Page Types
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Cart{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Account{" "}
                        </a>
                      </li>
                      <li>
                        <a className="slide-list" href="#">
                          {" "}
                          Register{" "}
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </div>

            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  PAGES
                </a>
                <ul className="dropdown-list-menu">
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Shipping and Returns{" "}
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Page 404
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Sizing Guide
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </div>

            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  BLOG
                </a>
                <ul className="dropdown-list-menu">
                  <li>
                    <a className="slide-list bold" href="#">
                      {" "}
                      Blog Style
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Standard without Sidebars{" "}
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Standard with Left Sidebars
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Standard with Right Sidebars
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Two Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Three Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list bold" href="#">
                      Post Type
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Standard
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Video
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Gallery
                    </a>
                  </li>
                </ul>
              </li>
            </div>

            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  PORTFOLIO
                </a>
                <ul className="dropdown-list-menu">
                  <li>
                    <a className="slide-list bold" href="#">
                      {" "}
                      Boxed Width
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Two Columns{" "}
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      Three Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Four Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list bold" href="#">
                      Full Width
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Three Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Four Columns
                    </a>
                  </li>
                  <li>
                    <a className="slide-list" href="#">
                      {" "}
                      Five Columns
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  WOMEN'S
                </a>
                <div className="women-list">
                  <ul className="dropdown-list-women">
                    <div className="women-top">
                      <div className="women-pack">
                        <div className="women-cloth">
                          <li>
                            <a className="slide-list bold" href="#">
                              {" "}
                              Clothing
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Coats
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Jackets
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Blazers
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Trousers
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Jeans
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Knitwear
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Sweetshirts
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              T-Shirt
                            </a>
                          </li>
                        </div>
                        <div className="women-cloth">
                          <li>
                            <a className="slide-list bold" href="#">
                              {" "}
                              Shoes
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Trainers
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Boots
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Heels
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Flats
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Platforms
                            </a>
                          </li>
                        </div>
                        <div className="women-cloth">
                          <li>
                            <a className="slide-list bold" href="#">
                              {" "}
                              Accessories
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Bags
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Bootpacks
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Belts
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              Jwellery
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Hots & Beanie
                            </a>
                          </li>
                          <li>
                            <a className="slide-list" href="#">
                              {" "}
                              Purses
                            </a>
                          </li>
                        </div>
                      </div>
                      <div className="women-other">
                        <a className="slide-list bold" href="#">
                          {" "}
                          Other Pages
                        </a>
                        <div className="women-products">
                          <OwlCarousel className="owl-theme" {...womenSlide}>
                            {womenDynamic.map((women) => {
                              return (
                                <div className="women-image">
                                  <div className="image-wrapper">
                                    <img
                                      key={`${women.img1}`}
                                      src={`${imagePath(women.img1)}`}
                                      className="image"
                                      alt="normal"
                                    />
                                    <img
                                      key={`${women.img2}`}
                                      src={`${imagePath(women.img2)}`}
                                      className="image-hover"
                                      alt="hover"
                                    />
                                  </div>
                                  <a href="" className="slide-list">
                                    {women.product}
                                  </a>
                                  <p className="product-price">
                                    ${women.price}
                                  </p>
                                </div>
                              );
                            })}
                          </OwlCarousel>
                        </div>
                      </div>
                    </div>

                    <div className="look">
                      <a className="look-sub">
                        <div className="look-sub-1">
                          <h2 className="look-head">Complete Your Look</h2>
                          <p>
                            The worlds most stylish women are buying right now
                          </p>
                        </div>
                      </a>
                      <a className="look-sub">
                        <div className="look-sub-2">
                          <h2 className="look-head">Complete Your Look</h2>
                          <p>
                            The worlds most stylish women are buying right now
                          </p>
                        </div>
                      </a>
                    </div>
                  </ul>
                </div>
              </li>
            </div>
            <div className="dropdown-list">
              <li className="port-list ">
                <a href="" className="port-nav">
                  MEN'S
                </a>
                <ul className="dropdown-list-men">
                  <div className="men-fashion">
                    <div className="men-pack">
                      <div className="men-cloth">
                        <li>
                          <a className="slide-list bold" href="#">
                            {" "}
                            Clothing
                          </a>
                        </li>
                        <li>
                          <a href="" className="men-fashion-image">
                            <img src={menCloth} alt="" />
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Coats
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Jackets
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Blazers
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Trousers
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Jeans
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Knitwear
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Sweetshirts
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            T-Shirt
                          </a>
                        </li>
                      </div>
                      <div className="men-cloth">
                        <li>
                          <a className="slide-list bold" href="#">
                            {" "}
                            Shoes
                          </a>
                        </li>
                        <li>
                          <a href="" className="men-fashion-image">
                            <img src={menShoe} alt="" />
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Trainers
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Boots
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Heels
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Flats
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Platforms
                          </a>
                        </li>
                      </div>
                      <div className="men-cloth">
                        <li>
                          <a className="slide-list bold" href="#">
                            {" "}
                            Accessories
                          </a>
                        </li>
                        <li>
                          <a href="" className="men-fashion-image">
                            <img src={menCap} alt="" />
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Bags
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Bootpacks
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Belts
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            Jwellery
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Hots & Beanie
                          </a>
                        </li>
                        <li>
                          <a className="slide-list" href="#">
                            {" "}
                            Purses
                          </a>
                        </li>
                      </div>
                    </div>
                    <div className="men-dresses">
                      {menDynamic.map((men, index) => {
                        return (
                          <a href="" className="men-dress-sub">
                            <div
                              key={`${men.src}`}
                              className="men-image-1"
                              style={{
                                backgroundImage: `url(${imagePath(
                                  `${men.src}`
                                )})`,
                              }}
                            ></div>
                            <h2 key={`${men.head}`} className="men-head">
                              {men.head}
                            </h2>
                            <p key={`${men.desc}`}>{men.desc}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </ul>
              </li>
            </div>
            <li className="port-list">
              <a href="" className="port-nav">
                RTL
              </a>
            </li>
          </ul>
          <div className="buy">
            <a href="" className="buy-theme">
              BUY THEME!
            </a>
          </div>
        </div>
        <div className="products">
          <div className="owl-product-main">
            <OwlCarousel className="owl-theme" {...product}>
              {ProductDynamic.map((product, index) => {
                return (
                  <div
                    className="first-product"
                    style={{
                      backgroundImage: `url(${imagePath(`${product.src}`)})`,
                    }}
                  >
                    <p className="first-one">{product.head}</p>
                    <h2 className="second-one">
                      {product.desc1} <br />
                      {product.desc2}
                    </h2>
                    <p>{product.para}</p>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>

          <a
            onMouseOver={yankaEnter}
            onMouseLeave={yankaLeave}
            className="second-product"
          >
            <h2 className="yanka-head">YANKA</h2>
            <h3>Created to grow </h3>
            <h3>Your Sale</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Theme;
