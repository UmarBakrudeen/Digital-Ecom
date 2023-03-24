import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import './Header.scss';

// Icons
import { BsSearch, BsFillCartPlusFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { CiHome, CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { IoCogOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";



const Header = () => {

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
                    <input type="text" />
                    <BsSearch className="icon" />
                </div>
                <div className="cart__content">
                    <BsFillCartPlusFill className="icon__cart" />
                    <span className="cart__count">0</span>
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
                            <h2>
                                <Link className=""> Digi World </Link>
                            </h2>
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
                                    <Link to="/">
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
                one
            </div>

            {/* Open Menu Content */}
            {isOpenmenu ? (
                <div className="megamenu__container">
                    <div className="megamenu__content">
                        <div className="mm__header">
                            <div className="logo">
                                LOGO
                            </div>
                            <div className="left">
                                <img src="https://pbs.twimg.com/profile_images/1220597371479838720/OBrqoKSO_400x400.jpg" alt="" />
                                <div className="details">
                                    <div className="name"> Umar Farook </div>
                                </div>
                            </div>
                        </div>
                        <div className="mm__wrapper">
                            <div className="mm__lists">
                                <div className="mm__items">
                                    <CiHome />
                                    <span> Home </span>
                                </div>
                                <div className="mm__items">
                                    <CiShoppingCart />
                                    <span> Cart </span>
                                </div>
                                <div className="mm__items">
                                    <CiHeart />
                                    <span> Favorite </span>
                                </div>
                                <div className="mm__items">
                                    <CiUser />
                                    <span> Accounts </span>
                                </div>
                                <div className="mm__items">
                                    <BiSupport />
                                    <span> Customer Support </span>
                                </div>
                                <div className="mm__items">
                                    <IoCogOutline />
                                    <span> Setting </span>
                                </div>
                            </div>
                        </div>

                        <div className="mm__logout">
                            <div className="mm__items">
                                <VscSignOut />
                                <span> Sign Out </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </Fragment>
    );
};

export default Header;
