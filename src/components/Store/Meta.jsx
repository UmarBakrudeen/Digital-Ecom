import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'


const Meta = (props) => {
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title> {props.title} </title>
            </Helmet>
        </Fragment>
    )
}

export default Meta