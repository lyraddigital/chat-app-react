import React from 'react';

import Message from './Message';
import './MessageList.css';

const MessageList = ({ messages }) => {
    const messageItems = messages.map((message, index) => {
        return <Message 
            key={index}
            isMyMessage={message.isMyMessage}
            message={message} />;
    });

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}

export default MessageList;