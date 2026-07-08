import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  { icon: "fa-cloud-download", title: "Media Downloader", description: "Progressive Web App for downloading videos from YouTube, TikTok, Instagram, and Facebook with a clean interface and fast processing.", tags: ["Python", "Flask", "JavaScript", "Cobalt API"], github: "https://github.com/incognito-dev07/media-saver", live: "https://media-saver-hub.vercel.app" },
  { icon: "fa-shield-alt", title: "TS/JS Validation Library", description: "Fast and type-safe validation library for JavaScript and TypeScript with zero dependencies for both Node.js and browsers.", tags: ["TypeScript", "NPM", "JavaScript", "Node"], github: "https://github.com/incognito-dev07/incog-validate", live: "https://www.npmjs.com/package/@incogdev/validate" },
  { icon: "fa-robot", title: "Automation Suite", description: "Python automation scripts for data processing, web scraping, and task scheduling with cron-based execution and logging.", tags: ["Python", "Selenium", "Cron", "Pandas"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-cloud", title: "Deployment Pipeline", description: "CI/CD pipeline with automated testing, build, and deployment to Vercel and cloud platforms using GitHub Actions.", tags: ["Docker", "GitHub Actions", "Vercel", "AWS"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-database", title: "Data Processing Tool", description: "ETL pipeline processing large datasets with Python, using SQLAlchemy, Pandas, and Redis caching for performance.", tags: ["Python", "SQLAlchemy", "Pandas", "Redis"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-mobile-alt", title: "Modern Web Portfolio", description: "Responsive portfolio built with React and TypeScript, featuring dark mode, smooth animations, and optimized performance.", tags: ["TypeScript", "React", "CSS", "Vite"], github: "https://github.com/incognito-dev07/business-website", live: "https://incogdevagency.vercel.app" }
]

const Projects: React.FC = () => {
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

    document.querySelectorAll('.project-card').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="page-header">
        <h1>Projects <span className="gradient">gallery</span></h1>
        <p>Things I've built with Python, TypeScript, and modern web tools</p>
      </section>

      <section className="project-grid-section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects