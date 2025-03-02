# Web3 Job Portal with DAO Governance & AI Job Recommendations

## Overview
This project is a **decentralized job portal** where employers can post jobs, freelancers can apply, and payments are handled through **smart contracts**. It includes:

✅ **Job Listings on Blockchain** (Ethereum, Solidity)  
✅ **Escrow Smart Contracts for Payments**  
✅ **DAO-based Hiring & Dispute Resolution**  
✅ **AI-Powered Job Recommendations**  
✅ **Fully Decentralized & Web3-Enabled**  

---

## 🏗 Tech Stack
### **Backend (Smart Contracts)**
- Solidity (Ethereum Smart Contracts)
- Hardhat (Deployment & Testing)
- IPFS (Decentralized Storage)

### **Frontend**
- Next.js (React Framework)
- Ethers.js (Blockchain Interaction)
- Web3.js (Ethereum Provider)

### **AI API**
- FastAPI (Python Backend)
- Hugging Face Transformers (AI Job Matching)
- Uvicorn (FastAPI Server)

---

## 📂 Project Structure
```
Web3-Job-Portal/
│── backend/                 # Smart Contracts
│   ├── contracts/
│   │   ├── JobPortal.sol    # Job Management
│   │   ├── Escrow.sol       # Payment Handling
│   │   ├── DAO.sol          # Governance
│   ├── scripts/
│   │   ├── deploy.js        # Deployment Script
│   ├── hardhat.config.js    # Hardhat Config
│── frontend/
│   ├── components/
│   │   ├── PostJob.js       # Job Posting UI
│   │   ├── JobList.js       # Job Listings UI
│   │   ├── DAO.js           # DAO Governance UI
│   │   ├── AIRecommendations.js # AI Job Matching
│   ├── utils/
│   │   ├── web3.js          # Web3 Interaction
│   ├── pages/
│   │   ├── index.js         # Main Page
│── ai-api/
│   ├── recommendation_api.py # AI API for Job Matching
│── README.md                # Documentation
```

---

## 🚀 Deployment Guide

### 1️⃣ Install Dependencies
```sh
npm install --save-dev hardhat ethers dotenv
```

### 2️⃣ Compile and Deploy Smart Contracts
```sh
npx hardhat compile
npx hardhat run scripts/deploy.js --network mumbai
```
_Replace `mumbai` with your network (e.g., localhost, goerli)._  

### 3️⃣ Start AI Job Recommendation API
```sh
cd ai-api
pip install fastapi uvicorn transformers torch
uvicorn recommendation_api:app --reload
```

### 4️⃣ Start Frontend (Next.js)
```sh
cd frontend
npm install
npm run dev
```

---

## 🎯 Features & How It Works
### **1️⃣ Job Posting & Applications**
- Employers post jobs using **PostJob.js** UI.
- Jobs are stored **on-chain** using `JobPortal.sol`.

### **2️⃣ Escrow Smart Contract for Payments**
- Employers deposit salary into **Escrow.sol**.
- Payment is **automatically released** after job completion.

### **3️⃣ DAO-Based Governance**
- Community **votes on disputes** using `DAO.sol`.
- Uses **Snapshot.js for governance voting**.

### **4️⃣ AI-Powered Job Recommendations**
- Uses **Hugging Face NLP models** to match jobs with freelancer skills.
- API hosted using **FastAPI + Uvicorn**.

---

## 🔗 Future Enhancements
✅ **Metamask Authentication**  
✅ **Token-Based Rewards**  
✅ **Skill-Based Smart Matching**  
✅ **On-Chain Freelancer Ratings**  


