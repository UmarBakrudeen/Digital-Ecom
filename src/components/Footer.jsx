import React, { Fragment } from "react";
// Icons
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="/Assets/images/newsletter.png" alt="newsletter" />
                <h2 className="text-white"> Sign In for Newsletter </h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4"> Contact Us </h4>
              <div>
                <address className="text-white fs-6">
                  No: 13, Ondriya Colony <br />
                  Thiruverumbur, Tiruchirappalli <br />
                  Tamil Nadu , India
                </address>
                <a
                  href="tel:+91 9865659501"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +91 9865659501
                </a>
                <a
                  href="mailto:thalaivaumar9501.s@gmail.com"
                  className="mt-3 d-block mb-0 text-white"
                >
                  digiworld@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="/" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Privacy Policy </Link>
                <Link className="text-white py-2 mb-1"> Refund Policy </Link>
                <Link className="text-white py-2 mb-1"> Shipping Policy </Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1"> Blogs </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Account </h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Search </Link>
                <Link className="text-white py-2 mb-1"> About Us </Link>
                <Link className="text-white py-2 mb-1"> FAQ </Link>
                <Link className="text-white py-2 mb-1"> Contact </Link>
                <Link className="text-white py-2 mb-1"> Size Chart </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Quick Links </h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Laptops </Link>
                <Link className="text-white py-2 mb-1"> Headphones </Link>
                <Link className="text-white py-2 mb-1"> Tablets </Link>
                <Link className="text-white py-2 mb-1"> Watches </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <footer className="py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-0 text-white">
                  &copy; {new Date().getFullYear()}: Powered by Black code
                </p>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </Fragment>
  );
};

export default Footer;
