// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1500);
});

// Cursor Glow
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Sticky Navbar
const navbar = document.querySelector('.glass-navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

// Stats Counter
const stats = document.querySelectorAll('.stat-value');
const statsSection = document.querySelector('.stats-section');
let started = false;

function startCount(el) {
    let target = parseInt(el.dataset.target);
    let count = 0;
    let increment = target / 100;
    let timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            el.innerText = target + (target === 98 ? '%' : '+');
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(count) + '+';
        }
    }, 20);
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= statsSection.offsetTop - window.innerHeight) {
        if (!started) {
            stats.forEach(stat => startCount(stat));
            started = true;
        }
    }
});

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-text-wrapper > *', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 1800,
    interval: 200
});

ScrollReveal().reveal('.section-header > *', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    interval: 100
});

ScrollReveal().reveal('.program-card, .feature-card, .news-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 150,
    delay: 200
});

ScrollReveal().reveal('.about-image', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('.about-content > *', {
    origin: 'right',
    distance: '80px',
    duration: 1000,
    delay: 400,
    interval: 150
});

ScrollReveal().reveal('.masonry-item', {
    origin: 'bottom',
    scale: 0.8,
    duration: 1000,
    interval: 100
});

ScrollReveal().reveal('.contact-info', {
    origin: 'left',
    distance: '50px',
    duration: 1000
});

ScrollReveal().reveal('.contact-form', {
    origin: 'right',
    distance: '50px',
    duration: 1000
});

// Parallax effect for hero floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Simple Testimonial Slider logic (if more than one)
// For now it's static as requested, but we can add dots logic
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Logic to shift track if there were more cards
    });
});
