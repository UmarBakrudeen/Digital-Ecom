import React, { Fragment, useState, useEffect } from "react";
import "./App.css";

// style Files
import "./components/style.scss";
import "./Assets/Styles/Home.scss";
import "./Assets/Styles/Common.scss";

// Toast Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore";
import Blogs from "./Pages/Blogs";
import Whistle from "./Pages/Whistle";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import SingleProduct from "./Pages/SingleProduct";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/whistle" element={<Whistle />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
