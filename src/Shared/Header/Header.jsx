import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import './Header.scss';

// Icons
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <Fragment>
            <header className="header-top-strip">
                <div className="container-xxl">
                    <div className="header__first">
                        <p> Free Shipping  Over 1000 INR & Free Returns </p>
                        <p> Hotline : <a href="tel:+91 9865659501"> +91 9865659501 </a> </p>
                    </div>
                </div>
            </header>

            <header>
                <div className="container-xxl">
                    <div className="header__second">
                        <div className="logo">
                            Digi World
                        </div>
                        <div className="search__container">
                            <input type="text" placeholder="search here..." />
                            <BsSearch />
                        </div>
                        <div className="second__right">

                        </div>
                    </div>
                </div>
            </header>

        </Fragment>
    );
};

export default Header;
