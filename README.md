# Endless Dev Playground

An interactive browser-based simulator designed to visualize how transactions flow through the Endless network — from submission to finalization.

Built for the Endless Bi-Weekly Developer Contribution Program.

---

## 🚀 Overview

Endless Dev Playground is a modular simulation tool that models:

- Network congestion behavior
- Validator consensus dynamics
- Gas estimation logic
- Transaction flow stages
- Failure scenarios

This project focuses on **technical clarity, developer education, and protocol understanding** rather than surface-level UI.

---

## 🧠 What This Simulates

Transaction lifecycle:

User → Mempool → Validator → Block → Finalized

The engine models:

- Network latency based on load (low / medium / high)
- Congestion factor impact on execution delay
- Validator majority consensus logic (67% rule)
- Failure scenarios when consensus is not reached
- Gas usage estimation based on action type

---

## ⚙️ Architecture
engine/ ├── simulator.js   # Orchestrates transaction flow ├── network.js     # Network congestion & latency model ├── validator.js   # Consensus simulation logic └── utils.js       # Gas calculation utilities
### Key Design Principles

- Modular structure
- Separated responsibility (network vs validator logic)
- Deterministic but dynamic simulation
- Developer-oriented, not gamified
- Extensible for future protocol modeling

---

## 🧪 Simulation Parameters

Users can configure:

- Action type (Transfer / Stake / Vote / Deploy)
- Gas limit
- Network load
- Validator count

The simulator then calculates:

- Latency per step
- Consensus success/failure
- Estimated gas usage
- Final execution status

---

## 🎯 Why This Matters

Understanding protocol behavior is critical for builders.

This tool helps developers:

- Visualize how network congestion affects execution
- See how validator count influences consensus
- Understand gas behavior across action types
- Experiment with "what-if" scenarios

It turns documentation concepts into interactive learning.

---

## 🏗 Built With

- HTML
- CSS
- Vanilla JavaScript (ES Modules)
- Modular simulation engine architecture

No frameworks. No external dependencies.

---

## 🔮 Future Improvements

- Block time modeling
- Slashing simulation
- Validator reliability scoring
- Exportable simulation reports (JSON)
- Real-time metrics dashboard

---
##  Demo :https://sa1-31.github.io/endless-dev-playground/
## 👤 Author

Made by **sa1** for Endless.
