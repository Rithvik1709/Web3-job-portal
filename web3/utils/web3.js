import { ethers } from "ethers";
import JobPortalABI from "../artifacts/contracts/JobPortal.sol/JobPortal.json";
import DAOABI from "../artifacts/contracts/DAO.sol/DAO.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const jobPortal = new ethers.Contract("YOUR_DEPLOYED_JOB_PORTAL_ADDRESS", JobPortalABI.abi, signer);
const dao = new ethers.Contract("YOUR_DEPLOYED_DAO_ADDRESS", DAOABI.abi, signer);

export { jobPortal, dao };