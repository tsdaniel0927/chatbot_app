import React from 'react';
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-item ${message.sender === 'user' ? 'bot-message' : 'user-message'}`}
        >
          <div className="avatar">
            {/* Placeholder for avatar; you can replace it with an image */}
            {message.sender === 'user' ? '🤖' : '🙂'}
          </div>
          <div className="message-content">
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
