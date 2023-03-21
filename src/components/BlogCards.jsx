import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BlogData = [
    {
        id: 1,
        img: "Assets/images/blog-1.jpg",
        date: '1 March, 2023',
        title: 'A beautiful sunday morning renaissance ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        img: "Assets/images/blog-1.jpg",
        date: '1 March, 2023',
        title: 'A beautiful sunday morning renaissance ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        img: "Assets/images/blog-1.jpg",
        date: '1 March, 2023',
        title: 'A beautiful sunday morning renaissance ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 4,
        img: "Assets/images/blog-1.jpg",
        date: '1 March, 2023',
        title: 'A beautiful sunday morning renaissance ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const BlogCards = () => {
    return (
        <Fragment>
            <div className="blog__card__container">
                <div className="blog__cards">
                    {
                        BlogData.map((data) => (
                            <div className="blog-card">
                                <div className="card-image">
                                    <img src={data.img} className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <p className="date"> {data.date} </p>
                                    <h5 className="title"> {data.title} </h5>
                                    <p className="desc"> {data.content} </p>
                                    <Link to="/" className='button'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default BlogCards