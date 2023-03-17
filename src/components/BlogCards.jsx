import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
    return (
        <Fragment>
            <div className="col-3">
                <div className="blog-card">
                    <div className="card-image">
                        <img src="Assets/images/blog-1.jpg" className="img-fluid" alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className="date"> 1 March, 2023</p>
                        <h5 className="title"> A beautiful sunday morning renaissance </h5>
                        <p className="desc"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores, velit sequi </p>
                        <Link to="/" className='button'>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogCards