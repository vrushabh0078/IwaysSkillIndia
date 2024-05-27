import React from 'react'
import './DrKalam.css'
import APJKalam from '../../Photos/APJKalam.png'

const DrKalam = () => {
  return (
    <>
        <div className="KalamContainer">
                            <div className="imageContainer">
                                <img src={APJKalam} alt="Dr. Kalam" />
                            </div>


                            <div className="textContainer">
                                <div className="NameHeading">
                                    <h2>Dr.A.P.J A. Kalam</h2>
                                </div>
                                <div className="subHeading">
                                    <h3>Former President of India</h3>
                                </div>

                                <div className="paragraph">
                                    <p>
                                        Dr. Kalam's vision for skill development in India 
                                        can inspire us to nurture and grow the evolving 
                                        skill development ecosystem in India. He believed 
                                        that the youth of India needs to be skill-enabled 
                                        and knowledge-enabled by fostering private sector 
                                        initiatives. He also emphasized the need to develop 
                                        sustainable systems in every domain so that fluctuations 
                                        in the world economy do not have a direct impact on the 
                                        Indian economy.
                                    </p>
                                </div>
                                <div className="social-icons">
                                    <ul>
                                        <li><button><i class="fa-brands fa-twitter"></i></button></li>
                                        <li><button><i class="fa-brands fa-facebook"></i></button></li>
                                        <li><button><i class="fa-brands fa-instagram"></i></button></li>
                                    </ul>
                                </div>
                            </div>
                    </div>


                {/* became a volunteer logic is here */}

                <section className="cta1">
                    <div className="Vcontainer">
                        <div className="cta_row">
                            <div className="cta-content">
                                <h2 className="impact">
                                    Make an impact. <br /> 
                                    Save lives.
                                </h2>
                            </div>
                            <div className="cta-buttons">
                                <a href="#" className="change">
                                  Make a Change
                                </a>
                                <a href="#section_4" className="volunteer-btn">
                                  <button>
                                      Become a volunteer
                                  </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default DrKalam
