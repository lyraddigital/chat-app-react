import React from 'react';
import { connect } from 'react-redux';

import { conversationChanged, newMessageAdded, conversationDeleted } from '../../store/actions';
import ConversationSearch from '../../components/conversation/conversation-search/ConversationSearch';
import ConversationList from '../../components/conversation/conversation-list/ConversationList';
import NewConversation from '../../components/conversation/new-conversation/NewConversation';
import ChatTitle from '../../components/chat-title/ChatTitle';
import MessageList from '../../components/message/MessageList';
import ChatForm from '../../components/chat-form/Chat-Form';

import './ChatShell.css';

const ChatShell = ({ 
    conversations, 
    selectedConversation, 
    conversationChanged,
    onMessageSubmitted,
    onDeleteConversation
}) => {
    return (
        <div id="chat-container">
            <ConversationSearch />
            <ConversationList
                onConversationItemSelected={conversationChanged}
                conversations={conversations}
                selectedConversationId={selectedConversation.id} />
            <NewConversation />
            <ChatTitle 
                selectedConversation={selectedConversation}
                onDeleteConversation={onDeleteConversation} />
            <MessageList messages={selectedConversation.messages} />
            <ChatForm onMessageSubmitted={onMessageSubmitted} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        conversations: state.conversationState.conversations,
        selectedConversation: state.conversationState.selectedConversation
    };
};
  
const mapDispatchToProps = dispatch => ({
    conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
    onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText)); },
    onDeleteConversation: () => { dispatch(conversationDeleted()); }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);