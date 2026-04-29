const Layout = require('./layout');

module.exports = (title, currentPage) => {
    const content = `
    <!-- Hero SVG Illustration -->
    <div class="hero-svg-wrapper">
        <img src="/assets/hero.svg" alt="IncogDev Illustration" class="hero-svg">
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-badge">
            <i class="fas fa-code"></i> Full Stack Development
        </div>
        <h1 class="hero-title">
            Building <span class="gradient">digital excellence</span>
        </h1>
        <p class="hero-subtitle">
            We craft high-performance websites and applications that elevate brands, 
            engage users, and drive tangible results.
        </p>
        <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i> Start a project
            </a>
            <a href="/work" class="btn btn-outline">
                <i class="fas fa-play"></i> View our work
            </a>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services">
        <div class="section-header">
            <span class="section-badge"><i class="fas fa-star"></i> What we do</span>
            <h2>Services we provide</h2>
            <p>Tailored solutions to meet your unique business needs</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>E-Commerce</h3>
                <p>Scalable online stores with secure payments and seamless checkout experiences.</p>
                <a href="/services" class="service-link">Learn more <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Landing Pages</h3>
                <p>High-converting landing pages designed to capture leads and drive sales.</p>
                <a href="/services" class="service-link">Learn more <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-user-tie"></i>
                </div>
                <h3>Portfolios</h3>
                <p>Stunning portfolio websites that showcase your work and attract opportunities.</p>
                <a href="/services" class="service-link">Learn more <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-layer-group"></i>
                </div>
                <h3>Web Apps</h3>
                <p>Complex web applications with robust backends and modern frontends.</p>
                <a href="/services" class="service-link">Learn more <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="cta-content">
            <h2>Ready to bring your ideas to life?</h2>
            <p>Let's collaborate and create something extraordinary together.</p>
            <a href="/contact" class="btn btn-primary btn-large">
                <i class="fas fa-comment"></i> Let's talk
            </a>
        </div>
    </section>
    `;
    
    return Layout(title, content, currentPage);
};