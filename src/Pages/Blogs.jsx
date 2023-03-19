import React, { Fragment } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'

const Blogs = () => {
    return (
        <Fragment>
            <Meta title={"Blogs"} />
            <BreadCrump title="Blogs" />
        </Fragment>
    )
}

export default Blogs