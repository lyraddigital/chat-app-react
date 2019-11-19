import React, { useState } from 'react';

import './Chat-Form.css';

const ChatForm = ({ onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState('');
    const handleChange = (e) => {
        setTextMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onMessageSubmitted(textMessage);
        setTextMessage('');
    };

    return (
        <form id="chat-form" onSubmit={handleSubmit}>
            <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
            <input 
                type="text" 
                placeholder="type a message" 
                value={textMessage}
                onChange={handleChange} />
            <button type="submit">Send</button>
        </form> 
    );
}

export default ChatForm;