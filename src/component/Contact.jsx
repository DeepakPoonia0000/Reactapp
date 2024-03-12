import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div>
            <div className="contact-headingtop">
                <div className="contact-heading">
                    <h6>Contact</h6>
                    <h2>Get In Touch With Me</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. rerum commodi corrupti, temporibus non quam.</p>
                </div>
            </div>
            <div className="contact-detailstop">
                <div className="contact-details">
                    <div className="contact-detailsleft">
                        <div className="contact-detailshead">
                            <h6>Available 24/7</h6>
                            <h1>Get In Touch</h1>
                        </div>
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="password" placeholder='Choose a Password' />
                        <input type="text" placeholder='Message' />
                        <button>Send Message</button>
                    </div>



                    <div className="contact-detailsright">
                        <div>
                            <h2>Location</h2>
                            <p>VPO Satrod Kalan</p>
                            <hr />
                        </div>
                        <div>
                            <h2>Phone Number</h2>
                            <p>123 - 4567 - 890</p>
                            <hr />
                        </div>
                        <div>
                            <h2>Email Address</h2>
                            <p>information@gmail.com</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>


            
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6972.192113857675!2d75.80973029120499!3d29.10284537597604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391236a3977ec709%3A0xcb3d379cc61a2bc5!2sBadi%20Satrod%2C%20Haryana%20125006!5e0!3m2!1sen!2sin!4v1710237763335!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
    )
}
