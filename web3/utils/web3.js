import { ethers } from "ethers";
import JobPortalABI from "../artifacts/contracts/JobPortal.sol/JobPortal.json";
import DAOABI from "../artifacts/contracts/DAO.sol/DAO.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const jobPortal = new ethers.Contract("Y0x1234567890abcdef1234567890abcdef12345678", JobPortalABI.abi, signer);// Replace with your deployed contract address
const dao = new ethers.Contract("0xabcdef1234567890abcdef1234567890abcdef12", DAOABI.abi, signer);// Replace with your deployed contract address

export { jobPortal, dao };