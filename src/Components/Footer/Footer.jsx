import React from 'react'
import './Footer.css'
import logo from '../../Photos/logo.png'

const Footer = () => {
  return (
        <>
            <div>
                <footer className="footer-main">

                    <img src={logo} alt="" />

                    <div className="allservice">
                        <div className="quick-links">
                            <h3 className="footer-service">
                                Quick links
                            </h3>
                        </div>

                        <div class="footer-content">
                            
                            <ul>
                                
                                <li>
                                    <a>Our Story</a>
                                </li>
                                <li>
                                    <a>Newsroom</a>
                                </li>
                                <li>
                                    <a>Services</a>
                                </li>
                                <li>
                                    <a>Became a Skillpreneuer</a>
                                </li>
                                <li>
                                    <a>Partner with us</a>
                                </li>
                            </ul>


                        </div>
                    </div>

                    <div className="all-contact">
                        <div className="contact">
                            <h3>
                                Contact Infomation
                            </h3>
                        </div>
                        <div className="getInTouch">
                            <ul className="info">
                                <li>
                                    <i class="fa fa-phone"></i>  
                                    <a>91-9225780123</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope"></i>
                                    <a href="mailto:support@iwaysindia.com ">support@iwaysindia.com</a>
                                </li>
                                <p>
                                    <i class="fa-sharp fa fa-location-dot"></i>
                                     Reg.office : 301, HOUSE NO 587,
                                    <p>SEC 5 SANPADA NAVI MUMBAI</p>
                                </p>
                            </ul>
                            <button className='btn'>
                                Get Direction
                            </button>
                        </div>
                    </div>
                </footer>

            </div>


            <div className="end-footer">
                <div className="copyright">
                    <a>Copyright © 2023 Iways Skill India Version 2.0: Ecstasy</a>
                </div>
                <div className="share-icon">
                    <ul>
                        <li><button><i class="fa-brands fa-twitter"></i></button></li>
                        <li><button><i class="fa-brands fa-facebook"></i></button></li>
                        <li><button><i class="fa-brands fa-instagram"></i></button></li>
                        <li><button><i class="fa-brands fa-linkedin"></i></button></li>
                        <li><button><i class="fa-brands fa-youtube"></i></button></li>
                    </ul>
                </div>
            </div>

            
        </>
  )
}

export default Footer
