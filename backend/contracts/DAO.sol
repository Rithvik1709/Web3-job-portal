// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DAO {
    struct Proposal {
        uint id;
        string description;
        uint votesFor;
        uint votesAgainst;
        bool executed;
    }

    mapping(uint => Proposal) public proposals;
    mapping(address => bool) public voters;
    uint public proposalCount;

    event ProposalCreated(uint id, string description);
    event Voted(uint proposalId, bool support, address voter);
    event Executed(uint proposalId);

    function createProposal(string memory _description) public {
        proposalCount++;
        proposals[proposalCount] = Proposal(proposalCount, _description, 0, 0, false);
        emit ProposalCreated(proposalCount, _description);
    }

    function vote(uint _proposalId, bool _support) public {
        require(!voters[msg.sender], "Already voted");
        voters[msg.sender] = true;

        if (_support) {
            proposals[_proposalId].votesFor++;
        } else {
            proposals[_proposalId].votesAgainst++;
        }

        emit Voted(_proposalId, _support, msg.sender);
    }

    function executeProposal(uint _proposalId) public {
        require(!proposals[_proposalId].executed, "Already executed");
        require(proposals[_proposalId].votesFor > proposals[_proposalId].votesAgainst, "Not enough votes");

        proposals[_proposalId].executed = true;
        emit Executed(_proposalId);
    }
}
