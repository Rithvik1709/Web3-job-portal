const hre = require("hardhat");

async function main() {
    const JobPortal = await hre.ethers.getContractFactory("JobPortal");
    const jobPortal = await JobPortal.deploy();
    await jobPortal.deployed();
    console.log(`JobPortal deployed at: ${jobPortal.address}`);

    const DAO = await hre.ethers.getContractFactory("DAO");
    const dao = await DAO.deploy();
    await dao.deployed();
    console.log(`DAO deployed at: ${dao.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
