import React, { Fragment } from 'react'
import ReactStars from "react-rating-stars-component";


const SpecialProduct = () => {
    return (
        <Fragment>
            <div className="col-4">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src="Assets/images/camera.jpg" alt="watch" />
                        </div>
                        <div className="special-product-content">
                            <h5 className="brand"> Havels </h5>
                            <h6 className="title">
                                Samsung Galaxy Note10+ Mobile Phones; Sim...
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value="3"
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="price">
                                <span className="red-p"> 100 &nbsp; <strike> 200 </strike> </span>
                            </p>
                            <div className="discount-fill">
                                <p>
                                    <b> 5 Days </b>
                                </p>
                                <div className="d-flex gap-10">
                                    <span className='badge rounded-circle p-4 bg-alert-warning'> 1 </span>
                                    <span className='badge rounded-circle p-4 bg-alert-warning'> 1 </span>
                                    <span className='badge rounded-circle p-4 bg-alert-warning'> 1 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpecialProduct