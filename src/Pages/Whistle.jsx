import React, { Fragment } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'
const Whistle = () => {
    return (
        <Fragment>
            <Meta title={"Whistle"} />
            <BreadCrump title="Whistle" />

            <div className="whistle wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="whistlist-card w-100 position-relative">
                                <img src="Assets/images/cross.svg" alt="cross"
                                    className='position-absolute cross img-fluid'
                                />
                                <div className="whistlelist-card-image">
                                    <img src="Assets/images/watch.jpg" className='w-100 img-fluid' alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title"> HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD </h5>
                                    <h6 className="price">  ₹ 53,990 </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Whistle