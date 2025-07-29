# 🎓 RG Quiz App - Your Knowledge Navigator

![Quiz App Screenshot](https://via.placeholder.com/800x400?text=RG+Quiz+App+Screenshot)

Welcome to the RG Quiz App, an interactive educational platform designed to help students test their knowledge and receive instant, AI-powered explanations for challenging questions.

## 🚀 Live Application
Experience the app live:  
👉 [https://rg-quiz-vercel-app.vercel.app/](https://rg-quiz-vercel-app.vercel.app/)

## ✨ Key Features
- **Interactive Quizzes**: Multiple-choice questions across various subjects
- **Instant Feedback**: Visual cues for correct/incorrect answers
- **AI-Powered Explanations**: Detailed explanations via Google Gemini API
- **Progress Tracking**: Real-time score monitoring
- **Responsive Design**: Works on all devices
- **PWA Support**: Installable for offline use

## 🛠️ Technology Stack
### Frontend
- React + Vite
- React Bootstrap
- Framer Motion (animations)
- Howler.js (sound effects)
- VitePWA (PWA capabilities)

### Backend
- Node.js + Express
- Google Gemini API
- Serverless functions

### Deployment
- Vercel (frontend + backend)
- GitHub (version control)

## 📂 Project Structure
rg-quiz-project-root/
├── backend/ # Serverless functions
├── frontend/ # React application
├── .gitignore
└── vercel.json # Vercel config

## ⚙️ Local Setup
1. Clone repo:
   ```bash
   git clone https://github.com/joshuaafolabi80/rg-quiz-vercel-app.git
   cd rg-quiz-vercel-app

### Install dependencies:
cd frontend & npm install
cd ../backend & npm install

### Create .env in backend:
GEMINI_API_KEY=your_api_key_here

### Run development servers:
### Terminal 1 (backend)
cd backend & node local-dev-server.js

### Terminal 2 (frontend)
cd frontend & npm run dev

🎥 Demo Walkthrough
1. Select your class, term, subject, and topic
2. Answer quiz questions
3. View instant feedback
4. Click "Still not clear?" for AI-powered explanations
5. Complete quiz to see final score

🙏 Acknowledgements
Google Gemini API for AI capabilities
Vercel for seamless deployment
React and Node.js communities
