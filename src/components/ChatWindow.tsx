
import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatWindowProps {
  botName?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string) => Promise<string>; // Function to send message to bot and get response
}

const ChatWindow: React.FC<ChatWindowProps> = ({ botName = 'AI Assistant', initialMessages = [], onSendMessage }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const newUserMessage: Message = {
        id: `user-${Date.now()}`,
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInput('');
      setIsTyping(true);

      try {
        const botResponseText = await onSendMessage(input);
        const newBotMessage: Message = {
          id: `bot-${Date.now()}`,
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          text: 'Oops! Something went wrong. Please try again.',
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-lg">
      <div className="p-4 bg-blue-600 text-white rounded-t-lg">
        <h2 className="text-xl font-semibold">{botName}</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${msg.sender === 'user'
                ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}
              `}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs opacity-75 mt-1 block text-right">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow bg-white text-gray-800">
              <p className="text-sm italic">{botName} is typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isTyping}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSend}
          disabled={isTyping}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
