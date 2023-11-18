import React from 'react';

function ChatMessage({ chat }) {
  return (
    <div className={`message-item ${chat.sender === 'user' ? 'user-message' : 'bot-message'}`}>
      <p className='message-content'>{chat.text}</p>
    </div>
  );
}


export default ChatMessage;
