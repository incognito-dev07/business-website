import React, { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={() => setIsActive(!isActive)}>
        <span>{question}</span>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem