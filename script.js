// ===========================
// LIAT APAAN LOO
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks = document.querySelectorAll('.mob-link');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Tutup menu kalau klik di luar
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// Trigger hero elements langsung saat load
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('#hero .reveal');
  heroElements.forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100);
  });
});

// ===========================
// SKILL BAR ANIMATION
// ===========================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = fill.getAttribute('data-fill');
      fill.style.width = targetWidth + '%';
      skillObserver.unobserve(fill);
    }
  });
}, {
  threshold: 0.5
});

skillFills.forEach(fill => {
  skillObserver.observe(fill);
});

// ===========================
// SMOOTH SCROLL (fallback)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================
// ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => {
  activeObserver.observe(section);
});


