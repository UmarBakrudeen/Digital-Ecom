import React, { Fragment } from "react";
import './Footer.scss';
// Icons
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer__header__section">
                <div className="container-xxl">
                    <div className="footer__header">
                        <div className="left">
                            <div className="left__items">
                                <img src="/Assets/images/newsletter.png" alt="newsletter" />
                                <h2> Sign In for Newsletter </h2>
                            </div>
                        </div>
                        <div className="right">
                            <input type="text" placeholder="Enter your Email" />
                            <button className="btn-send"> Send Email </button>
                        </div>
                    </div>
                </div>

            </footer>
            <footer>
                <div className="container-xxl">
                    <div className="links__container">
                        <div className="links__lists">
                            <div className="links__items">
                                <h3> Contact Us  </h3>
                                <div>
                                    <address>
                                        No: 13, Ondriya Colony <br />
                                        Thiruverumbur, Tiruchirappalli <br />
                                        Tamil Nadu , India
                                    </address>
                                    <a href="tel:+91 9865659501" >
                                        +91 9865659501
                                    </a>
                                    <a
                                        href="mailto:thalaivaumar9501.s@gmail.com" >
                                        digiworld@gmail.com
                                    </a>
                                    <div className="social_icons">
                                        <a href="/" className="color-white">
                                            <BsLinkedin className="social__icons" />
                                        </a>
                                        <a href="/" className="color-white">
                                            <BsGithub className="social__icons" />
                                        </a>
                                        <a href="/" className="color-white">
                                            <BsYoutube className="social__icons" />
                                        </a>
                                        <a href="/" className="color-white">
                                            <BsInstagram className="social__icons" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="links__items">
                                <h3>  Information  </h3>
                                <div className="footer-links">
                                    <Link to="/privacy-policy" > Privacy Policy </Link>
                                    <Link to="/refund-policy" > Refund Policy </Link>
                                    <Link to="/" > Shipping Policy </Link>
                                    <Link to="/" >Terms & Conditions</Link>
                                    <Link to="/" > Blogs </Link>
                                </div>
                            </div>
                            <div className="links__items">
                                <h3>  Account  </h3>
                                <div className="footer-links">
                                    <Link to="/privacy-policy" > Search </Link>
                                    <Link to="/refund-policy" > About Us </Link>
                                    <Link to="/" > FAQ </Link>
                                    <Link to="/" > Contact </Link>
                                    <Link to="/" > Size Chart </Link>
                                </div>
                            </div>
                            <div className="links__items">
                                <h3>  Quick Links  </h3>
                                <div className="footer-links">
                                    <Link to="/privacy-policy" > Electronics </Link>
                                    <Link to="/refund-policy" > Furnitures </Link>
                                    <Link to="/" > Home and Business </Link>
                                    <Link to="/" > Smart Phones and Watches </Link>
                                    <Link to="/" > Laptops </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer>
                <div className="container-xxl">
                    <div className="footer__copy">
                        <p className="text-center mb-0 color-white">
                            &copy; {new Date().getFullYear()}: Powered by Black code
                        </p>
                        <p className="text-center mb-0 color-white">
                            Developed and maintained by ThalaiavUmar &#128293;
                        </p>

                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
