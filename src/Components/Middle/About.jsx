import React from 'react';
import './About.css';
import cabinet from '../../Photos/cabinet.png'

const About = () => {
  return (
    <>
        <div className="MidSection">
                {/* Cabinet Image */}
                <div className="cabinet">
                    <img src={cabinet} alt="cabinet" />
                </div>


                {/* Cabinet story and mission */}
                <div className="cabinetText">
                    {/* Our story text here */}
                        <div className="Story1">
                            <div className="storyHead">
                                <h1>Our Story</h1>
                                <h2>IWAYS INDIA, Pure skill based Organization</h2>
                            </div>
                            <div className="Storytext">
                                <p>Iways Skill India is registered under the 
                                    Companies Act, 2013, and is engaged in the 
                                    Education & Learning along with skill based 
                                    professional sector in registred at Navi Mumbai.
                                    We are committed to our mission is to empower 
                                    individuals with the skills and knowledge they 
                                    need to succeed in their careers and achieve 
                                    their goals.
                                </p>
                            </div>
                        </div>

                        

                    {/* Mission text here */}
                    <div className="missionAndNumbers">
                        <div className="missionText">
                            <div className="mission1">
                                <h2>Our Mission</h2>
                                <p>Iways India is committed to providing quality training 
                                    and development programs to individuals and organizations. 
                                    Our mission is to empower individuals with the skills and 
                                    knowledge they need to succeed in their careers and achieve 
                                    their goals.
                                </p> 
                                <div className="mission2">
                                    <div className="twoIcon">
                                        <div className="icon1">
                                            <i className="fa-regular fa-circle-check"></i>
                                            <span>Read more..</span>
                                        </div>
                                        <div className="icon1">
                                            <i className="fa-regular fa-circle-check"></i>
                                            <span>Join our Mission</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="numbers">
                            <div className="num1">
                                <p>2019</p>
                                <span>Founded</span>
                            </div>
                            <div className="num2">
                                <p>4500+</p>
                                <span>Life Changes</span>
                            </div>
                       </div> 
                    </div>
                </div>
            </div>
    </>
  )
}

export default About
