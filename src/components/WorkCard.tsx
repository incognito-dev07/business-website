import React from 'react'

interface WorkCardProps {
  icon: string
  title: string
  description: string
  tags: string[]
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, description, tags }) => {
  return (
    <div className="work-card">
      <div className="work-image">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="work-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="work-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkCard