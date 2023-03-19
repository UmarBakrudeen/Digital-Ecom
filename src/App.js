import React, { Fragment } from "react";
import "./App.css";

// style Files
import "./components/style.scss";
import "./Assets/Styles/Home.scss";
import "./Assets/Styles/Common.scss";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore";
import Blogs from "./Pages/Blogs";
import Whistle from "./Pages/Whistle";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/whistle" element={<Whistle />} />
            <Route path="/singleProduct" element={<SingleProduct />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
