import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import login from '../../assets/images/login.png'
import { IoEyeOff } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

import './Login.css'

const Login = () => {
  const [password,setPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="login-header">{
          signUp ? "Create Account" : "Welcome Back"
}</h2>
        <span>
          {
            signUp ? "Please fill in your details to create an account" :

          "Welcome back! Please enter your detail "
          }
          </span>
        {/* <h2></h2> */}
        <form>
          {/* <label>Email<label/> */}

         {
          signUp && (
            <>
             <>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </>
            
            </>
          )
         }
         

          <label>Email</label>
          <input type="email" placeholder="Enter your password" />
          <label>Password</label>
          <div className="password-filed">

          <input type= {password ? "text" : "password"} placeholder="Enter your password"></input>
          <span className="eye-off-on" onClick={()=>setPassword(!password)}>{
            password ? <FaRegEye/> : <IoEyeOff />
}</span>
          </div>
          <div className="remember-me">
            <div className="checkbox-sec">
              <input type="checkbox" />
              <span>Remember me </span>
            </div>
            <div className="forgot-section">
              <span>Forgot Password? </span>
            </div>
          </div>
          <div className="Button-section">
            {/* <Button></Button> */}
            <Button type="submit" className="sign-in-button" variant="contained">
              {
                signUp ? "Sign up" : " Register"
              }
            </Button>
            <Button type="submit" variant="text" className="google-btns">
                <FaGoogle /> Sign in with the Google
              
            </Button>
          </div>
          <p className="no-account">{
            signUp ? (
              <>
              <span>Already have an account?
                <span className="signup-link" onClick={()=>setSignUp(!signUp)}>Register for free!</span>
              </span>
              
              </>
            ):(
              <>
                Don't have an account <span className="signup-link" onClick={()=>setSignUp(!signUp)}>Sign up for free!</span>

              </>
            )
            }
          
          </p>
        </form>
      </div>
      <div className="image-section">
        <img  src= {login} alt="login-image"/>

      </div>
    </div>
  );
};

export default Login;
