import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && menuToggleRef.current) {
        if (!menuToggleRef.current.contains(e.target as Node) && !mobileMenuRef.current.contains(e.target as Node)) {
          setMobileMenuOpen(false)
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <nav className="mobile-nav" id="mobileNav">
        <div className="mobile-nav-header">
          <div className="logo">
            <img src="/assets/favicon.svg" alt="IncogDev" />
            <span>IncogDev</span>
          </div>
          <button className="menu-toggle" id="menuToggle" onClick={toggleMenu} ref={menuToggleRef}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu" ref={mobileMenuRef}>
          <Link to="/" className={currentPage === 'home' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            <i className="fas fa-home"></i> Overview
          </Link>
          <Link to="/projects" className={currentPage === 'projects' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            <i className="fas fa-briefcase"></i> Projects
          </Link>
          <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </div>
      </nav>

      <nav className="desktop-nav">
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/favicon.svg" alt="IncogDev" />
            <span>IncogDev</span>
          </div>
          <div className="nav-links">
            <Link to="/" className={currentPage === 'home' ? 'active' : ''}>Home</Link>
            <Link to="/projects" className={currentPage === 'projects' ? 'active' : ''}>Projects</Link>
            <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation