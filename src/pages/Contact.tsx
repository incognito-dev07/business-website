import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

const Contact: React.FC = () => {
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

    document.querySelectorAll('.contact-card').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(20px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="page-header">
        <h1>Get in <span className="gradient">touch</span></h1>
        <p>Let's discuss your projects and bring them to life</p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <a href="mailto:osasanolusola2007@gmail.com"><i className="fas fa-envelope"></i></a>
              <h3>E-mail</h3>
            </div>
            <div className="contact-card">
              <a href="https://t.me/incogdev"><i className="fab fa-telegram"></i></a>
              <h3>Telegram</h3>  
            </div>
            <div className="contact-card">
              <a href="https://wa.me/2349065168872"><i className="fab fa-whatsapp"></i></a>
              <h3>WhatsApp</h3>
            </div>
            <div className="contact-card">
              <a href="https://discord.gg/mrWvZA4b"><i className="fab fa-discord"></i></a>
              <h3>Discord</h3>  
            </div>
            <div className="contact-card">
              <a href="https://wa.me/2349065168872"><i className="fab fa-youtube"></i></a>
              <h3>YouTube</h3>  
            </div>
            <div className="contact-card">
              <a href="https://github.com/incognito-dev07">
                <i className="fab fa-github"></i>
              </a>
              <h3>GitHub</h3>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Contact