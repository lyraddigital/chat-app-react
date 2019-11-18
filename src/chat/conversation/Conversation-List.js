import React from 'react';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';

const ConversationList = (props) => {
    const conversationItems = props.conversations.map((conversation) => {
        return <ConversationItem 
            key={conversation.id}
            isActive={conversation.id === props.selectedConversationId }
            conversation={conversation} />;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;