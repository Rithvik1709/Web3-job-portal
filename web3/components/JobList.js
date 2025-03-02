import { useEffect, useState } from "react";
import { jobPortal } from "../utils/web3";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const jobCounter = await jobPortal.jobCounter();
            let jobArray = [];
            for (let i = 1; i <= jobCounter; i++) {
                const job = await jobPortal.jobs(i);
                jobArray.push({
                    id: job.id.toString(),
                    title: job.title,
                    description: job.description,
                    salary: ethers.utils.formatEther(job.salary),
                    employer: job.employer,
                    freelancer: job.freelancer,
                });
            }
            setJobs(jobArray);
        }
        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <p>Salary: {job.salary} ETH</p>
                    <p>Employer: {job.employer}</p>
                </div>
            ))}
        </div>
    );
};
export default JobList;
