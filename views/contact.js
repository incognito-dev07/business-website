const Layout = require('./layout');

module.exports = (title, currentPage) => {
  const content = `
  <section class="page-header">
    <h1>Get in <span class="gradient">touch</span></h1>
    <p>Let's discuss your project and bring your ideas to life</p>
  </section>

  <section class="contact-section">
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-card">
          <a href="https://wa.me/2349065168872"><i class="fab fa-whatsapp"></i></a>
          <h3>Chat with us instantly</h3>
          <p>+234 906 516 8872</p>
        </div>
        <div class="contact-card">
          <a href="https://github.com/incognito-dev07">
          <i class="fab fa-github"></i></a>
          <h3>View our GitHub profile</h3>
          <p>github.com/incognito-dev07</p>
        </div>
      </div>

      <form class="contact-form" id="contactForm">
        <div class="form-group">
          <label><i class="fas fa-user"></i> Full name</label>
          <input type="text" id="name" required placeholder="customer name">
        </div>
        <div class="form-group">
          <label><i class="fas fa-envelope"></i> Email address</label>
          <input type="email" id="email" required placeholder="me@example.com">
        </div>
        <div class="form-group">
          <label><i class="fas fa-phone"></i> Phone number</label>
          <input type="tel" id="phone" placeholder="+234 xxx xxx xxxx">
        </div>
        <div class="form-group">
          <label><i class="fas fa-cogs"></i> Service needed</label>
          <select id="service">
            <option value="">Select a service</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="landing">Landing Page</option>
            <option value="portfolio">Portfolio</option>
            <option value="webapp">Web Application</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label><i class="fas fa-comment"></i> Project details</label>
          <textarea id="message" rows="5" required placeholder="Tell us about your project..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-submit">
          <i class="fas fa-paper-plane"></i> Send message
        </button>
        <div id="formStatus" class="form-status info">
          <i class="fas fa-info-circle"></i> After submitting, you'll be redirected to WhatsApp to confirm your booking with us.
        </div>
      </form>
    </div>
  </section>
  `;
  
  return Layout(title, content, currentPage);
};