import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";


function Login() {
  const location = useLocation();
  const email = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState([]);

  
  
  
  

 

  const userLoginClick = () => {
    var IsLoggedIn = false;
    let uEmail = email.current.value;
    let uPassword = userPassword.current.value;
    email.current.value = null;
    setUserLogin(() => {
      return { email: uEmail, password: uPassword };
    });
   
    const fNameParse = JSON.parse(localStorage.getItem("user_registration"));
    console.log(fNameParse);
    if(fNameParse !=null){
      fNameParse.map((userDetails) => {
        if (uEmail == userDetails.email && uPassword == userDetails.password ) {
          console.log(userDetails.name);
          navigate("/", { state: { name: userDetails.name } });
          IsLoggedIn = true;
          window.alert("success");
        }
        
      });
  
      if (IsLoggedIn == false ) {
        window.alert("failed");
      }
    }else{
      window.alert('No user found')
    }
    
  };
  return (
    <>
      <Header />
      <Navbar userName={location} />
      <div className="register">
        <h1>Login Account</h1>
        <h2>Personal Information</h2>
        <Link to="/user_register" style={{ textDecoration: "none" }}>
          {" "}
          <a href="" className="return-store">
            Or Signup
          </a>
        </Link>
        <div className="informations">
          <label htmlFor="">E-mail</label>
          <br />
          <input
            ref={email}
            name="email"
            placeholder="Your Email"
            title="Your Email"
            type="email"
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input ref={userPassword} type="password" placeholder="Password" />
          <br />
          
        </div>
        <a onClick={userLoginClick} className="create">
          <p>LOGIN</p>
        </a>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <a href="" className="return-store">
            Or Return to Home
          </a>
        </Link>
        {}
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default Login;
