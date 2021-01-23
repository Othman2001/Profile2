import React from 'react'
import "../css/contact.css"
import { Button } from '@material-ui/core';
function  Contact() {
    return(
        <div className="contact">

            <div className="container-contact100">
                <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422"
                     data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>

                <div className="wrap-contact100">


                    <form className="contact100-form validate-form">
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Full Name:</span>
                            <input className="input100" type="text" name="name" placeholder="Enter full name" />
                                <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input"
                             data-validate="Valid email is required: ex@abc.xyz">
                            <span className="label-input100">Email:</span>
                            <input className="input100" type="text"
                                   name="email" placeholder="Enter email addess" />
                                <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Phone is required">
                            <span className="label-input100">Phone:</span>
                            <input className="input100" type="text" name="phone"
                                   placeholder="Enter phone number" />
                                <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Message is required">
                            <span className="label-input100">Message:</span>
                            <textarea className="input100" name="message" placeholder="Your Comment..."></textarea>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
						<span>
							Submit
							<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
						</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export  default  Contact
