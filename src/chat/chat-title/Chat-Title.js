import React from 'react';

import './Chat-Title.css';

function ChatTitle() {
    return (
        <div id="chat-title">
            <span>Daryl Duckmanton</span>
            <img src={require("../../images/icons/trash-logo.svg")} alt="Delete Conversation" />
        </div>
    );
}

export default ChatTitle;