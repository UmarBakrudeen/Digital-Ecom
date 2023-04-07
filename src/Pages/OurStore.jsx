import React, { Fragment, useState } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <Fragment>
            <Meta title={"Our Store"} />
            <BreadCrump title="Our Store" />

            <div className="store-wrapper home-wrapper-2 py-5" >
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'> Shop By Categories </h3>
                                <div>
                                    <ul>
                                        <li> Watch </li>
                                        <li> TV </li>
                                        <li> Camera </li>
                                        <li> Laptop </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'> Filter By  </h3>
                                <div>
                                    <h5 className="sub-title"> Availability </h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'> Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating mb-3">
                                            <input type="text"
                                                className='form-control'
                                                id="floatingInput"
                                                placeholder='From'
                                            />
                                            <label htmlFor="floatingInput">
                                                From
                                            </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text"
                                                className='form-control'
                                                id="floatingInput1"
                                                placeholder='To'
                                            />
                                            <label htmlFor="floatingInput1">
                                                To
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'> Colors </h5>
                                    <div>
                                        <div className="d-flex flex-wrap">
                                            <ul className="colors ps-0">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'> Size </h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="color-1" />
                                            <label htmlFor='' className='form-check-label' >
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                M (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                L (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                XL (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value="" id="" />
                                            <label htmlFor='' className='form-check-label' >
                                                XXL (5)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'> Product Tags </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Head Phones
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptops
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile Phones
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speakers
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Redmi
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Bluetooth Headphone
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'> Random Product </h3>
                                <div>
                                    <div className="random-products mb-3 pb-3 d-flex gap-15">
                                        <div className="w-50">
                                            <img src="Assets/images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5> Kids headphone bulk 10 pack multi colored for students </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b> Rs.2000 </b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex gap-15">
                                        <div className="w-50">
                                            <img src="Assets/images/tv.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5> Kids headphone bulk 10 pack multi colored for students </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b> Rs.2000 </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='d-block' style={{ width: "100px" }}> Sort By:</p>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="manual"> Featured </option>
                                            <option value="best-selling" selected="selected"> Best Selling </option>
                                            <option value="title-ascending" selected="selected"> Alphabetically , A-Z </option>
                                            <option value="title-descending" selected="selected"> Alphabetically , Z-A </option>
                                            <option value="price-ascending"> Price , Low to High </option>
                                            <option value="price-descending"> Price , High to Low </option>
                                            <option value="created-ascending"> Date , Old to New  </option>
                                            <option value="created-descending"> Date , New to Old </option>
                                        </select>
                                    </div>

                                    <div className="d-flex align-items-center gap-10 grid">
                                        <p className="totalproducts"> 21 Products </p>
                                        <div className="d-flex gap-10 align-items-center">
                                            <img onClick={() => setGrid(3)} src="Assets/images/gr4.svg" className='d-block img-fluid' alt="" />
                                            <img onClick={() => setGrid(4)} src="Assets/images/gr3.svg" className='d-block img-fluid' alt="" />
                                            {/* <img onClick={() => setGrid(6)} src="Assets/images/gr2.svg" className='d-block img-fluid' alt="" />
                                            <img onClick={() => setGrid(12)} src="Assets/images/gr.svg" className='d-block img-fluid' alt="" /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OurStore