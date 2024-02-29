import React from "react";
import {useLocation} from 'react-router-dom';
import Collections from "../Collections/Collections";
import Dresses from "../Dresses/Dresses";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Theme from "../Theme/Theme";

function Home() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Navbar userName={location}/>
      <Theme />
      <Dresses />
      <Products userName={location} />
      <Collections />
      <Reviews />
      <Footer />
      
    </div>
  );
}

export default Home;
