import React from 'react'
import './Contact.css'
import useWebAnimations, { bounceInLeft, fadeIn } from "@wellyshen/use-web-animations";


function Contact() {
    const { ref: span } = useWebAnimations({ ...bounceInLeft });
    const { ref: img } = useWebAnimations({ ...fadeIn });


    return (
        <div className="root-div">
            <div className="contact">
                <div className="formBx">
                    <form ref={span}>
                        <h2>Contact us</h2>
                        <div className="inputBox">
                            <input type="text" name="name" required />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox">
                            <textarea required></textarea>
                            <span>Type Your Message here...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" name="" />
                        </div>
                    </form>
                </div>
                <div className="imgBx" ref={img}>
                <img src="https://i.ibb.co/DYTG39W/undraw-contact-us-15o2.png" alt="undraw-contact-us-15o2" />
                </div>
            </div>
        </div>
    )
}

export default Contact
