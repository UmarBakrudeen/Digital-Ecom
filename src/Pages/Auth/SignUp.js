import React, { Fragment, useState } from "react";
import "./Login.scss";

import { Link } from "react-router-dom";
import Input from "../../Shared/Reusable/Input";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <Fragment>
      <div className="login__container">
        <div className="login__content">
          <div className="login__wrapper">
            <form className="left" onSubmit={RegisterUser}>
              <h3> Create an Account </h3>
              <p> Continue where you left off </p>
              <div className="field">
                <Input
                  label="Full Name"
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
                <i className="bx bx-envelope"></i>
              </div>
              <div className="field">
                <Input
                  label="Email"
                  type="text"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <i className="bx bx-envelope"></i>
              </div>
              <div className="field">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <i className="bx bx-show"></i>
                  ) : (
                    <i className="bx bxs-low-vision"></i>
                  )}
                </div>
              </div>
              <button type="submit" className="btn__signin">
                Sign Up
              </button>
              <div className="already__acc">
                Already a user? <Link to="/login"> Sign In </Link>
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
            </form>
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

export default SignUp;
