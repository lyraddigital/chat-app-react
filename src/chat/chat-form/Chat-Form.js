import React from 'react';

import './Chat-Form.css';

function ChatForm() {
    return (
        <div id="chat-form">
            <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
            <input type="text" placeholder="type a message" />
        </div>
    );
}

export default ChatForm;