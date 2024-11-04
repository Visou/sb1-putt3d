import React, { useState } from 'react';
import { Send, User } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

interface Message {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export function ChatPage() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: 'John',
      text: 'Le bus de la ligne 1 est-il à l\'heure ?',
      timestamp: '10:30'
    },
    {
      id: 2,
      user: 'Marie',
      text: 'Oui, je suis dedans. Il arrive dans 5 minutes.',
      timestamp: '10:31'
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        user: 'Vous',
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h2 className="text-xl font-semibold">Chat en direct - Ligne 1</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${
              msg.user === 'Vous' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <User className="w-5 h-5" />
            </div>
            <div className={`max-w-[70%] ${
              msg.user === 'Vous' 
                ? `${isDarkMode ? 'bg-orange-600' : 'bg-orange-500'} text-white` 
                : `${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`
            } rounded-lg p-3`}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-medium text-sm">{msg.user}</span>
                <span className="text-xs opacity-75">{msg.timestamp}</span>
              </div>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            className={`flex-1 p-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-50 border-gray-200'
            }`}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="btn btn-primary"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}