function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
async function postJob() {
    const title = document.getElementById("job-title").value;
    const description = document.getElementById("job-description").value;
    const salary = document.getElementById("job-salary").value;
    alert(`Job Posted: ${title} - ${description} - ${salary} ETH`);
}
async function createProposal() {
    const description = document.getElementById("proposal-description").value;
    alert(`Proposal Created: ${description}`);
}
async function fetchRecommendations() {
    const skills = document.getElementById("skills").value;
    alert(`Fetching recommendations for: ${skills}`);
}
