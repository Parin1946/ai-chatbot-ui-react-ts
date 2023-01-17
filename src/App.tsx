import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css'; // Assuming you have some basic CSS for the app

function App() {
  const [botResponses, setBotResponses] = useState<string[]>([
    "Hello! How can I assist you today?",
    "I'm an AI assistant. I can help with information, tasks, and more.",
    "I'm still learning, but I'm here to help!",
    "That's an interesting question! Let me think...",
    "I'm powered by advanced AI models.",
  ]);

  const handleSendMessage = async (message: string): Promise<string> => {
    // Simulate an API call or complex logic for bot response
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerCaseMessage = message.toLowerCase();
        let response = "I'm not sure how to respond to that. Can you rephrase?";

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
          response = "Hi there! How can I help you?";
        } else if (lowerCaseMessage.includes('how are you')) {
          response = "I'm an AI, so I don't have feelings, but I'm ready to assist you!";
        } else if (lowerCaseMessage.includes('what can you do')) {
          response = "I can chat with you, provide information, and help with various tasks. Just ask!";
        } else if (lowerCaseMessage.includes('your name')) {
          response = "I don't have a name. You can call me AI Assistant.";
        } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
          response = "You're welcome! Is there anything else?";
        } else if (lowerCaseMessage.includes('weather')) {
          response = "I can't check the current weather, but I can tell you it's always sunny in the digital world!";
        } else if (lowerCaseMessage.includes('time')) {
          response = `The current time is ${new Date().toLocaleTimeString()}.`;
        } else if (lowerCaseMessage.includes('date')) {
          response = `Today's date is ${new Date().toLocaleDateString()}.`;
        } else if (lowerCaseMessage.includes('joke')) {
          response = "Why don't scientists trust atoms? Because they make up everything!";
        } else if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('artificial intelligence')) {
          response = "Artificial intelligence is a broad field that enables machines to perform tasks that typically require human intelligence.";
        } else if (lowerCaseMessage.includes('machine learning')) {
          response = "Machine learning is a subset of AI that focuses on building systems that learn from data.";
        } else if (lowerCaseMessage.includes('deep learning')) {
          response = "Deep learning is a specialized field within machine learning that uses neural networks with many layers.";
        } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
          response = "Goodbye! Have a great day!";
        } else {
          // Fallback to a random generic response if no specific keyword is matched
          response = botResponses[Math.floor(Math.random() * botResponses.length)];
        }
        resolve(response);
      }, 1000); // Simulate network delay
    });
  };

  return (
    <div className="App flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-2xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <ChatWindow onSendMessage={handleSendMessage} botName="Ethan's AI Chatbot" />
      </div>
    </div>
  );
}

export default App;
