// Configuration file - Edit this to customize your portfolio
const config = {
    // Personal Information
    personalInfo: {
        name: "Sandesh",
        title: "Full Stack Developer",
        description: "A passionate developer creating amazing digital experiences",
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        profileImage: "https://via.placeholder.com/300x300/4f46e5/ffffff?text=Your+Photo"
    },

    // Social Media Links
    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername"
    },

    // About Section
    about: {
        description: "I'm a passionate developer with a love for creating innovative solutions. With expertise in modern web technologies, I enjoy turning complex problems into simple, beautiful designs.",
        stats: {
            experience: "3+",
            projects: "20+",
            clients: "15+"
        }
    },

    // Skills
    skills: [
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            level: "Expert"
        },
        {
            name: "React",
            icon: "fab fa-react",
            level: "Advanced"
        },
        {
            name: "Node.js",
            icon: "fab fa-node-js",
            level: "Advanced"
        },
        {
            name: "Python",
            icon: "fab fa-python",
            level: "Intermediate"
        },
        {
            name: "HTML/CSS",
            icon: "fab fa-html5",
            level: "Expert"
        },
        {
            name: "Git",
            icon: "fab fa-git-alt",
            level: "Advanced"
        },
        {
            name: "MongoDB",
            icon: "fas fa-database",
            level: "Intermediate"
        },
        {
            name: "AWS",
            icon: "fab fa-aws",
            level: "Intermediate"
        }
    ],

    // Projects
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
            github: "https://github.com/yourusername/ecommerce-platform",
            live: "https://your-ecommerce-site.com",
            icon: "fas fa-shopping-cart"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
            github: "https://github.com/yourusername/task-manager",
            live: "https://your-task-app.com",
            icon: "fas fa-tasks"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather dashboard that displays current weather conditions and forecasts using multiple weather APIs.",
            technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
            github: "https://github.com/yourusername/weather-dashboard",
            live: "https://your-weather-app.com",
            icon: "fas fa-cloud-sun"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations and mobile-first design.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            github: "https://github.com/yourusername/portfolio",
            live: "https://your-portfolio.com",
            icon: "fas fa-laptop-code"
        }
    ],

    // Contact Form Settings
    contactForm: {
        action: "https://formspree.io/f/your-form-id", // Replace with your form handler
        method: "POST"
    }
};
