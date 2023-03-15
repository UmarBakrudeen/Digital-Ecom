import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="/Assets/images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content">
                  <h4> SUPERCHARGED FOR PROS. </h4>
                  <h5> iPad S13+ Pro. </h5>
                  <p> </p>
                  <Link className="button"> BUY NOW </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Best Sake </h4>
                    <h5> iPad S13+ Pro. </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p> From 900 or 11000 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/Assets/images/service.png" alt="Services" />
                  <div>
                    <h6> Free Shipping </h6>
                    <p> From all order over 700 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/Assets/images/service-02.png" alt="Services" />
                  <div>
                    <h6> Daily Surprise Offers </h6>
                    <p> Save upto 25% off </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/Assets/images/service-03.png" alt="Services" />
                  <div>
                    <h6> Support </h6>
                    <p> Shop with an export </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/Assets/images/service-04.png" alt="Services" />
                  <div>
                    <h6> Affordable Prices </h6>
                    <p> Get Factory Default Price </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/Assets/images/service-05.png" alt="Services" />
                  <div>
                    <h6> Secure Payments </h6>
                    <p> 100% Producted </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories"> </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
