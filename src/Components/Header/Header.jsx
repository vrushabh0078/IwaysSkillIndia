import React from 'react'
import './Header.css'
import logo from '../../Photos/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const handleEnrollClick = () => {
    window.open('/SignUp');
  };

  return (
    <>
      <header className='header'>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          Lavkush Nagar, Manewada, Nagpur, Maharashtra 440024
        </div>
        <div className="mail">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:support@iwaysindia.com">support@iwaysindia.com</a>
        </div>
        <div className="headIcon">
          <ul>
            <li>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <nav>
        <section className="service-section">
          <div className="nav-container">
            <div className="container">
              <a className="nav-brand" href="index.html">
                <div className="logo">
                  <img src={logo} alt="Iways Logo"/>
                </div>
                <div className="logo-text-container">
                  <h2 className="logo-text">IWAYS SKILL INDIA</h2>
                  <small className="logo-text">TRUE VALUE FOR SKILLS</small>
                </div>
              </a>
              <div className="nav-services">
                <ul className="navbar-all-items">
                  <li className="nav-item">
                    <a className="nav-link active" href="#top">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skillpreneur">Skillpreneur</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#news" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#news-listing">News Listing</a></li>
                      <li><a className="dropdown-item" href="#news-details">News Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <button className="btn" onClick={handleEnrollClick}>Enroll</button>
                  </li>
                </ul>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;