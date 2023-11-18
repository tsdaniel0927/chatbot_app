import React from 'react';
import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

function ChatHistory({ chatHistory }) {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className='container' ref={chatContainerRef}>
        {chatHistory.map((chat, index) => (
            <ChatMessage chat={chat} key={index} />
        ))}
        </div>
    );
}

export default ChatHistory
  