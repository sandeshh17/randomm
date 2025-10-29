// Main JavaScript file for portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initializePortfolio();
    
    // Setup navigation
    setupNavigation();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup animations
    setupAnimations();
    
    // Setup contact form
    setupContactForm();
});

// Initialize portfolio with config data
function initializePortfolio() {
    // Update personal information
    updatePersonalInfo();
    
    // Populate skills
    populateSkills();
    
    // Populate projects
    populateProjects();
    
    // Update current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Update personal information throughout the site
function updatePersonalInfo() {
    const info = config.personalInfo;
    
    // Update all name instances
    document.getElementById('nav-name').textContent = info.name;
    document.getElementById('hero-name').textContent = info.name;
    document.getElementById('footer-name').textContent = info.name;
    
    // Update hero section
    document.getElementById('hero-title').textContent = info.title;
    document.getElementById('hero-description').textContent = info.description;
    
    // Update profile image
    document.getElementById('profile-img').src = info.profileImage;
    document.getElementById('profile-img').alt = `${info.name} Profile Picture`;
    
    // Update about section
    document.getElementById('about-description').textContent = info.about.description;
    document.getElementById('experience-years').textContent = info.about.stats.experience;
    document.getElementById('projects-count').textContent = info.about.stats.projects;
    document.getElementById('clients-count').textContent = info.about.stats.clients;
    
    // Update contact information
    document.getElementById('contact-email').textContent = info.email;
    document.getElementById('contact-phone').textContent = info.phone;
    document.getElementById('contact-location').textContent = info.location;
    
    // Update social links
    document.getElementById('github-link').href = config.socialLinks.github;
    document.getElementById('linkedin-link').href = config.socialLinks.linkedin;
    document.getElementById('twitter-link').href = config.socialLinks.twitter;
    document.getElementById('instagram-link').href = config.socialLinks.instagram;
    
    // Update page title
    document.getElementById('page-title').textContent = `${info.name} - Portfolio`;
}

// Populate skills section
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    config.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item fade-in';
        skillElement.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Populate projects section
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    config.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card fade-in';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectElement.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.live}" class="project-link" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Setup navigation functionality
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Setup contact form
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.action = config.contactForm.action;
        form.method = config.contactForm.method;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.innerHTML = '<span class="loading"></span> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Show success message
                submitButton.textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#10b981';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
}

// Utility function to add typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4f46e5;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top button
addScrollToTop();

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4f46e5;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
