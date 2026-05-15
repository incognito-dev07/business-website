// Projects.tsx
import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProcessStep from '../components/ProcessStep'

const projects = [
  { icon: "fa-shopping-cart", title: "E-Commerce Platform", description: "A fully-featured online store with product management, shopping cart, and secure payment integration. Includes user authentication, order tracking, and an admin dashboard for inventory management.", tags: ["React", "Node.js", "Express", "PostgreSQL"], github: "https://github.com/incognito-dev07/business-website", live: "#" },
  { icon: "fa-user-tie", title: "Portfolio Website", description: "A modern, animated portfolio website that showcases creative work with smooth transitions and project galleries. Features client testimonials, blog integration, and fully responsive design.", tags: ["React", "TypeScript", "CSS"], github: "https://github.com/incognito-dev07/portfolio-website", live: "#" },
  { icon: "fa-tasks", title: "Task Management App", description: "A collaborative task management tool with real-time updates and team workspaces. Includes task assignments, due dates, file attachments, and progress tracking dashboards.", tags: ["Vue.js", "Firebase", "Tailwind"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-cloud-sun", title: "Weather Dashboard", description: "A real-time weather application with location detection and 7-day forecasts. Features interactive maps, severe weather alerts, and customizable weather widgets.", tags: ["Javascript", "API", "CSS"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-blog", title: "Blog Platform", description: "A full-stack blogging platform with a custom CMS and user authentication. Includes comment sections, rich text editing, categories and tags, and SEO optimization.", tags: ["Next.js", "Prisma", "PostgreSQL"], github: "https://github.com/incognito-dev07", live: "#" },
  { icon: "fa-chart-line", title: "Analytics Dashboard", description: "A comprehensive data visualization dashboard with interactive charts and real-time metrics. Features custom reports, user behavior tracking, and multi-platform integration.", tags: ["React", "Chart.js", "Express"], github: "https://github.com/incognito-dev07", live: "#" }
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