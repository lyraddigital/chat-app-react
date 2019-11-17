import React from 'react';

import './Message.css';

const Message = (props) => {
    let messageClass = 'message-row';
    let imageThumbnail = null;

    if (props.isMyMessage) {
        messageClass += ' you-message';
    } else {
        messageClass += ' other-message';
        imageThumbnail = <img src={props.message.imageUrl} alt={props.message.imageAlt} />;
    }

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