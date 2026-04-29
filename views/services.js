const Layout = require('./layout');

module.exports = (title, currentPage) => {
    const content = `
    <section class="page-header">
        <h1>Our <span class="gradient">services</span></h1>
        <p>Comprehensive solutions for your digital needs</p>
    </section>

    <section class="services-detailed">
        <div class="service-detailed-card">
            <div class="service-detailed-icon">
                <i class="fas fa-building"></i>
            </div>
            <div class="service-detailed-content">
                <h2>Business Website</h2>
                <p>A professional multi-page website for your business to establish credibility and attract customers:</p>
                <ul>
                    <li><i class="fas fa-check"></i> Mobile-responsive layout</li>
                    <li><i class="fas fa-check"></i> Custom design with your brand identity</li>
                    <li><i class="fas fa-check"></i> About, Services, Contact pages</li>
                    <li><i class="fas fa-check"></i> Form with WhatsApp integration</li>
                </ul>
                <div class="pricing">
                    <span class="price">Starting at ₦150,000</span>
                    <a href="/contact" class="btn btn-outline-small">Get quote</a>
                </div>
            </div>
        </div>
        
        <div class="service-detailed-card">
            <div class="service-detailed-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="service-detailed-content">
                <h2>Portfolio Websites</h2>
                <p>Stunning portfolio websites that showcase your work and attract opportunities:</p>
                <ul>
                    <li><i class="fas fa-check"></i> Custom gallery layouts</li>
                    <li><i class="fas fa-check"></i> Client testimonial sections</li>
                    <li><i class="fas fa-check"></i> Blog integration</li>
                    <li><i class="fas fa-check"></i> Basic SEO optimization</li>
                </ul>
                <div class="pricing">
                    <span class="price">Starting at ₦100,000</span>
                    <a href="/contact" class="btn btn-outline-small">Get quote</a>
                </div>
            </div>
        </div>
        
        <div class="service-detailed-card">
            <div class="service-detailed-icon">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="service-detailed-content">
                <h2>E-Commerce Website</h2>
                <p>Online store integrated with WhatsApp for seamless ordering and scalable e-commerce solutions:</p>
                <ul>
                    <li><i class="fas fa-check"></i> WhatsApp order integration</li>
                    <li><i class="fas fa-check"></i> Product catalog management</li>
                    <li><i class="fas fa-check"></i> Admin management panel</li>
                    <li><i class="fas fa-check"></i> Inventory management system</li>
                </ul>
                <div class="pricing">
                    <span class="price">Starting at ₦250,000</span>
                    <a href="/contact" class="btn btn-outline-small">Get quote</a>
                </div>
            </div>
        </div>

        <div class="service-detailed-card">
            <div class="service-detailed-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <div class="service-detailed-content">
                <h2>Landing Pages</h2>
                <p>High-converting landing pages designed to capture leads and drive specific actions:</p>
                <ul>
                    <li><i class="fas fa-check"></i> Analytics integration</li>
                    <li><i class="fas fa-check"></i> Fast loading speed</li>
                    <li><i class="fas fa-check"></i> Conversion-focused design</li>
                    <li><i class="fas fa-check"></i> Instant quote request</li>
                </ul>
                <div class="pricing">
                    <span class="price">Starting at ₦75,000</span>
                    <a href="/contact" class="btn btn-outline-small">Get quote</a>
                </div>
            </div>
        </div>

        <div class="service-detailed-card">
            <div class="service-detailed-icon">
                <i class="fas fa-layer-group"></i>
            </div>
            <div class="service-detailed-content">
                <h2>Custom Application</h2>
                <p>Custom-built web applications tailored to your specific requirements:</p>
                <ul>
                    <li><i class="fas fa-check"></i> Complete custom functionality</li>
                    <li><i class="fas fa-check"></i> Database design & management</li>
                    <li><i class="fas fa-check"></i> API development and integration</li>
                </ul>
                <div class="pricing">
                    <span class="price">Custom pricing</span>
                    <a href="/contact" class="btn btn-outline-small">Get quote</a>
                </div>
            </div>
        </div>
    </section>

    <section class="faq">
        <div class="section-header">
            <span class="section-badge"><i class="fas fa-question-circle"></i> FAQ</span>
            <h2>Frequently asked questions</h2>
        </div>
        <div class="faq-list">
            <div class="faq-item">
                <div class="faq-question">
                    <span>How long does it take to build a website?</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Timeline varies based on project complexity. A simple landing page takes 3-4 days, while a full e-commerce site takes 1-2 weeks.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <span>Do you offer maintenance services?</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Yes! We offer ongoing maintenance, updates, and support packages to keep your site running smoothly.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <span>Can you redesign my existing website?</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Absolutely! We specialize in redesigning outdated websites to modern, responsive, high-performing platforms.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <span>Do you provide hosting?</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>We can recommend and set up hosting solutions, or work with your existing hosting provider.</p>
                </div>
            </div>
        </div>
    </section>
    `;
    
    return Layout(title, content, currentPage);
};