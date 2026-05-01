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
      <div className="project-image">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Code
            </a>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard