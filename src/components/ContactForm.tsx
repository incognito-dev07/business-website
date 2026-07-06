import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [status] = useState<{ type: string; message: string }>({
    type: 'info',
    message: 'After submitting, you\'ll be redirected to WhatsApp to confirm your booking with us.'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || ''
    const service = (form.querySelector('#service') as HTMLSelectElement)?.value || ''
    const serviceText = (form.querySelector('#service') as HTMLSelectElement)?.options?.[(form.querySelector('#service') as HTMLSelectElement)?.selectedIndex]?.text || 'Not specified'
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || ''
    
    let whatsappMessage = `*NEW PROJECT INQUIRY*%0A%0A
*Name:* ${name || 'Not provided'}%0A
*Email:* ${email || 'Not provided'}%0A
*Service Needed:* ${serviceText}%0A%0A
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
        <h3 className="gradient">Contact Form</h3>
        <label><i className="fas fa-user"></i> YOUR NAME</label>
        <input type="text" id="name" required/>
      </div>
      <div className="form-group">
        <label><i className="fas fa-envelope"></i> EMAIL ADDRESS</label>
        <input type="email" id="email" required/>
      </div>
      <div className="form-group">
        <label><i className="fas fa-wrench"></i> WHAT DO YOU NEED?</label>
        <div className="custom-select-wrapper">
          <select id="service" required>
            <option value="">Select a service</option>
            <option value="python">Python Backend / API</option>
            <option value="typescript">TypeScript App</option>
            <option value="web">Web Development</option>
            <option value="automation">Automation / Scripting</option>
            <option value="other">Other</option>
          </select>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="form-group">
        <label><i className="fas fa-comment"></i> PROJECT DETAILS</label>
        <textarea id="message" rows={4} required placeholder="Tell me about your project..."></textarea>
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