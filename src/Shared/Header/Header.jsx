import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import './Header.scss';

// Icons
import { BsSearch } from "react-icons/bs";
import { BiUserCircle, BiCategory } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";
import { CiHome, CiShoppingCart, CiCircleList, CiHeart, CiDiscount1, CiGift, CiCircleQuestion, CiBookmark, CiCircleInfo } from "react-icons/ci";
import { IoReorderTwoOutline, IoWalletOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";



const Header = ({ cart, setCart }) => {
    const name = "Umar";

    const [isOpenmenu, setIsOpenmenu] = useState(false);

    const OpenMenu = () => {
        setIsOpenmenu(!isOpenmenu)
    }

    return (
        <Fragment>

            {/* Hamburger Menu */}

            <div className="responsive__header">
                <div className={classNames("sidenav-toggle", {
                    isOpenmenu: isOpenmenu,
                })} onClick={() => OpenMenu()} >
                    <div className="bars">
                        <div></div>
                    </div>
                </div>
                <div className="search__content">
                    <input type="text" placeholder="Search digi products.." />
                    <BsSearch className="icon" />
                </div>
                <div className="cart__content">
                    <CiShoppingCart className="icon__cart" />
                    <span className="cart__count">{ }</span>
                </div>
            </div>

            <header className="header-top-strip">
                <div className="container-xxl">
                    <div className="header__first">
                        <p> Free Shipping  Over 1000 INR & Free Returns </p>
                        <p> Hotline : <a href="tel:+91 9865659501"> +91 9865659501 </a> </p>
                    </div>
                </div>
            </header>

            <header className="header-upper">
                <div className="container-xxl">
                    <div className="header__second">
                        <Link to="/" className="logo">
                            {/* <h2>
                                <Link className="" to="/"> Digi World </Link>
                            </h2> */}

                            <img src="https://imgs.search.brave.com/LSUH0ky-RPdSNPzkj4DAgfpBDzObtY5qrAdMEfYHEyw/rs:fit:461:86:1/g:ce/aHR0cHM6Ly90aW12/aWVjMzY1LnZuL3Bp/Y3R1cmVzLzIwMTcv/MTAvMTIvY3NzMTUw/NzgwMjIzMi5qcGc"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </Link>
                        <div className="search__container">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle d-flex "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {/* <img src="Assets/images/menu.svg" alt="" /> */}
                                    <span className="d-inline-block">
                                        All Categories
                                    </span>
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <Link className="dropdown-item " to="/">
                                            Electionics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item " to="/">
                                            TV & Home Entertainment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item " to="/">
                                            Mobile & Accessories
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <input type="text" />
                            <BsSearch className="icon__search" />
                        </div>
                        <div className="second__right">
                            <div className="right__items">
                                <div>
                                    <Link to="/">
                                        <img src="/Assets/images/compare.svg" alt="compare" />
                                        <p>
                                            Compare <br /> Product
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="right__items">
                                <div>
                                    <Link to="/Whistle" >
                                        <img src="/Assets/images/wishlist.svg" alt="wishlist" />
                                        <p>
                                            Favorite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="right__items">
                                <div>
                                    <Link to="/login">
                                        <img src="/Assets/images/user.svg" alt="user" />
                                        <p>
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="right__items">
                                <div>
                                    <Link to="/">
                                        <img src="/Assets/images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark "> 0 </span>
                                            {/* <p> $ 500 </p> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header__slider">
                <div className="header__small__content">
                    <div className="hs__lists">
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1679501246_Mobiles__PC.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1679501223_TV__Audio.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1679501094_Appliances.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667193478_Top-Icons--fashion.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1679321261_TopIcons_Kitchenware.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668513461_Top-Icons_Home--Lifestyle.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675187977_Beauty.jpg" alt="mobile" />
                        </div>
                        <div className="hs__items">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1678460136_TopIcons_Travelsports.jpg" alt="mobile" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Menu Content */}
            {isOpenmenu ? (
                <div className="megamenu__container">
                    <div className="megamenu__content">
                        <div className="mm__header">
                            {/* <div className="logo">
                                LOGO
                            </div> */}
                            <div className="left">
                                {/* <img src="https://pbs.twimg.com/profile_images/1220597371479838720/OBrqoKSO_400x400.jpg" alt="" /> */}
                                <h3> Hello,  <span> {name}... </span> </h3>
                                <Link to="/login" className="account">
                                    <BiUserCircle className="icon__account" />
                                    <span> Sign In </span>
                                </Link>
                            </div>
                        </div>
                        <div className="mm__wrapper">
                            <div className="mm__lists">
                                <div className="mm__items">
                                    <CiHome />
                                    <span> Home </span>
                                </div>
                                <div className="mm__items">
                                    <BiCategory />
                                    <span> Shop By Category </span>
                                </div>

                                <h5> My Accounts </h5>
                                <div className="mm__items">
                                    <IoReorderTwoOutline />
                                    <span> My Orders  </span>
                                </div>
                                <div className="mm__items">
                                    <CiCircleList />
                                    <span> My List </span>
                                </div>
                                <div className="mm__items">
                                    <CiHeart />
                                    <span> Wishlist </span>
                                </div>
                                <div className="mm__items">
                                    <IoWalletOutline />
                                    <span> Wallet </span>
                                </div>
                                {/* <div className="mm__items">
                                    <IoCogOutline />
                                    <span> Setting </span>
                                </div> */}
                                <h5> Offers & More </h5>
                                <div className="mm__items">
                                    <RiCoupon2Line />
                                    <span> Offer Store </span>
                                </div>
                                <div className="mm__items">
                                    <CiDiscount1 />
                                    <span> Coupon Store </span>
                                </div>
                                <div className="mm__items">
                                    <CiGift />
                                    <span> Gift Store </span>
                                </div>
                                <h5> Help & Support </h5>
                                <div className="mm__items">
                                    <CiCircleQuestion />
                                    <span> FAQs/Need Help </span>
                                </div>
                                <div className="mm__items">
                                    <TbUsers />
                                    <span> About Us </span>
                                </div>
                                <div className="mm__items">
                                    <IoMdCall />
                                    <span> Contact Us </span>
                                </div>
                                <div className="mm__items">
                                    <CiBookmark />
                                    <span> Guide </span>
                                </div>
                                <div className="mm__items">
                                    <CiCircleInfo />
                                    <span> Caution Notice </span>
                                </div>

                            </div>
                            <div className="mm__logout">
                                <h5>Download the App</h5>
                                <div className="images">
                                    <img src="https://gomonad.com/images/btn-g.e6fd788e1f93d173dffdb759081cf06c.png" alt="" />
                                    <img src="https://gomonad.com/images/btn-i.2928803a8e87fbab2e101bc38aa1a758.png" alt="" />
                                </div>
                                <hr />
                                <div className="footer">
                                    <div className="logo">
                                        <h6> Digi World </h6>
                                        <p> Please note that you are accessing the BETA Version of
                                            <a href="/">
                                                digiworld.com
                                            </a> </p>
                                        <div className="info-section"> Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on
                                            <a href="mailto:thalaivaumar9501.s@gmail.com">
                                                developing@digiworld.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) : null}

        </Fragment>
    );
};

export default Header;
