import React, { useState } from 'react';

import './ChatForm.css';

const ChatForm = ({ selectedConversation, onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState('');
    let formContents = null;
    let handleFormSubmit = null;

    if (selectedConversation) {
        formContents = (
            <>
                <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
                <input 
                    type="text" 
                    placeholder="type a message" 
                    value={textMessage}
                    onChange={ (e) => { setTextMessage(e.target.value); } } />
                <button type="submit">Send</button>
            </>
        );
    
        handleFormSubmit = (e) => {
            e.preventDefault();
            
            if (textMessage.length > 0) {
                onMessageSubmitted(textMessage);
                setTextMessage('');
            }
        };
    }

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
            {formContents}
        </form> 
    );
}

export default ChatForm;