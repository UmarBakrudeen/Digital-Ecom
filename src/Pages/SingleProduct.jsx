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

const SingleProduct = (ProductData) => {
    console.log("ProductData", ProductData)
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
                        <div className="left__content">
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
                                        height: 2000,
                                        marginLeft: 10
                                    },
                                    lensStyle: {
                                        background: 'hsla(0, 0%, 100%, .3)',
                                        // border: '1px solid #ccc'
                                        height: 1000
                                    }
                                }} />
                            </div>
                        </div>
                        <div className="right__content">
                            <div className="title"> Fujitsu UH-X 12th Gen Intel Evo Core i7 13.3 inch(33cm) FHD IPS 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows11/Office/Iris Xe</div>
                            <div className="texts">
                                <div className="brand">
                                    <div className="name"> Brand: </div>
                                    <div className="text"> Noise Fit </div>
                                </div>
                                <div className="brand">
                                    <div className="name"> Condition: </div>
                                    <div className="text"> New </div>
                                </div>
                            </div>

                            <div className="footer">
                                <div className="price">  ₹1,990 </div>
                                <div className="add-cart">
                                    <button className='btn-add'> - </button>
                                    <span> 1 </span>
                                    <button className='btn-add'> + </button>
                                    <button className="btn-addcart"> Add to cart </button>
                                </div>
                            </div>
                            <div className="desc">
                                <h5> Description </h5>
                                Fujitsu UH-X 12th Gen Intel Evo Core i7 13.3 inch(33cm) FHD IPS 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows11/Office/Iris Xe</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SingleProduct