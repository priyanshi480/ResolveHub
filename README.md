# ResolveHub
# MERN Stack App

This is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js). This guide will help you set up and run the project locally.

---

## 🌐 Tech Stack

- **Frontend**: React, Axios, Bootstrap/Tailwind (optional)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (local or cloud - MongoDB Atlas)

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/priyanshi480/ResolveHub.git
cd ResolveHub
2. Setup the Backend (Server)

cd backend
npm install

Replace the URL in config.js file inside the backend/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
Run the backend:
npm start
Server will start on http://localhost:5000

3. Setup the Frontend (Client)

cd ../frontend
npm install
Start the React app:

npm start
React app will run on http://localhost:3000
