"use client";
import React, { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";
import Image from "next/image"; // For handling images
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  // Toggle the chat window open and close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    const newMessage = { sender: "user", text: message };
    setMessages([...messages, newMessage]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    const botMessage = { sender: "bot", text: data.response };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setMessage('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div
        className={`chatbot-button ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleChat}
      >
        <FaComments size={30} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Virtual Labs Chatbot</span>
            <button className="close-button" onClick={toggleChat}>x</button>
          </div>
          <div className="chatbot-body">
            {/* Chatbot Image */}
            <Image src="/chatbot_img.jpg" alt="Chatbot" width={150} height={150} className="m-auto rounded-full" />
            
            {/* Display Messages */}
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "user"
                      ? "bg-green-500/50 text-black text-right"
                      : "bg-blue-500/50 text-black text-left"
                  } p-3 rounded-lg mb-2 max-w-xs`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* User Input */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}><FaPaperPlane className="send-icon" /></button>
          </div>
        </div>
      )}
    </>
  );
}
