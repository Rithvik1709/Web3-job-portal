import { useState } from "react";

const AIRecommendations = () => {
    const [skills, setSkills] = useState("");
    const [jobs, setJobs] = useState([]);

    const fetchRecommendations = async () => {
        const response = await fetch(`http://localhost:8000/recommend/${skills}`);
        const data = await response.json();
        setJobs(data);
    };

    return (
        <div>
            <h2>AI-Powered Job Recommendations</h2>
            <input type="text" placeholder="Enter your skills" onChange={(e) => setSkills(e.target.value)} />
            <button onClick={fetchRecommendations}>Get Recommendations</button>

            {jobs.map((job) => (
                <div key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};
export default AIRecommendations;
