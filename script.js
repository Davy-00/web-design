// Responsive Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect and active link highlighting
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active navigation link
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Slider Functionality
let currentSlide = 0;
const projectCards = document.querySelectorAll('.project-card');
const projectTrack = document.getElementById('project-track');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    // Remove active class from all cards and dots
    projectCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide
    if (projectCards[index]) {
        projectCards[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    // Move the track
    const translateX = -index * 100;
    projectTrack.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % projectCards.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + projectCards.length) % projectCards.length;
    showSlide(currentSlide);
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-slide functionality (optional)
setInterval(nextSlide, 5000);

// Project Modal Functionality
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

const projectDetails = [
    {
        title: "Iwanyustore.store",
        description: "A multi-vendor e-commerce platform designed specifically for African buyers and sellers. Built with Flutter for mobile-first experience, featuring integrated vendor dashboard, real-time product listings, and modern orange and black design theme inspired by global leaders like AliExpress.",
        features: [
            "Multi-vendor marketplace architecture",
            "Mobile app with integrated vendor dashboard",
            "Real-time product listings and inventory management",
            "Modern, clean UI with orange and black theme",
            "Full-screen responsive design for all devices",
            "Vendor onboarding and management system",
            "Future logistics network integration",
            "African market-focused features"
        ],
        technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Neon DB", "Mobile Development"],
        github: "https://github.com/davydushimiyimana/iwanyu-store",
        demo: "https://www.iwanyustore.store"
    },
    {
        title: "Mathisi.io",
        description: "A mobile-first Learning Management System (LMS) platform that blends free and paid educational content with embedded YouTube videos. Designed to make quality education more accessible across Rwanda and beyond.",
        features: [
            "Mobile-first learning platform",
            "Paid and free course offerings",
            "YouTube integration for learning content",
            "Web-based admin panel with Super Admin controls",
            "Custom onboarding and course management flow",
            "Simple, elegant, learner-focused UI/UX",
            "Mobile app hosted on Motiff platform",
            "Scalable content delivery system"
        ],
        technologies: ["Mobile App", "Motiff", "YouTube API", "Admin Panel", "Course Management"],
        github: "https://github.com/davydushimiyimana/mathisi-lms",
        demo: "https://mathisi.io"
    },
    {
        title: "Prop Firm Trading Bots",
        description: "High-accuracy forex trading bots developed for MetaTrader 5 and cTrader platforms. Implements advanced strategies including 3-Candle Reversal with EMA Filtering and SNR-based approaches, optimized for prop firm challenges with minimal drawdown.",
        features: [
            "3-Candle Reversal strategy with EMA filtering",
            "Support & Resistance (SNR) based algorithms",
            "Multi-pair EA for MetaTrader 5 platform",
            "Advanced stop loss and take profit management",
            "Trailing stop implementation for cTrader",
            "Optimized for $50,000 prop firm challenges",
            "Minimal drawdown with high profitability",
            "Compliance with strict prop firm rules"
        ],
        technologies: ["MQL5", "MetaTrader 5", "cTrader", "C#", "Algorithmic Trading", "Risk Management"],
        github: "https://github.com/davydushimiyimana/forex-trading-bots",
        demo: "https://tradingbots-performance.davydushimiyimana.com"
    }
];

function openModal(projectIndex) {
    const project = projectDetails[projectIndex];
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-modal-description">${project.description}</p>
        
        <h3>Key Features:</h3>
        <ul class="feature-list">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <h3>Technologies Used:</h3>
        <div class="modal-tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div class="modal-links">
            <a href="${project.github}" class="btn btn-primary" target="_blank">View Code</a>
            <a href="${project.demo}" class="btn btn-secondary" target="_blank">Live Demo</a>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Form validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateSubject(subject) {
    return subject.trim().length >= 5;
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    field.classList.add('error');
    errorElement.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    field.classList.remove('error');
    errorElement.textContent = '';
}

function showSuccessMessage() {
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);
}

// Real-time validation
document.getElementById('name').addEventListener('blur', function() {
    if (!validateName(this.value)) {
        showError('name', 'Name must be at least 2 characters long');
    } else {
        clearError('name');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

document.getElementById('subject').addEventListener('blur', function() {
    if (!validateSubject(this.value)) {
        showError('subject', 'Subject must be at least 5 characters long');
    } else {
        clearError('subject');
    }
});

document.getElementById('message').addEventListener('blur', function() {
    if (!validateMessage(this.value)) {
        showError('message', 'Message must be at least 10 characters long');
    } else {
        clearError('message');
    }
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Clear previous errors
    ['name', 'email', 'subject', 'message'].forEach(clearError);
    
    // Validate all fields
    let isValid = true;
    
    if (!validateName(name)) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validateSubject(subject)) {
        showError('subject', 'Subject must be at least 5 characters long');
        isValid = false;
    }
    
    if (!validateMessage(message)) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission (in a real app, you'd send this to a server)
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
    }
});

// Skills Animation - Animate progress bars when in viewport
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
            bar.style.width = width + '%';
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to various elements
    const fadeElements = document.querySelectorAll('.about-text, .timeline-content, .education-card, .skill-category, .contact-info');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add slide-in animations
    const slideLeftElements = document.querySelectorAll('.timeline-content:nth-child(odd)');
    const slideRightElements = document.querySelectorAll('.timeline-content:nth-child(even)');
    
    slideLeftElements.forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });
    
    slideRightElements.forEach(el => {
        el.classList.add('slide-in-right');
        observer.observe(el);
    });
});

// Scroll event for skills animation
window.addEventListener('scroll', animateSkills);

// Initialize skills animation on load
window.addEventListener('load', animateSkills);

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeProjectModal();
    }
    
    // Navigate project slider with arrow keys
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Performance optimization - Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Navbar scroll effect and active link highlighting code here
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    animateSkills();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show first project slide
    showSlide(0);
    
    // Add loading animation to page
    document.body.classList.add('loaded');
});

// Add styles for modal content
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal-description {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #64748b;
        margin-bottom: 2rem;
    }
    
    .feature-list {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    .feature-list li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.5rem;
        color: #64748b;
        line-height: 1.6;
    }
    
    .feature-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #10b981;
        font-weight: bold;
    }
    
    .modal-tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    
    .modal-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    
    .modal h2 {
        color: #1e293b;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .modal h3 {
        color: #2563eb;
        margin-bottom: 1rem;
        margin-top: 2rem;
        font-size: 1.3rem;
    }
    
    .modal h3:first-of-type {
        margin-top: 0;
    }
`;
document.head.appendChild(modalStyles); 