import React from 'react'
import { Link } from 'react-router-dom'

interface ServiceDetailedCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  price: string
}

const ServiceDetailedCard: React.FC<ServiceDetailedCardProps> = ({ icon, title, description, features, price }) => {
  return (
    <div className="service-detailed-card">
      <div className="service-detailed-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="service-detailed-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}><i className="fas fa-check"></i> {feature}</li>
          ))}
        </ul>
        <div className="pricing">
          <span className="price">{price}</span>
          <Link to="/contact" className="btn btn-outline-small">Get quote</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailedCard