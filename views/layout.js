module.exports = (title, content, currentPage) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="IncogDev - Professional web development agency creating modern, responsive websites and applications.">
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/style.css">
  <link rel="icon" href="/assets/icon.svg">
</head>
<body>
  <!-- Mobile Navigation -->
  <nav class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-header">
      <div class="logo">
        <img src="/assets/icon.svg" alt="IncogDev">
        <span>IncogDev</span>
      </div>
      <button class="menu-toggle" id="menuToggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="/" class="${currentPage === 'home' ? 'active' : ''}"><i class="fas fa-home"></i> Home</a>
      <a href="/work" class="${currentPage === 'work' ? 'active' : ''}"><i class="fas fa-briefcase"></i> Work</a>
      <a href="/services" class="${currentPage === 'services' ? 'active' : ''}"><i class="fas fa-cogs"></i> Services</a>
      <a href="/contact" class="${currentPage === 'contact' ? 'active' : ''}"><i class="fas fa-envelope"></i> Contact</a>
    </div>
  </nav>

  <!-- Desktop Navigation -->
  <nav class="desktop-nav">
    <div class="nav-container">
      <div class="logo">
        <img src="/assets/icon.svg" alt="IncogDev">
        <span>IncogDev</span>
      </div>
      <div class="nav-links">
        <a href="/" class="${currentPage === 'home' ? 'active' : ''}">Home</a>
        <a href="/work" class="${currentPage === 'work' ? 'active' : ''}">Work</a>
        <a href="/services" class="${currentPage === 'services' ? 'active' : ''}">Services</a>
        <a href="/contact" class="${currentPage === 'contact' ? 'active' : ''}">Contact</a>
      </div>
    </div>
  </nav>

  <main>
    ${content}
  </main>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="/assets/icon.svg" alt="IncogDev">
        <p>Crafting exceptional digital experiences that drive results.</p>
        <div class="social-links">
          <a href="https://github.com/incognito-dev07"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <p><i class="fas fa-phone"></i> +234 906 516 8872</p>
        <p><i class="fas fa-map-marker-alt"></i> Akure, Ondo State</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 IncogDev. All rights reserved.</p>
    </div>
  </footer>

  <script src="/script.js"></script>
</body>
</html>
`;