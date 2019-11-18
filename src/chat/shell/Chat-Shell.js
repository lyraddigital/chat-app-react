import React, { useState } from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import { conversations, selectedConversation } from '../../data/conversations';

import './Chat-Shell.css';

const ChatShell = () => {
    const [selectedConvo] = useState(selectedConversation);
    const [cons] = useState(conversations);

    return (
        <div id="chat-container">
            <ConversationSearch />
            <ConversationList
                conversations={cons}
                selectedConversationId={selectedConvo.id} />
            <NewConversation />
            <ChatTitle selectedConversation={selectedConvo} />
            <MessageList messages={selectedConversation.messages} />
            <ChatForm />
        </div>
    );
}

export default ChatShell;