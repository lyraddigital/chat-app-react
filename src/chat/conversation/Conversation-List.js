import React from 'react';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';

const ConversationList = (props) => {
    const selectedConversationIndex = 0;
    const conversationItems = props.conversations.map((conversation, index) => {
        return <ConversationItem 
            key={index}
            isActive={index === selectedConversationIndex }
            conversation={conversation} />;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;