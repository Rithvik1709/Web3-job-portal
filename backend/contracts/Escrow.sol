// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Escrow {
    address public employer;
    address public freelancer;
    uint256 public amount;
    bool public isReleased;

    constructor(address _freelancer) payable {
        employer = msg.sender;
        freelancer = _freelancer;
        amount = msg.value;
        isReleased = false;
    }

    function releasePayment() public {
        require(msg.sender == employer, "Only employer can release funds");
        require(!isReleased, "Payment already released");
        payable(freelancer).transfer(amount);
        isReleased = true;
    }
}
