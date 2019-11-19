import React from 'react';

import ConversationItem from '../conversation-item/ConversationItem';
import './ConversationList.css';

const ConversationList = ({ conversations, selectedConversationId, onConversationItemSelected }) => {
    const conversationItems = conversations.map((conversation) => {
        return <ConversationItem 
            key={conversation.id}
            onConversationItemSelected={onConversationItemSelected}
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