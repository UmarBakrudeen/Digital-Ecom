import React, { Fragment } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
    return (
        <Fragment>
            <div className="col-6 mb-3">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between align-items-center gap-30">
                        <div>
                            <img src="Assets/images/watch.jpg" style={{ height: '190px' }} alt="watch" />
                        </div>
                        <div className="special-product-content">
                            <h5 className="brand"> Havels </h5>
                            <h6 className="title">
                                Samsung Galaxy Note10+ Mobile Phones; Sim...
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value="4"
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="price">
                                <span className="red-p"> 100 &nbsp; <strike> 200 </strike> </span>
                            </p>
                            <div className="discount-fill d-flex align-items-center gap-10">
                                <p>
                                    <b> 5 Days </b>
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className='badge rounded-circle p-3 bg-danger'> 1 </span> :
                                    <span className='badge rounded-circle p-3 bg-danger'> 1 </span> :
                                    <span className='badge rounded-circle p-3 bg-danger'> 1 </span>
                                </div>
                            </div>
                            <div className="prod-count my-3">
                                <p> Product : 5 </p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className='button'> Add to Cart </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default SpecialProduct