# Portfolio Website

A modern, responsive portfolio website with GitHub integration.

## Features

- 🎨 Modern and responsive design
- 🔗 GitHub API integration to display your repositories
- 📱 Mobile-friendly navigation
- ✨ Smooth animations and transitions
- 📧 Contact form
- 🎯 SEO-friendly structure

## Setup Instructions

1. **Update GitHub Username**
   - Open `script.js`
   - Replace `'yourusername'` on line 2 with your actual GitHub username

2. **Personalize Content**
   - Update your name, title, and bio in `index.html`
   - Add your social media links
   - Update contact information
   - Customize skills in the About section

3. **Deploy**
   - You can deploy this to:
     - **GitHub Pages**: Push to a repository and enable GitHub Pages
     - **Netlify**: Drag and drop the folder
     - **Vercel**: Connect your GitHub repository
     - Any static hosting service

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Projects Display
- The website automatically fetches your 6 most recently updated repositories
- To show more/fewer projects, change `per_page=6` in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!

