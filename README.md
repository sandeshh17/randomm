# Portfolio Template - Easy to Edit

A modern, responsive portfolio website template that's easy to customize and deploy. This template features a clean design, smooth animations, and mobile-first responsive layout.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Customization**: All content is managed through a simple configuration file
- **Interactive Elements**: Smooth scrolling, mobile menu, contact form
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Fast Loading**: Optimized CSS and JavaScript
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
portfolio-template/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Configuration file (edit this!)
└── README.md           # This file
```

## 🛠️ Quick Setup

1. **Download/Clone** the template files
2. **Edit `config.js`** with your personal information
3. **Replace the placeholder image** with your photo
4. **Deploy** to your hosting service

## ✏️ How to Customize

### 1. Personal Information
Edit the `personalInfo` object in `config.js`:

```javascript
personalInfo: {
    name: "Your Name",
    title: "Your Professional Title",
    description: "Your brief description",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    profileImage: "path/to/your/photo.jpg"
}
```

### 2. Social Media Links
Update your social media profiles:

```javascript
socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
}
```

### 3. Skills Section
Add or modify your skills:

```javascript
skills: [
    {
        name: "JavaScript",
        icon: "fab fa-js-square",
        level: "Expert"
    },
    // Add more skills...
]
```

### 4. Projects Section
Showcase your work:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Project description...",
        technologies: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project",
        live: "https://your-project.com",
        icon: "fas fa-project-icon"
    },
    // Add more projects...
]
```

### 5. About Section
Customize your about content:

```javascript
about: {
    description: "Your detailed about text...",
    stats: {
        experience: "3+",
        projects: "20+",
        clients: "15+"
    }
}
```

## 🎨 Styling Customization

### Colors
The main color scheme uses CSS custom properties. To change colors, edit these values in `styles.css`:

```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #7c3aed;
    --text-color: #333;
    --bg-color: #ffffff;
}
```

### Fonts
The template uses Google Fonts (Inter). To change fonts, update the import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation menu
4. Add JavaScript functionality if needed

### Contact Form Integration
The contact form is set up to work with Formspree by default. To use a different service:

1. Update the `contactForm.action` in `config.js`
2. Modify the form submission handler in `script.js`

### Adding Animations
The template includes fade-in animations. To add more:

1. Add CSS animation classes
2. Use the Intersection Observer in `script.js`
3. Add the animation class to elements

## 🚀 Deployment

### GitHub Pages
1. Push your files to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be automatically deployed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 📋 Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in `config.js`
- [ ] Added your profile photo
- [ ] Updated social media links
- [ ] Added your projects
- [ ] Customized skills section
- [ ] Updated about section
- [ ] Tested on different devices
- [ ] Checked all links work
- [ ] Set up contact form handler

## 🎯 Tips for Best Results

1. **Use high-quality images**: Optimize your profile photo for web
2. **Write compelling descriptions**: Make your projects stand out
3. **Keep it updated**: Regularly add new projects and skills
4. **Test thoroughly**: Check on different devices and browsers
5. **Optimize for SEO**: Add meta descriptions and keywords

## 🆘 Troubleshooting

### Common Issues

**Images not loading**: Check file paths and ensure images are in the correct directory

**Contact form not working**: Verify form action URL and method

**Mobile menu not working**: Check JavaScript console for errors

**Styling issues**: Clear browser cache and check CSS syntax

## 📞 Support

If you need help customizing this template:

1. Check this README first
2. Look at the code comments
3. Test changes in small increments
4. Use browser developer tools for debugging

## 📄 License

This template is free to use for personal and commercial projects. Feel free to modify and distribute.

---

**Happy coding!** 🎉
