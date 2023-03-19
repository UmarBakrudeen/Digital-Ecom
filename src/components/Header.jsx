import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <Fragment>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="color-white mb-0">
                Free Shipping Over 1000 INR & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end color-white">
                Hotline: <a href="tel:+91 9865659501"> +91 9865659501 </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="color-white"> Digi World </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 color-white">
                    <img src="/Assets/images/compare.svg" alt="compare" />
                    <p>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/Whistle" className="d-flex align-items-center gap-10 color-white">
                    <img src="/Assets/images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 color-white">
                    <img src="/Assets/images/user.svg" alt="user" />
                    <p>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 color-white">
                    <img src="/Assets/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark "> 0 </span>
                      <p> $ 500 </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="Assets/images/menu.svg" alt="" />
                      <span className="me-3 d-inline-block">
                        Show Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item color-white" to="/">
                          Electionics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item color-white" to="/">
                          TV & Home Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item color-white" to="/">
                          Mobile & Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/store"> Our Store </NavLink>
                    <NavLink to="/blogs"> Blogs </NavLink>
                    <NavLink to="/contacts"> Contact </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
