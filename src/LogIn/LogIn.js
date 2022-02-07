import React, { useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import "./logIn.css";
import { useNavigate } from 'react-router';
import { logIn, useAuth } from '../Firebase';
import img2 from "./Images/2.png"

const LogIn = () => {

  const navigate = useNavigate();

  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const mobileRef = useRef();


  async function handelLogIn() {

    if (cpasswordRef.current.value === passwordRef.current.value) {
      try {
        await logIn(emailRef.current.value, passwordRef.current.value);
        localStorage.setItem('user_mobile', mobileRef.current.value);
        alert("Logged-In successfully");
        navigate("/userHome")
      } catch {
        alert("Sign-up yourself in order to enter");
        window.location.reload();
      }
    }
    else if (cpasswordRef.current.value != passwordRef.current.value) {
      alert("Wrong Password \n\n  Try Again");
      window.location.reload();
    }

  }



  return (
    <div>
      <Nav />
      <div className="login-container">

        <div className="signin-box">
          <img src={img2} className="img2" />
          <div className="email-txt-box">
            <input ref={emailRef} name="email" className="inp-txt email" placeholder="email" />
          </div>
          <div className="password-txt-box">
            <input type="password" ref={passwordRef} name="password" className="inp-txt password" placeholder="Password" />
            <input type="password" ref={cpasswordRef} name="cpassword" className="inp-txt cpassword" placeholder="Confirm Password" />
          </div>
          <div className="details-txt-box">
            <input className="inp-txt mobile-no-login" name="mobile" ref={mobileRef} placeholder="Mobile Number" />
          </div>
          <button className="logIn-btn" onClick={handelLogIn}>LogIn</button>
        </div>
      </div>
      <p className="signup-txt">Not Having an account <a href="/signUp">Sign-Up Now</a></p>
    </div>
  )
};

export default LogIn;
