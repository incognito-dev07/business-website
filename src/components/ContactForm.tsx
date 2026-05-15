// ContactForm.tsx
import React, { useState, useRef, useEffect } from 'react'

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<{ type: string; message: string }>({
    type: 'info',
    message: 'After submitting, you\'ll be redirected to WhatsApp to confirm your booking with us.'
  })

  // Custom dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedServiceText, setSelectedServiceText] = useState('Select a service')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const serviceOptions = [
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'landing', label: 'Landing Page' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'webapp', label: 'Web Application' },
    { value: 'other', label: 'Other' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectService = (value: string, label: string) => {
    setSelectedService(value)
    setSelectedServiceText(label)
    setIsDropdownOpen(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || ''
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || ''
    const serviceText = selectedServiceText === 'Select a service' ? 'Not specified' : selectedServiceText
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
      setSelectedService('')
      setSelectedServiceText('Select a service')
      
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 1000)
  }

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label><i className="fas fa-user"></i> Full name</label>
        <input type="text" id="name" required placeholder="Enter your full name" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-envelope"></i> Email address</label>
        <input type="email" id="email" required placeholder="Enter your valid email" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-phone"></i> Phone number</label>
        <input type="tel" id="phone" placeholder="Enter phone number" />
      </div>
      <div className="form-group">
        <label><i className="fas fa-cogs"></i> Service needed</label>
        <div className="custom-dropdown" ref={dropdownRef}>
          <div 
            className="dropdown-selected" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedServiceText}</span>
            <i className={`fas fa-chevron-down ${isDropdownOpen ? 'open' : ''}`}></i>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-options">
              {serviceOptions.map(option => (
                <div 
                  key={option.value}
                  className={`dropdown-option ${selectedService === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelectService(option.value, option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <input type="hidden" id="service" value={selectedService} />
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