// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
});

// Placeholder functions for features
function postJob() {
    const title = document.getElementById('job-title').value;
    const description = document.getElementById('job-description').value;
    const salary = document.getElementById('job-salary').value;
    if (title && description && salary) {
        alert(`Job Posted!\nTitle: ${title}\nDescription: ${description}\nSalary: ${salary} ETH`);
        // Reset fields
        document.getElementById('job-title').value = '';
        document.getElementById('job-description').value = '';
        document.getElementById('job-salary').value = '';
    } else {
        alert('Please fill all fields!');
    }
}

function createProposal() {
    const proposal = document.getElementById('proposal-desc').value;
    if (proposal) {
        alert(`Proposal Created!\nDescription: ${proposal}`);
        // Reset field
        document.getElementById('proposal-desc').value = '';
    } else {
        alert('Please enter a proposal description!');
    }
}

function getRecommendations() {
    const skills = document.getElementById('skills').value;
    if (skills) {
        alert(`Recommendations for skills: ${skills}\n(Imagine AI-powered job suggestions here!)`);
        // Reset field
        document.getElementById('skills').value = '';
    } else {
        alert('Please enter your skills!');
    }
}