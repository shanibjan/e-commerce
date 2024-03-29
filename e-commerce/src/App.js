import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/Theme/Theme";
import Dresses from "./Components/Dresses/Dresses";
import Products from "./Components/Products/Products";
import Collections from "./Components/Collections/Collections";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Components/Home/Home";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Create from "./Pages/Create";
import ViewProduct from "./Pages/viewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={Home} exact path='/' />
        </Routes>
        <Routes>
          <Route Component={Register} path="/user_register" />
        </Routes>
        <Routes>
          <Route  Component={Login} path="/user_login" />
        </Routes>
        <Routes>
          <Route  Component={Admin} path="/admin" />
        </Routes>
        <Routes>
          <Route  Component={Create} path="/create-product" />
        </Routes>
        <Routes>
          <Route  Component={ViewProduct} path="/view-product" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
