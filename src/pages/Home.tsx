import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TypingAnimation from '../components/TypingAnimation'
import ServiceCard from '../components/ServiceCard'
import heroSvg from '../assets/hero.svg'

const services = [
  { icon: "fa-shopping-cart", title: "E-Commerce", description: "Scalable online stores with secure payments and seamless checkout experiences." },
  { icon: "fa-mobile-alt", title: "Landing Pages", description: "High-converting landing pages designed to capture leads and drive sales." },
  { icon: "fa-user-tie", title: "Portfolios", description: "Stunning portfolio websites that showcase your work and attract opportunities." },
  { icon: "fa-layer-group", title: "Web Apps", description: "Complex web applications with robust backends and modern frontends." }
]

const Home: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.service-card, .project-card, .process-step, .service-detailed-card, .contact-card').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(20px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero SVG Illustration */}
      <div className="hero-svg-wrapper">
        <img src={heroSvg} alt="IncogDev Illustration" className="hero-svg" />
      </div>

      {/* Typing Animation Section */}
      <TypingAnimation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <i className="fas fa-code"></i> Full Stack Development
        </div>
        <h1 className="hero-title">
          Building <span className="gradient">digital excellence</span>
        </h1>
        <p className="hero-subtitle">
          We craft high-performance websites and applications that elevate brands, 
          engage users, and drive tangible results.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Start a project
          </Link>
          <Link to="/projects" className="btn btn-outline">
            <i className="fas fa-play"></i> View our projects
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-header">
          <span className="section-badge"><i className="fas fa-star"></i> What we do</span>
          <h2>Services we provide</h2>
          <p>Tailored solutions to meet your unique business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to bring your ideas to life?</h2>
          <p>Let's collaborate and create something extraordinary together.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            <i className="fas fa-comment"></i> Let's talk
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home