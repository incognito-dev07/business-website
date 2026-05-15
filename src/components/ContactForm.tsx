import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<{ type: string; message: string }>({
    type: 'info',
    message: 'After submitting, you\'ll be redirected to WhatsApp to confirm your booking with us.'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || ''
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || ''
    const serviceSelect = form.querySelector('#service') as HTMLSelectElement
    const serviceText = serviceSelect?.options[serviceSelect.selectedIndex]?.text || 'Not specified'
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || ''
    
    let whatsappMessage = `*NEW PROJECT INQUIRY*%0A%0A
*Name:* ${name || 'Not provided'}%0A
*Email:* ${email || 'Not provided'}%0A
*Phone Number*: ${phone || 'Not provided'}%0A%0A

*Service Needed:* ${serviceText}%0A
*Message:* ${message || 'Not provided'}`

    const whatsappNumber = '2349065168872'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    
    const submitBtn = form.querySelector('.btn-submit') as HTMLButtonElement
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<i class="fab fa-whatsapp fa-spin"></i> Redirecting...'
    submitBtn.disabled = true
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      form.reset()
      
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 1000)
  }

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label><i className="fas fa-user"></i> Full name</label>
        <input type="text" id="name" required placeholder="your full name" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-envelope"></i> Email address</label>
        <input type="email" id="email" required placeholder="me@example.com" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-phone"></i> Phone number</label>
        <input type="tel" id="phone" placeholder="+234 xxx xxx xxxx" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-cogs"></i> Service needed</label>
        <select id="service">
          <option value="">Select a service</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="landing">Landing Page</option>
          <option value="portfolio">Portfolio</option>
          <option value="webapp">Web Application</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label><i className="fas fa-comment"></i> Project details</label>
        <textarea id="message" rows={5} required placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        <i className="fas fa-paper-plane"></i> Send message
      </button>
      <div id="formStatus" className={`form-status ${status.type}`}>
        <i className={`fas ${status.type === 'info' ? 'fa-info-circle' : status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i> {status.message}
      </div>
    </form>
  )
}

export default ContactForm