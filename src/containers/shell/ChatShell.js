import React, { useState } from 'react';
import ConversationSearch from '../../components/conversation/conversation-search/ConversationSearch';
import ConversationList from '../../components/conversation/conversation-list/ConversationList';
import NewConversation from '../../components/conversation/new-conversation/NewConversation';
import ChatTitle from '../../components/chat-title/ChatTitle';
import MessageList from '../../components/message/MessageList';
import ChatForm from '../../components/chat-form/Chat-Form';
import { conversations, selectedConversation } from '../../data/conversations';

import './ChatShell.css';

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