import React from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import { conversations, selectedConversation } from '../../data/conversations';
import { messages } from '../../data/messages';

import './Chat-Shell.css';

const ChatShell = () => {
    return (
        <div id="chat-container">
            <ConversationSearch />
            <ConversationList conversations={conversations} />
            <NewConversation />
            <ChatTitle selectedConversation={selectedConversation} />
            <MessageList messages={messages} />
            <ChatForm />
        </div>
    );
}

export default ChatShell;