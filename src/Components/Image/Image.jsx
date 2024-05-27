import React, { useState, useEffect } from 'react';
import './Image.css';
import Image1 from '../../Photos/Image1.png';
import Image2 from '../../Photos/Image2.png';
import Image3 from '../../Photos/Image3.png';
import Image4 from '../../Photos/Image4.png';

const Image = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        plusSlides(0);
        const interval = setInterval(() => {
            plusSlides(1);
        }, 3000);
    
        return () => clearInterval(interval);
    }, [slideIndex]);

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    function currentSlide(n) {
        showSlides(n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        if (n >= slides.length) { n = 0 }
        if (n < 0) { n = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n].style.display = "block";
        setSlideIndex(n);
    }

    return (
        <>
            {/* Slider images */}
            <div className="slider-container">
                <div className="slideshow-container">
                    <div className="mySlides slide1"></div>
                    <div className="mySlides slide2"></div>
                    <div className="mySlides slide3"></div>

                    <a className="prev" onClick={() => plusSlides(-1)}>
                        <button><i className="fa-solid fa-chevron-left"></i></button>
                    </a>
                    <a className="next" onClick={() => plusSlides(1)}>
                        <button><i className="fa-solid fa-chevron-right"></i></button>
                    </a>
                </div>
            </div>

            <div className="section-padding2">
                <div className="headings">
                    <h1 className="heading">Welcome to the world of Professional Skills</h1>
                </div>
                <div className="containers">
                    <div className="service">
                        <div className="block blocks1">
                            <p>
                            <img src={Image1} alt="Skillprenuer Image" /><br />
                                Become a <strong>Skillprenuer</strong>
                            </p>
                        </div>
                        <div className="block blocks2">
                            <p>
                            <img src={Image2} alt="Caring Earth Image"/><br />
                                <strong>Caring </strong> Earth
                            </p>
                        </div>
                        <div className="block blocks3">
                            <p>
                            <img src={Image3} alt="Entrepreneurship Image" /><br />
                                Make a <br />
                                <strong>Entrepreneurship</strong>
                            </p>
                        </div>
                        <div className="block blocks4">
                            <p>
                            <img src={Image4} alt="Scholarship Image" /><br />
                                <strong>Scholarship </strong> Program
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Image;
