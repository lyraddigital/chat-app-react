import React, { useState } from 'react';

import './Chat-Form.css';

const ChatForm = ({ selectedConversation, onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState('');
    let handleInputChange = null;
    let handleFormSubmit = null;
    let disabledInputs = false;

    if (selectedConversation) {
        handleInputChange = (e) => {
            setTextMessage(e.target.value);
        };
    
        handleFormSubmit = (e) => {
            e.preventDefault();
            
            onMessageSubmitted(textMessage);
            setTextMessage('');
        };
    } else {
        disabledInputs = true;
    }

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
            <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
            <input 
                type="text" 
                placeholder="type a message" 
                value={textMessage}
                disabled={disabledInputs}
                onChange={handleInputChange} />
            <button 
                type="submit"
                disabled={disabledInputs}>Send</button>
        </form> 
    );
}

export default ChatForm;