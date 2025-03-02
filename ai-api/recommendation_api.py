from fastapi import FastAPI
from transformers import pipeline

app = FastAPI()
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

JOBS = [
    {"id": 1, "title": "Blockchain Developer", "description": "Solidity, Hardhat, Ethereum"},
    {"id": 2, "title": "AI Engineer", "description": "Machine Learning, NLP, PyTorch"},
    {"id": 3, "title": "Frontend Developer", "description": "React, Next.js, Web3.js"},
]

@app.get("/recommend/{skills}")
def recommend_jobs(skills: str):
    recommendations = []
    for job in JOBS:
        score = classifier(job["description"], candidate_labels=[skills])["scores"][0]
        recommendations.append((job, score))

    recommendations.sort(key=lambda x: x[1], reverse=True)
    return [job[0] for job in recommendations]
