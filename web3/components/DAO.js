import { useState, useEffect } from "react";
import { dao } from "../utils/web3";

const DAO = () => {
    const [description, setDescription] = useState("");
    
    const createProposal = async () => {
        const tx = await dao.createProposal(description);
        await tx.wait();
        alert("Proposal created!");
    };

    return (
        <div>
            <h2>DAO Governance</h2>
            <input type="text" placeholder="Proposal Description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={createProposal}>Create Proposal</button>
        </div>
    );
};
export default DAO;
