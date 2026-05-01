import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProcessStep from '../components/ProcessStep'

const projects = [
  { icon: "fa-shopping-cart", title: "E-Commerce Platform", description: "Full-featured online store with product management, cart, and payment integration.", tags: ["React", "Node.js", "Express", "PostgreSQL"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-user-tie", title: "Portfolio Website", description: "Modern portfolio website with animations and responsive design.", tags: ["React", "TypeScript", "CSS"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-tasks", title: "Task Management App", description: "Collaborative task management tool with real-time updates.", tags: ["Vue.js", "Firebase", "Tailwind"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-cloud-sun", title: "Weather Dashboard", description: "Real-time weather app with location detection and forecasts.", tags: ["Javascript", "API", "CSS"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-blog", title: "Blog Platform", description: "Full-stack blog with CMS, comments, and user authentication.", tags: ["Next.js", "Prisma", "PostgreSQL"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-chart-line", title: "Analytics Dashboard", description: "Data visualization dashboard with charts and reports", tags: ["React", "Chart.js", "Express"], github: "https://github.com/incognito-dev07/business-website", live: "#" }
]

const processSteps = [
  { number: "01", title: "Discovery", description: "Understanding your goals and requirements" },
  { number: "02", title: "Design", description: "Creating wireframes and visual designs" },
  { number: "03", title: "Development", description: "Building with modern technologies" },
  { number: "04", title: "Launch", description: "Deployment and ongoing support" }
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

    document.querySelectorAll('.project-card, .process-step').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(20px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="page-header">
        <h1>Our <span className="gradient">projects</span></h1>
        <p>Some of our projects we're proud to share</p>
      </section>

      <section className="project-grid-section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-header">
          <span className="section-badge"><i className="fas fa-chart-line"></i> Our process</span>
          <h2>How we work</h2>
          <p>A transparent, collaborative approach to building great products</p>
        </div>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects