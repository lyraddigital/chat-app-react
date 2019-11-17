import React from 'react';
import ChatSearch from '../search/Chat-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';

import './Chat-Shell.css';

function ChatShell() {
    return (
        <div id="chat-container">
            <ChatSearch />
            <ConversationList />
            <NewConversation />
            <ChatTitle />
            <MessageList />
            <ChatForm />
        </div>
    );
}

export default ChatShell;