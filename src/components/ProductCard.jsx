import React, { Fragment } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductData = [
    {
        id: '1',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "100"
    },
    {
        id: '2',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "200"
    },
    {
        id: '3',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    },
    {
        id: '4',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    },
    {
        id: '5',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    },
    {
        id: '6',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    },
    {
        id: '7',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    },
    {
        id: '8',
        image: "Assets/images/watch.jpg",
        hoverImg: "Assets/images/watch-1.png",
        brand: "Hawels",
        title: "Kids headphone bulk 10 pack multi colored for students",
        price: "340"
    }
]

const ProductCard = (props) => {
    // const [data, setData] = useState([]);
    // const [filter, setFilter] = useState(data);
    // const [loading, setLoading] = useState(false);
    // let componentMounted = true;
    const { grid } = props;
    let location = useLocation();
    console.log("Location::", location)

    // useEffect(() => {
    //     const getProduct = async () => {
    //         setLoading(true);
    //         const response = await fetch("https://64282d05161067a83b0898c5.mockapi.io/Products");
    //         if (componentMounted) {
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //             console.log("filter::", filter);
    //         }
    //         return () => {
    //             componentMounted = false;
    //         };
    //     };
    //     getProduct();
    // }, []);

    return (
        <Fragment>
            {
                ProductData.map((product) => (
                    <>
                        <div className="card__container">
                            <div className={`${location.pathname === "/store" ? `gr-${grid}` : ""}`}>
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
                                                {/* <img src={product.hoverImg} className='img-fluid' alt="product images" /> */}
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