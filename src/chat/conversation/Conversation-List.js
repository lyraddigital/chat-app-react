import React from 'react';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';

const ConversationList = ({ conversations, selectedConversationId }) => {
    const conversationItems = conversations.map((conversation) => {
        return <ConversationItem 
            key={conversation.id}
            isActive={conversation.id === selectedConversationId }
            conversation={conversation} />;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;