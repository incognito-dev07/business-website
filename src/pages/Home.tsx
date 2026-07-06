import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const skills = [
  { icon: "fa-python", title: "Python", description: "Backend development, automation, data processing, and API building with FastAPI, Django, and Flask." },
  { icon: "fa-code", title: "TypeScript", description: "Type-safe, scalable applications with modern JavaScript/TypeScript across frontend and backend." },
  { icon: "fa-globe", title: "Web Development", description: "Responsive, performant websites and web applications with React, HTML, CSS and modern frameworks." },
  { icon: "fa-server", title: "DevOps & Tools", description: "Deployment, CI/CD, containerization, and infrastructure management with Docker, Vercel, and cloud platforms." }
]

const Home: React.FC = () => {
  useEffect(() => {
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
        <img src="/assets/banner.svg" alt="IncogDev Illustration" className="hero-svg" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Building <span className="gradient">clean, efficient solutions</span> with Python & TypeScript
        </h1>
        <p className="hero-subtitle">
          I craft performant backends, type-safe applications, and modern web experiences.
          Let's build something that works—quietly and reliably.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Get in touch
          </Link>
          <Link to="/projects" className="btn btn-outline">
            <i className="fas fa-play"></i> See my work
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="services">
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-badge"><i className="fas fa-star"></i> Stack</span>
          <h2>Core technologies</h2>
        </div>
        <div className="services-grid">
          {skills.map((skill, index) => (
            <ServiceCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Got a project in mind?</h2>
          <p>Let's collaborate and build something great together.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            <i className="fas fa-comment"></i> Let's talk
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home