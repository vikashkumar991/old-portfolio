// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Simple project carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Initialize carousel
showSlide(currentIndex);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky Navigation Bar
const header = document.querySelector('header');
const sticky = header.offsetTop;

function handleScroll() {
  if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', handleScroll);

// Back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆️';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

function toggleBackToTopButton() {
  if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
  } else {
      backToTopBtn.style.display = 'none';
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleBackToTopButton);

// Highlight active section in the navigation bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function highlightNavLink() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

window.addEventListener('scroll', highlightNavLink);

// Skill progress bar animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skillProgressBar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
}

// Initialize skill bar animations
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Add floating animation to experience cards
function addFloatingAnimation() {
  const cards = document.querySelectorAll('.experienceCard, .testimonialCard');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('floating-card');
  });
}

// Add CSS for floating animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
  .floating-card {
    animation: floatCard 6s ease-in-out infinite;
  }
  
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(floatingStyle);

// Initialize floating animation
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Testimonials auto-scroll (optional)
function initTestimonialsScroll() {
  const container = document.querySelector('.testimonialsContainer');
  if (!container) return;
  
  let isScrolling = false;
  
  container.addEventListener('mouseenter', () => {
    isScrolling = false;
  });
  
  container.addEventListener('mouseleave', () => {
    isScrolling = true;
  });
}

// Initialize testimonials scroll
document.addEventListener('DOMContentLoaded', initTestimonialsScroll);

// Add parallax effect to background elements
function addParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.experienceFadedText, .enhancedSkillsFadedText, .testimonialsFadedText');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', addParallaxEffect);