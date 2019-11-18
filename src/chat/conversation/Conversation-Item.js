import React from 'react';
import classNames from 'classnames';

import './Conversation-Item.css';

const ConversationItem = ({ conversation, isActive }) => {
    const className = classNames('conversation', {
        'active': isActive
    });

    return (
        <div className={className}>
            <img src={conversation.imageUrl} alt={conversation.imageAlt} />
            <div className="title-text">{conversation.title}</div>
            <div className="created-date">{conversation.createdAt}</div>
            <div className="conversation-message">
                {conversation.latestMessageText}
            </div>
        </div>
    );
}

export default ConversationItem;