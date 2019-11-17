import React from 'react';

import './Conversation-Item.css';

const ConversationItem = (props) => {
    let className = 'conversation';

    if (props.isActive) {
        className += ' active';
    }

    return (
        <div className={className}>
            <img src={props.conversation.imageUrl} alt={props.conversation.imageAlt} />
            <div className="title-text">{props.conversation.title}</div>
            <div className="created-date">{props.conversation.createdAt}</div>
            <div className="conversation-message">
                {props.conversation.latestMessageText}
            </div>
        </div>
    );
}

export default ConversationItem;