import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { conversationChanged, newMessageAdded, conversationDeleted, conversationsRequested } from '../../store/actions';
import ConversationSearch from '../../components/conversation/conversation-search/ConversationSearch';
import NoConversations from '../../components/conversation/no-conversations/NoConversations';
import ConversationList from '../../components/conversation/conversation-list/ConversationList';
import NewConversation from '../../components/conversation/new-conversation/NewConversation';
import ChatTitle from '../../components/chat-title/ChatTitle';
import MessageList from '../message/MessageList';
import ChatForm from '../../components/chat-form/ChatForm';

import './ChatShell.scss';

const ChatShell = () => {
    const conversations = useSelector(state => state.conversationState.conversations);
    const selectedConversation = useSelector(state => state.conversationState.selectedConversation);
    const dispatch = useDispatch();
    const onConversationChanged = conversationId => {dispatch(conversationChanged(conversationId))};
    const onMessageSubmitted = messageText => { dispatch(newMessageAdded(messageText)); };
    const onDeleteConversation = () => { dispatch(conversationDeleted()); };
    const loadConversations = () =>  dispatch(conversationsRequested());

    useEffect(() => {
        loadConversations();
    }, []);

    let conversationContent = (
        <>
            <NoConversations></NoConversations>
        </>
    );

    if (conversations.length > 0) {
        conversationContent = (
            <>
                <MessageList conversationId={selectedConversation.id} />
            </>
        );
    }

    return (
        <div id="chat-container">
            <ConversationSearch conversations={conversations} />
            <ConversationList
                onConversationItemSelected={onConversationChanged}
                conversations={conversations}
                selectedConversation={selectedConversation} />
            <NewConversation />
            <ChatTitle 
                selectedConversation={selectedConversation}
                onDeleteConversation={onDeleteConversation} />
            {conversationContent}
            <ChatForm 
                selectedConversation={selectedConversation}
                onMessageSubmitted={onMessageSubmitted} />
        </div>
    );
}


export default ChatShell;
