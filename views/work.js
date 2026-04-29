const Layout = require('./layout');

module.exports = (title, currentPage) => {
  const content = `
  <section class="page-header">
    <h1>Our <span class="gradient">work</span></h1>
    <p>Some of our favorite projects</p>
  </section>

  <section class="work-grid-section">
    <div class="work-grid">
      <div class="work-card">
        <div class="work-image">
          <i class="fas fa-store"></i>
        </div>
        <div class="work-info">
          <h3>Luxury E-Commerce</h3>
          <p>Complete online store with inventory management, payment gateway, and analytics dashboard.</p>
          <div class="work-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
      <div class="work-card">
        <div class="work-image">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="work-info">
          <h3>SaaS Platform</h3>
          <p>Subscription-based analytics platform with real-time data visualization and reporting.</p>
          <div class="work-tags">
            <span>Vue.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      <div class="work-card">
        <div class="work-image">
          <i class="fas fa-blog"></i>
        </div>
        <div class="work-info">
          <h3>Creative Portfolio</h3>
          <p>Custom portfolio website for a renowned photographer with gallery and booking system.</p>
          <div class="work-tags">
            <span>Next.js</span>
            <span>Tailwind</span>
            <span>Sanity</span>
          </div>
        </div>
      </div>
      <div class="work-card">
        <div class="work-image">
          <i class="fas fa-tasks"></i>
        </div>
        <div class="work-info">
          <h3>Project Management Tool</h3>
          <p>Collaborative platform for teams to track tasks, deadlines, and project progress.</p>
          <div class="work-tags">
            <span>Angular</span>
            <span>Firebase</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="process">
    <div class="section-header">
      <span class="section-badge"><i class="fas fa-chart-line"></i> Our process</span>
      <h2>How we work</h2>
      <p>A transparent, collaborative approach to building great products</p>
    </div>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-number">01</div>
        <div class = "step-header">
          <i class="fas fa-comments"></i>
          <h3>Discovery</h3>
        </div>
        <p>Understanding your goals and requirements</p>
      </div>
      <div class="process-step">
        <div class="step-number">02</div>
        <div class = "step-header">
          <i class="fas fa-pencil-ruler"></i>
          <h3>Design</h3>
        </div>
        <p>Creating wireframes and visual designs</p>
      </div>
      <div class="process-step">
        <div class="step-number">03</div>
        <div class = "step-header">
          <i class="fas fa-code"></i>
          <h3>Development</h3>
        </div>
        <p>Building with modern technologies</p>
      </div>
      <div class="process-step">
        <div class="step-number">04</div>
        <div class = "step-header">
          <i class="fas fa-rocket"></i>
          <h3>Launch</h3>
        </div>
        <p>Deployment and ongoing support</p>
      </div>
    </div>
  </section>
  `;
  
  return Layout(title, content, currentPage);
};