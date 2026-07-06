import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import FAQItem from '../components/FaqItem'

const faqs = [
  { question: "Do you offer maintenance and support?", answer: "Yes! I offer ongoing maintenance, updates, and support packages to keep your projects running smoothly after launch." },
  { question: "Can you work with my existing codebase?", answer: "Absolutely. I'm comfortable jumping into existing Python and TypeScript projects, refactoring code, and adding new features." },
  { question: "What's your preferred tech stack?", answer: "I work primarily with Python (FastAPI, Django, Flask), TypeScript (React, Node.js), and modern deployment tools like Docker and Vercel." },
  { question: "Do you do consulting or code review?", answer: "Yes—I offer code review, architecture consulting, and technical mentoring for teams and individuals." }
]

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

    document.querySelectorAll('.faq-item').forEach(el => {
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
        <p>Let's discuss your project—whether it's Python, TypeScript, or something in between</p>
      </section>

      <div className="contact-page-wrapper">
        {/* Left / Top: Contact Form */}
        <div className="contact-section">
          <div className="contact-grid" style={{ gridTemplateColumns: '1fr' }}>
            <ContactForm />
          </div>
        </div>

        {/* Right / Bottom: FAQ */}
        <section className="faq">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <span className="section-badge"><i className="fas fa-question-circle"></i> FAQ</span>
            <h2 className="faq-heading">Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact