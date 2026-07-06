import React from 'react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-header">
        <div className="service-icon">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <Link to="/contact" className="service-link">Learn more <i className="fas fa-arrow-right"></i></Link>
    </div>
  )
}

export default ServiceCard