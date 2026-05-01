import React, { useEffect } from 'react'
import WorkCard from '../components/WorkCard'
import ProcessStep from '../components/ProcessStep'

const projects = [
  { icon: "fa-store", title: "Luxury E-Commerce", description: "Complete online store with inventory management, payment gateway, and analytics dashboard.", tags: ["React", "Node.js", "Express", "PostgreSQL"] },
  { icon: "fa-chart-line", title: "SaaS Platform", description: "Subscription-based analytics platform with real-time data visualization and reporting.", tags: ["Vue.js", "Express", "PostgreSQL"] },
  { icon: "fa-blog", title: "Creative Portfolio", description: "Custom portfolio website for a renowned photographer with gallery and booking system.", tags: ["Next.js", "Tailwind", "Sanity"] },
  { icon: "fa-tasks", title: "Project Management Tool", description: "Collaborative platform for teams to track tasks, deadlines, and project progress.", tags: ["Angular", "Firebase", "Tailwind"] }
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

    document.querySelectorAll('.work-card, .process-step').forEach(el => {
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

      <section className="work-grid-section">
        <div className="work-grid">
          {projects.map((project, index) => (
            <WorkCard key={index} {...project} />
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