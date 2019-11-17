import React from 'react';
import classNames from 'classnames';

import './Message.css';

const Message = (props) => {
    const messageClass = classNames('message-row', {
        'you-message': props.isMyMessage,
        'other-message': !props.isMyMessage
    });
    
    const imageThumbnail = 
        props.isMyMessage ? null : <img src={props.message.imageUrl} alt={props.message.imageAlt} />;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {props.message.messageText}
                </div>
                <div className="message-time">{props.message.createdAt}</div>
            </div>
        </div>
    );
}

export default Message;