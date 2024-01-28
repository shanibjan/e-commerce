import React from "react";
import './Register.css'
import { Outlet,Link,useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";


const Register = () => {
  const navigate=useNavigate()
  let userFirstName=useRef()
  let userLastName=useRef()
  let userEmail=useRef()
  let userPassword=useRef()
  const [userRegistration,setuserRegistration]=useState([])
  // const [lastName,setLastName]=useState('')
  // const [email,setEmail]=useState('')
  // const [password,setPassword]=useState('')



  useEffect(()=>{
    const fNameParse=JSON.parse(localStorage.getItem("user_registration"))
    if (fNameParse) setuserRegistration(fNameParse)
  },[])
  
  useEffect(()=>{
    localStorage.setItem("user_registration",JSON.stringify(userRegistration))
    
  },[userRegistration])




  const userCreate=()=>{
    let uFirstName=userFirstName.current.value
    let uLastName=userLastName.current.value
    let uEmail=userEmail.current.value
    let uPassword=userPassword.current.value
    console.log(uFirstName);
    console.log(uLastName);
    
    userFirstName.current.value=null
    userLastName.current.value=null
    setuserRegistration((fName)=>{
      return[...fName,{name:uFirstName,Lastname:uLastName,email:uEmail,password:uPassword}]
    })
    
   
    setTimeout(()=>{
      console.log("hi");
      window.alert('ji')
      navigate('/')
    },1000)
    
    


    
    // console.log(uLastName);
  }
 


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
          <input ref={userFirstName} type="text" placeholder="Enter Your First Name"/>
          <br />
          <label htmlFor="">Last Name</label>
          <br />
          <input  ref={userLastName} type="text" placeholder="Enter Your Last Name" />
          <br />
          <label htmlFor="">E-mail</label>
          <br />
          <input ref={userEmail} name="email" placeholder="Your Email" title="Your Email" type="email" />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input ref={userPassword} type="password" placeholder="Password" />
        </div>
        <a onClick={userCreate}   className="create">
          <p>CREATE</p>
        </a>
        <Link to='/' style={{textDecoration:"none"}}> <a href="" className="return-store">
          Or Return to Home
        </a></Link> 
      </div>
      <Footer />
      <Outlet />
    </>
  );
};

export default Register;
