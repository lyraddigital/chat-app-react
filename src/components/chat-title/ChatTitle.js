import React from 'react';

import './ChatTitle.css';

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    return (
        <div id="chat-title">
            <span>{selectedConversation.title}</span>
            <img 
                src={require("../../images/icons/trash-logo.svg")} 
                alt="Delete Conversation"
                onClick={() => { onDeleteConversation(); } } />
        </div>
    );
}

export default ChatTitle;