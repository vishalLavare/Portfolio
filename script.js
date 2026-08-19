// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);

// Call once on load
window.addEventListener('load', revealOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation Sidebar Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

if (mobileToggle && navLinks && navOverlay) {
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    };

    const closeMenu = () => {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    };

    mobileToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking on any nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

