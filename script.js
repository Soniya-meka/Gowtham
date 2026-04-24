// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 1000);
    }
});

// Safety fallback for preloader
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('fade-out')) {
        loader.classList.add('fade-out');
    }
}, 5000);

// Cursor Glow
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Sticky Navbar
const navbar = document.querySelector('.glass-navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Stats Counter
const stats = document.querySelectorAll('.stat-value');
const statsSection = document.querySelector('.stats-section');
let started = false;

function startCount(el) {
    let targetText = el.dataset.target;
    if (!targetText) return;
    let target = parseInt(targetText);
    let count = 0;
    let increment = target / 100;
    let timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            el.innerText = target + (target >= 90 ? '%' : '+');
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(count) + '+';
        }
    }, 20);
}

if (stats.length > 0 && statsSection) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= statsSection.offsetTop - window.innerHeight) {
            if (!started) {
                stats.forEach(stat => startCount(stat));
                started = true;
            }
        }
    });
}

// Scroll Reveal Animations
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal();

    if (document.querySelector('.hero-text-wrapper')) {
        sr.reveal('.hero-text-wrapper > *', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 500,
            interval: 200
        });
    }

    if (document.querySelector('.section-header')) {
        sr.reveal('.section-header > *', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            interval: 100
        });
    }

    // Generic card reveals
    sr.reveal('.program-card, .facility-card, .feature-card, .news-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        interval: 150,
        delay: 200
    });

    if (document.querySelector('.about-image')) {
        sr.reveal('.about-image', {
            origin: 'left',
            distance: '80px',
            duration: 1000,
            delay: 300
        });
    }

    if (document.querySelector('.about-content')) {
        sr.reveal('.about-content > *', {
            origin: 'right',
            distance: '80px',
            duration: 1000,
            delay: 400,
            interval: 150
        });
    }
}

// Parallax effect for hero floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    if (shapes.length > 0) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    }
});

// Simple Testimonial Slider logic
const dots = document.querySelectorAll('.dot');
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
}
