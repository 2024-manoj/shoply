import { Button } from "@mui/material";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import login from '../../assets/images/login.png'
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="login-header">Welcome Back</h2>
        <span>Welcome back! Please enter your detail </span>
        {/* <h2></h2> */}
        <form>
          {/* <label>Email<label/> */}
          <label>Name</label>
          <input type="name" placeholder="Enter your name "/>

          <label>Email</label>
          <input type="email" placeholder="Enter your password" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password"></input>
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
              Sign in
            </Button>
            <Button type="submit" variant="text" className="google-btns">
                <FaGoogle /> Sign in with the Google
              
            </Button>
          </div>
          <p className="no-account">
            Don't have an account <span className="signup-link">Sign up for free!</span>
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
