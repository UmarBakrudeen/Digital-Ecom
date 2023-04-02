import React, { Fragment, useState } from "react";
import "./Login.scss";

// import LoginImg from "../../Assets/Images/login.jpg";
import { Link } from "react-router-dom";
import Input from "../../Shared/Reusable/Input";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>
      <div className="login__container">
        <div className="login__content">
          <div className="login__wrapper">
            <div className="left">
              <h3> Sign In </h3>
              <p> Please login to your account </p>
              <div className="field">
                <Input
                  label="Email"
                  type="text"
                  placeholder="Enter your email address"
                />
                <i className="bx bx-envelope"></i>
              </div>
              <div className="field">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <i className="bx bx-show"></i>
                  ) : (
                    <i className="bx bxs-low-vision"></i>
                  )}
                </div>
              </div>

              <Link to="/ " className="login__fp link">
                Forgot Password?
              </Link>
              {/* <Link to="/home"> */}
              <button className="btn__signin">Sign In</button>
              {/* </Link> */}
              <div className="already__acc">
                Don’t have an account?
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </div>
              <h4> Or sign up with </h4>
              <div className="login__auth">
                <div className="google">
                  <img
                    src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/google.png"
                    alt=""
                  />
                  <div className="text"> Sign Up using Google </div>
                </div>
                <div className="google">
                  <img
                    src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/facebook.png"
                    alt=""
                  />
                  <div className="text"> Sign Up using Facebook </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="http://fleet.jan7tech.com/static/media/login.064e84ba5d94471ab675.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
