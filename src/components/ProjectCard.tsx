import React from 'react'

interface ProjectCardProps {
  icon: string
  title: string
  description: string
  tags: string[]
  github: string
  live: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, tags, github, live }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="project-info">
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
            <div className="project-modal-btn">
              View Details 
            </div>
            <div className="project-link">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={live} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard