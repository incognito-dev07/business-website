import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/assets/favicon.svg" alt="IncogDev" />
          <p>Crafting exceptional digital experiences that drive results.</p>
          <div className="social-links">
            <a href="https://github.com/incognito-dev07"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home page</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><i className="fas fa-phone"></i> +234 906 516 8872</p>
          <p><i className="fas fa-map-marker-alt"></i> Akure, Ondo State</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 IncogDev. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer