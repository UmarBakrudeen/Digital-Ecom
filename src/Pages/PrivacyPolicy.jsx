import React, { Fragment } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'

const PrivacyPolicy = () => {
    return (
        <Fragment>
            <Meta title={"Privacy Policy"} />
            <BreadCrump title="Privacy Policy" />
            <div className="privacy-policy py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                                <h3> PRIVACY POLICY </h3>
                                <h2> Last updated: April 1st, 2023.</h2>
                                <ul>
                                    <li>
                                        We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how digiworld Seller Services Private Limited and its affiliates including digiworld.com, Inc. (collectively "Digiworld") collect and process your personal information through Digi World websites, devices, products, services, online marketplace and applications that reference this Privacy Notice (together "Digi World Services").
                                    </li>
                                    <li>
                                        By using Digiworld Services you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Notice, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes set out in this Privacy Notice.
                                    </li>
                                    <li>
                                        Personal information subject to this Privacy Notice will be collected and retained by Digiworld, with a registered office at 8th floor, Brigade Gateway Tiruchirappalli, TamilNadu India.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PrivacyPolicy