import { useState } from "react";
import { jobPortal } from "../utils/web3";

const PostJob = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");

    const postJob = async () => {
        const tx = await jobPortal.postJob(title, description, ethers.utils.parseEther(salary));
        await tx.wait();
        alert("Job posted successfully!");
    };

    return (
        <div>
            <h2>Post a Job</h2>
            <input type="text" placeholder="Job Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Salary (ETH)" onChange={(e) => setSalary(e.target.value)} />
            <button onClick={postJob}>Post Job</button>
        </div>
    );
};
export default PostJob;
