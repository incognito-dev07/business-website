import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/assets/favicon.svg" alt="IncogDev" />
        <div className="footer-brand">
          <p>Python & TypeScript developer building clean, efficient solutions.</p>
          <div className="social-links">
            <a href="https://github.com/incognito-dev07" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="mailto:osasanolusola2007@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
            <a href="https://wa.me/2349065168872" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://discord.gg/mrWvZA4b" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><i className="fas fa-phone"></i> +234 906 516 8872</p>
          <p><i className="fas fa-map-marker-alt"></i> Akure, &nbsp;Ondo State</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IncogDev. &nbsp;All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer