import dotenv from "dotenv";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Dynamically import `iron-session` to support ES modules
const { withIronSession } = await import("iron-session");

dotenv.config();

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

// 🚀 Virtual Labs Knowledge Base
const VLABS_KNOWLEDGE = `
  You are the Virtual Labs AI chatbot, designed exclusively to assist users with information related to Virtual Labs (vlab.co.in).
  Your responses must be strictly limited to information about Virtual Labs, its courses, functionalities, and official content.
`;

async function runChat(userInput, chatHistory) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = { temperature: 0.7, topK: 40, topP: 0.9, maxOutputTokens: 1000 };
  const safetySettings = [{ category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE }];
  const formattedHistory = chatHistory.map((entry) => ({
    role: entry.role,
    parts: [{ text: entry.text }],
  }));
  const chat = model.startChat({ generationConfig, safetySettings, history: formattedHistory });

  // Restricting non-Virtual Labs topics
  if (userInput.toLowerCase().includes("weather") || userInput.toLowerCase().includes("sports")) {
    return "I can only answer questions related to Virtual Labs.";
  }

  try {
    const result = await chat.sendMessage(userInput);
    return result.response;  // Assuming result.response is already the text
  } catch (error) {
    console.error("Error during chat:", error);
    return "There was an error processing your request. Please try again.";
  }
}

const chatRoute = async (req, res) => {
  const { userInput } = req.body;
  if (!userInput) return res.status(400).json({ error: "Invalid input" });

  try {
    // Use session from iron-session
    const chatHistory = req.session.chatHistory || [{ role: "user", text: "How can I assist you?" }];
    const aiResponse = await runChat(userInput, chatHistory);

    req.session.chatHistory = [
      ...chatHistory,
      { role: "user", text: userInput },
      { role: "model", text: aiResponse },
    ];
    await req.session.save();

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chatRoute:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export the route wrapped with iron-session
export default withIronSession(chatRoute, {
  password: process.env.SESSION_SECRET,
  cookieName: "vlab-chat-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
