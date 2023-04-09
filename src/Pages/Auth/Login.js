import React, { Fragment, useState } from "react";
import "./Login.scss";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Shared/Reusable/Input";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import Loading from "../../Shared/Loading/Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        toast.success("Login Successfully ");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // Login With Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      {loading && <Loading />}
      <div className="login__container">
        <div className="login__content">
          <div className="login__wrapper">
            <form className="left" onSubmit={loginUser}>
              <h3> Sign In </h3>
              <p> Please login to your account </p>
              <div className="field">
                <Input
                  label="Email"
                  type="text"
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="bx bx-envelope"></i>
              </div>
              <div className="field">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={password}
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

              <Link to="/ " className="login__fp link">
                Forgot Password?
              </Link>
              <button className="btn__signin" type="submit" onClick={loginUser}>
                Sign In
              </button>
              <div className="already__acc">
                Don’t have an account?
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </div>
              <h4> Or sign up with </h4>
              <div className="login__auth">
                <div className="google" onClick={signInWithGoogle}>
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

export default Login;
