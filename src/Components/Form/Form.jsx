import React from 'react'
import './Form.css'
import hrimage from '../../Photos/hrimage.png'


const Form = () => {
  return (
    <>
        <div className="contact-section">
                <div className="GetInTouch">
                    <h2>Get in Touch</h2>
                    <div class="contact-info">
                        <div className="contact-header">
                            <img src={hrimage} alt="Sima Sharma"/>
                            <div className='HRname'>
                                <strong>HR & Office Manager</strong>
                                <p>Sima Sharma</p>
                            </div>
                        </div>
                        <div className="other-info">
                            <h2>Contact Information</h2>
                            <p className='address'>
                                <i class="fa-sharp fa fa-location-dot"></i>
                                <a>Lavkush Nagar, Manewada, Nagpur, Maharashtra 440024</a>
                            </p>
                            <div className="num-mail">
                                <p>
                                    <i class="fa fa-phone"></i>
                                    9225-780-123
                                </p>
                                <p>
                                    <i class="fa fa-envelope"></i>
                                    <a href="mailto:support@iwaysindia.com">support@iwaysindia.com</a>
                                </p>
                            </div>
                            <button className='btn'>
                                Get Direction
                            </button>
                        </div>
                    </div>
                </div>


            {/* Form Logic */}

                <div className="form-container">

                    <form className='contact-form'>
                        <div className="contactheading">
                            <h2>Contact form</h2>
                            <p>
                                Or, you can just send an email: 
                                <a href="mailto:support@iwaysindia.com"> support@iwaysindia.com</a>
                            </p>
                        </div>
                        <div className="form-group">
                            <input type="text" id="fname" name="fname" placeholder="First name" required />
                            <input type="text" id="lname" name="lname" placeholder="Last name" required />
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <textarea id="message" name="message" placeholder="How can we help you?" rows="4" required></textarea>
                        </div>

                        <button className='btn' type="submit">
                            Send
                        </button>
                    </form>

                </div>



            </div>
    </>
  )
}

export default Form
