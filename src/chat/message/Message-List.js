import React from 'react';

import Message from './Message';
import './Message-List.css';

const MessageList = (props) => {
    const messageItems = props.messages.map((message, index) => {
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