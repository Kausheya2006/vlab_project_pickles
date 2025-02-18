// /app/api/chatbot/chat.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput } = await req.json();

    const response = await fetch("http://localhost:4000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput }),
    });

    // Check if the response is JSON
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Expected JSON response from API");
    }

    const data = await response.json();
    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error("Error in chatbot API:", error);
    return NextResponse.json({ response: "Error processing your message." });
  }
}