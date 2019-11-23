import React from 'react';

import './ChatTitle.scss';

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    let chatTitleContents = null;

    if (selectedConversation) {
        chatTitleContents = (
            <>
                <span>{ selectedConversation.title }</span>
                <img 
                    src={require("../../images/icons/trash-logo.svg")} 
                    alt="Delete Conversation"
                    onClick={ () => { onDeleteConversation(); } } />
            </>
        );
    }

    return (
        <div id="chat-title">
            { chatTitleContents }
        </div>
    );
}

export default ChatTitle;