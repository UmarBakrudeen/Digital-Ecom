import React, { Fragment, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { ProductData } from '../Common/data';

const ProductCard = (props) => {
    const [loading, setLoading] = useState(false);

    const { grid } = props;
    let location = useLocation();



    return (
        <Fragment>
            {loading && <Loading />}
            {ProductData.map((product) => (
                <>
                    <div className="card__container">
                        <div className={`${location.pathname === "/store" ? `gr-${grid}` : ""}`} id="product-item">
                            <div className="product-card">
                                <Link to={`/product/${product.id}`}>
                                    <div className="products">
                                        <div className="wishlist-icon">
                                            <Link>
                                                <img src="Assets/images/wish.svg" alt="wishlist" />
                                            </Link>
                                        </div>
                                        <div className="product-image">
                                            <img src={product.image} className='img-fluid' alt="product images" />
                                        </div>
                                        <div className="product-details">
                                            <h6 className="brand"> {product.brand} </h6>
                                            <h5 className="product-title">
                                                {product.title}
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className={`description ${grid === 12 || grid === 6 ? "d-block" : "d-none"}`}>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Accusantium quod sed minus perspiciatis modi doloremque facere? Atque dignissimos quisquam,
                                            </p>
                                            <p className="price"> Rs.{product.price} </p>
                                        </div>
                                        <div className="action-bar">
                                            <div className="d-flex flex-column gap-15">
                                                <Link>
                                                    <img src="Assets/images/prodcompare.svg" alt="Compare" />
                                                </Link>
                                                <Link>
                                                    <img src="Assets/images/view.svg" alt="View" />
                                                </Link>
                                                <Link>
                                                    <img src="Assets/images/add-cart.svg" alt="addcart" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link >
                            </div >
                        </div >
                    </div>

                </>
            ))
            }


        </Fragment >
    )
}

export default ProductCard