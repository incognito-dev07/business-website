import React, { useEffect } from 'react'
import ServiceDetailedCard from '../components/ServiceDetailedCard'
import FAQItem from '../components/FAQItem'

const services = [
  {
    icon: "fa-building",
    title: "Business Website",
    description: "A professional multi-page website for your business to establish credibility and attract customers:",
    features: [
      "Mobile-responsive layout",
      "Custom design with your brand identity",
      "About, Services, Contact pages",
      "Form with WhatsApp integration"
    ],
    price: "Starting at ₦150,000"
  },
  {
    icon: "fa-user-tie",
    title: "Portfolio Websites",
    description: "Stunning portfolio websites that showcase your work and attract opportunities:",
    features: [
      "Custom gallery layouts",
      "Client testimonial sections",
      "Blog integration",
      "Basic SEO optimization"
    ],
    price: "Starting at ₦100,000"
  },
  {
    icon: "fa-shopping-cart",
    title: "E-Commerce Website",
    description: "Online store integrated with WhatsApp for seamless ordering and scalable e-commerce solutions:",
    features: [
      "WhatsApp order integration",
      "Product catalog management",
      "Admin management panel",
      "Inventory management system"
    ],
    price: "Starting at ₦250,000"
  },
  {
    icon: "fa-rocket",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions:",
    features: [
      "Analytics integration",
      "Fast loading speed",
      "Conversion-focused design",
      "Instant quote request"
    ],
    price: "Starting at ₦75,000"
  },
  {
    icon: "fa-layer-group",
    title: "Custom Application",
    description: "Custom-built web applications tailored to your specific requirements:",
    features: [
      "Complete custom functionality",
      "API development and integration",
      "User management system",
      "Database design and management"
    ],
    price: "Custom pricing"
  }
]

const faqs = [
  { question: "How long does it take to build a website?", answer: "Timeline varies based on project complexity. A simple landing page takes 3-4 days, while a full e-commerce site takes 1-2 weeks." },
  { question: "Do you offer maintenance services?", answer: "Yes! We offer ongoing maintenance, updates, and support packages to keep your site running smoothly." },
  { question: "Can you redesign my existing website?", answer: "Absolutely! We specialize in redesigning outdated websites to modern, responsive, high-performing platforms." },
  { question: "Do you provide hosting?", answer: "We can recommend and set up hosting solutions, or work with your existing hosting provider." }
]

const Services: React.FC = () => {
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

    document.querySelectorAll('.service-detailed-card, .faq-item').forEach(el => {
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
        <h1>Our <span className="gradient">services</span></h1>
        <p>Comprehensive solutions for your digital needs</p>
      </section>

      <section className="services-detailed">
        {services.map((service, index) => (
          <ServiceDetailedCard key={index} {...service} />
        ))}
      </section>

      <section className="faq">
        <div className="section-header">
          <span className="section-badge"><i className="fas fa-question-circle"></i> FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services