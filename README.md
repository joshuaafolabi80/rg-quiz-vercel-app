
# 🎓 RG Quiz App - Your Knowledge Navigator

![App Banner](https://via.placeholder.com/1200x400?text=RG+Quiz+App+Banner)

Welcome to the RG Quiz App, an interactive educational platform designed to help students test their knowledge and receive instant, AI-powered explanations for challenging questions.

## 🚀 Live Application
Experience the app now:  
👉 [https://rg-quiz-vercel-app.vercel.app/](https://rg-quiz-vercel-app.vercel.app/)

## ✨ Key Features
| Feature | Description |
|---------|-------------|
| 📝 Interactive Quizzes | Multiple-choice questions across various subjects and grade levels |
| ✅ Instant Feedback | Visual cues with celebrations for correct answers |
| 🤖 AI-Powered Tutor | Deep explanations via Google Gemini API |
| 📊 Progress Tracking | Real-time score monitoring |
| 📱 Responsive Design | Works perfectly on all devices |
| ⚡ PWA Support | Installable for offline use |

## 💡 How to Use
1. **Access the App**: Open [https://rg-quiz-vercel-app.vercel.app/](https://rg-quiz-vercel-app.vercel.app/)
2. **Start Quiz**:
   - Select your class, term, subject, and topic
   - Click "Start Quiz"
3. **Answer Questions**:
   - Read each question carefully
   - Select your answer
   - Get immediate feedback
4. **Get Explanations**:
   - Basic explanation appears automatically
   - Click "Still not clear?" for AI-powered deep explanation
5. **Complete Quiz**:
   - View your final score
   - Option to save results with your name

## 🛠️ Technology Stack
### Frontend
- **Framework**: React + Vite
- **UI**: React Bootstrap + Framer Motion
- **Audio**: Howler.js
- **PWA**: VitePWA
- **Markdown**: React Markdown

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **AI**: Google Gemini API
- **Middleware**: CORS, dotenv

### Deployment
- **Platform**: Vercel
- **CI/CD**: GitHub Integration

## 📂 Project Structure
```text
rg-quiz-project-root/
├── backend/
│   ├── api/          # Serverless functions
│   ├── .env          # Environment variables
│   └── package.json  # Backend dependencies
├── frontend/
│   ├── public/       # Static assets
│   ├── src/          # React components
│   └── package.json  # Frontend dependencies
└── vercel.json       # Deployment config
```

## ⚙️ Local Development
### Prerequisites
- Node.js (v18+)
- Google Gemini API key

### Setup
```bash
# Clone repository
git clone https://github.com/joshuaafolabi80/rg-quiz-vercel-app.git
cd rg-quiz-vercel-app

# Install dependencies
cd frontend & npm install
cd ../backend & npm install

# Configure environment
echo "GEMINI_API_KEY=your_key_here" > backend/.env
```

### Running Locally
```bash
## Terminal 1 - Backend
cd backend & node local-dev-server.js

## Paste the following code into local-dev-server.js:

require('dotenv').config({ path: '.env' });
if (!process.env.GEMINI_API_KEY) {
  console.error("CRITICAL ERROR: GEMINI_API_KEY is still not loaded from .env in local-dev-server.js!");
} else {
  console.log("GEMINI_API_KEY successfully loaded from .env for local development.");
}
const app = require('./api');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Local backend server running on http://localhost:${PORT}`);
  console.log(`Gemini API Key status in app: ${process.env.GEMINI_API_KEY ? 'Loaded' : 'MISSING!'}`);
});


## Terminal 2 - Frontend
cd frontend & npm run dev
```

Access the app at: [http://localhost:5173](http://localhost:5173)

## 🚀 Deployment
1. Set up Vercel project
2. Add `GEMINI_API_KEY` to environment variables
3. Connect GitHub repository
4. Deploy!

Automatic deployments are triggered on pushes to `main` branch.

## 🙏 Acknowledgements
- **Google** for the Gemini API
- **Vercel** for seamless deployment
- **Open Source Communities** for amazing tools
