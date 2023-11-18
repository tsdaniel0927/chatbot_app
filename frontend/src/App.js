import React, { useState } from 'react';
import ChatHistory from './compoents/ChatHistory';
import TextInput from './compoents/TextInput';
import './App.css';

export default function App(){
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isComposing, setIsComposing] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isComposing){
      handleSendMessage();
    }
  };

  return (
    <div>
      <ChatHistory chatHistory={chatHistory} />
      <TextInput 
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        handleCompositionStart={() => setIsComposing(true)}
        handleCompositionEnd={() => setIsComposing(false)}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}
