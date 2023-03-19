import React, { Fragment, useState } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'

import ReactImageMagnify from 'react-image-magnify';

const images = [
    'Assets/images/watch.jpg',
    'Assets/images/watch-1.png',
    'Assets/images/tv.jpg',
    'Assets/images/camera.jpg'
]


const SingleProduct = () => {
    const [img, setImg] = useState(images[0])

    const hoverHandle = (images) => {
        setImg(images)
    }
    return (
        <Fragment>
            <Meta title={"Product Details"} />
            <BreadCrump title="Product Details" />

            <div className="single-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="single-product">
                        <div className="row">
                            <div className="col-6 d-flex gap-30 left__content">
                                <div className="img__list d-flex flex-column gap-10">
                                    {
                                        images.map((image, i) => (
                                            <div className="img__wrap" key={i} onClick={() => hoverHandle(image, i)}>
                                                <img src={image} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="right__image">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Product',
                                            isFluidWidth: true,
                                            src: img
                                        },
                                        largeImage: {
                                            src: img,
                                            width: 1200,
                                            height: 1800,
                                            marginLeft: 200
                                        },
                                        lensStyle: {
                                            background: 'hsla(0, 0%, 100%, .3)',
                                            // border: '1px solid #ccc'
                                            height: 300
                                        }
                                    }} />
                                </div>
                            </div>
                            <div className="col-6 right__content">
                                <div className="title"> Fujitsu UH-X 12th Gen Intel Evo Core i7 13.3 inch(33cm) FHD IPS 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows11/Office/Iris Xe</div>
                                <div className="desc"> Fujitsu UH-X 12th Gen Intel Evo Core i7 13.3 inch(33cm) FHD IPS 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows11/Office/Iris Xe </div>
                                <div className="price">  ₹99,990 </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default SingleProduct