// api/index.js
// Load environment variables from .env file for local development.
// On Vercel, environment variables are set directly in the Vercel dashboard.
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// Middleware
// Enable CORS for all origins (for development/demo purposes).
// In a production environment, you might want to restrict this to your frontend domain.
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Initialize Google Gemini AI
// IMPORTANT: On Vercel, ensure GEMINI_API_KEY is set in their dashboard.
// For local testing, ensure it's in your .env file.
let genAI;
let model;

if (!process.env.GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY is not set in environment variables.");
  // If API key is missing, set up a middleware to return an error for all API calls
  app.use((req, res, next) => {
    res.status(500).json({ error: 'Server configuration error: Gemini API Key is missing.' });
  });
} else {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // Using gemini-2.5-flash as per your original code.
  model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // API endpoint for generating explanations
  app.post('/api/generate-explanation', async (req, res) => {
    try {
      // Destructure targetAudience from the request body
      const { question, options, correctAnswer, targetAudience } = req.body;

      // Basic validation
      if (!question || !correctAnswer || !targetAudience) {
        return res.status(400).json({ error: 'Missing required parameters (question, correct answer, or target audience).' });
      }

      // Construct the prompt for the AI with target audience context
      let prompt = `You are an AI tutor designed to explain answers to quiz questions.
      Your explanation should be tailored for ${targetAudience}.
      Use very simple, clear, and age-appropriate English and grammar.
      Avoid complex jargon. Break down ideas into small, easy-to-understand parts.
      Keep the explanation concise, under 150 words.

      Here is the question: "${question}"
      `;
      if (options && options.length > 0) {
        // Ensure options are formatted correctly for the prompt
        prompt += `Options: ${options.map(o => o.text).join(', ')}\n`;
      }
      prompt += `Correct Answer: "${correctAnswer}"

      Explanation:`;

      console.log("Sending prompt to Gemini:", prompt); // For debugging

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text(); // This is the generated explanation

      console.log("Received explanation from Gemini:", text); // For debugging
      res.json({ explanation: text });

    } catch (error) {
      console.error('Error generating explanation:', error.message);
      // Provide a more generic error message to the client
      res.status(500).json({ error: 'Failed to generate explanation. Please try again.' });
    }
  });

  // Simple test route for the API. Vercel will route /api/test to this.
  app.get('/api/test', (req, res) => {
    res.send('Gemini Explanation Backend API is running!');
  });
}

// Export the app instance for Vercel to use as a serverless function
module.exports = app;