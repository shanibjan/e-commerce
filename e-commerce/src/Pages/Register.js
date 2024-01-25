import React from "react";
import './Register.css'
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="register">
        <h1>Create an Account</h1>
        <h2>Personal Information</h2>
        <div className="informations">
          <label htmlFor="">First Name</label>
          <br />
          <input type="text" placeholder="Enter Your First Name"/>
          <br />
          <label htmlFor="">Last Name</label>
          <br />
          <input type="text" placeholder="Enter Your Last Name" />
          <br />
          <label htmlFor="">E-mail</label>
          <br />
          <input name="email" placeholder="Your Email" title="Your Email" type="email" />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" placeholder="Password" />
        </div>
        <a href="" className="create">
          <p>CREATE</p>
        </a>
        <a href="" className="return-store">
          Or Return to Home
        </a>
      </div>
      <Footer />
      <Outlet />
    </>
  );
};

export default Register;
