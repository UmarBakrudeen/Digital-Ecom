import React, { Fragment } from 'react'
import BreadCrump from '../components/Store/BreadCrump'
import Meta from '../components/Store/Meta'
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'

const Contact = () => {
  return (
    <Fragment>
      <Meta title={"Contact"} />
      <BreadCrump title="Contact" />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31354.789399213812!2d78.76106736119144!3d10.784584455801593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf33a01787211%3A0xc8d02fbe926010!2sThiruverumbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1679141606668!5m2!1sen!2sin"
                className="border-0 w-100"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />


            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4"> Contact </h3>
                  <form action="" className='d-flex flex-column gap-20'>
                    <div>
                      <label htmlFor="" className='contact-label' > Name </label>
                      <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div>
                      <label htmlFor="" className='contact-label'> Email </label>
                      <input type="text" className="form-control" placeholder='Enter Email' />
                    </div>
                    <div>
                      <label htmlFor="" className='contact-label'> Mobile Number </label>
                      <input type="text" className="form-control" placeholder='Enter Mobile Number' />
                    </div>
                    <div>
                      <label htmlFor="" className='contact-label'> Comments </label>
                      <textarea
                        name=""
                        id=""
                        // style={{ height: "150px" }}
                        cols="30"
                        rows="10"
                        className='w-100 form-control '
                        placeholder='Comments'
                      />
                    </div>
                    <div>
                      <button className='button border-0'> Submit </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Get in touch with us
                  </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineHome className='fs-5' />
                        <address>
                          Thiruverumbur, TamilNadu, India
                        </address>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlinePhone className='fs-5' />
                        <a href="tel: +919865659501"> +91 98656 59501 </a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:digiworld.com"> digiworld@gmail.com </a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineInfoCircle className='fs-5' />
                        <a href="mailto:digiworld.com"> digiworld@gmail.com </a>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Contact
