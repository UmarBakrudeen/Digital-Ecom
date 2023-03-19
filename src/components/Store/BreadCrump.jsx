import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BreadCrump = (props) => {
    const { title } = props;
    return (
        <Fragment>
            <div className="breadcrumb py-4 mb-0">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center'>
                                <Link to="/" className=''> Home </Link> / {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BreadCrump