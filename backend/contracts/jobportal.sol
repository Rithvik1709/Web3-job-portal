// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract JobPortal {
    struct Job {
        uint id;
        address employer;
        string title;
        string description;
        uint256 salary;
        address freelancer;
        bool isCompleted;
    }

    uint public jobCounter = 0;
    mapping(uint => Job) public jobs;

    event JobPosted(uint jobId, string title, address employer, uint salary);
    event JobAccepted(uint jobId, address freelancer);
    event JobCompleted(uint jobId);

    function postJob(string memory _title, string memory _description, uint256 _salary) public {
        jobCounter++;
        jobs[jobCounter] = Job(jobCounter, msg.sender, _title, _description, _salary, address(0), false);
        emit JobPosted(jobCounter, _title, msg.sender, _salary);
    }

    function acceptJob(uint _jobId) public {
        require(jobs[_jobId].freelancer == address(0), "Job already taken");
        jobs[_jobId].freelancer = msg.sender;
        emit JobAccepted(_jobId, msg.sender);
    }

    function markJobCompleted(uint _jobId) public {
        require(jobs[_jobId].employer == msg.sender, "Only employer can mark complete");
        jobs[_jobId].isCompleted = true;
        emit JobCompleted(_jobId);
    }
}
