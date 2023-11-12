import React from 'react';
import MessageList from './compoents/MessageList';

const App = () => {
  const messages = [
    { sender: 'user', text: 'Hello, how can I help you?', timestamp: '10:00 AM' },
    { sender: 'bot', text: 'I need assistance with my account.', timestamp: '10:01 AM' },
    // ... more messages
  ];

  return <MessageList messages={messages} />;
};

export default App;
