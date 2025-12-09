// GitHub Configuration
const GITHUB_USERNAME = 'Sytherin'; // Replace with your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Fetch GitHub Projects
async function fetchGitHubProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub projects');
        }
        
        const repos = await response.json();
        projectsContainer.innerHTML = '';
        
        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No repositories found.</p>';
            return;
        }
        
        repos.forEach(repo => {
            const projectCard = createProjectCard(repo);
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsContainer.innerHTML = `
            <p style="text-align: center; grid-column: 1/-1; color: #ef4444;">
                Unable to load projects. Please check your GitHub username configuration.
            </p>
        `;
    }
}

// Create Project Card
function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const description = repo.description || 'No description available.';
    const language = repo.language || 'Other';
    const topics = repo.topics || [];
    
    card.innerHTML = `
        <div class="project-header">
            <h3>${repo.name}</h3>
            <p>${repo.private ? 'Private' : 'Public'} Repository</p>
        </div>
        <div class="project-body">
            <p class="project-description">${description}</p>
            <div class="project-tech">
                <span class="tech-tag">${language}</span>
                ${topics.slice(0, 3).map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
            </div>
        </div>
        <div class="project-footer">
            <div class="project-stats">
                <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" aria-label="View on GitHub">
                    <i class="fab fa-github"></i> View
                </a>
                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" aria-label="Live Demo">Demo</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you can integrate with a service like EmailJS, Formspree, or your backend
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
    
    contactForm.reset();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
});

