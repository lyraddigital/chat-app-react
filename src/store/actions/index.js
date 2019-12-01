export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    conversationId
});

export const conversationsRequested = () => ({
    type: 'CONVERSATIONS_REQUESTED'
});

export const conversationDeleted = () => ({
    type: 'DELETE_CONVERSATION'
});

export const newMessageAdded = textMessage => ({
    type: 'NEW_MESSAGE_ADDED',
    textMessage
});

export const messagesRequested = (conversationId) => ({
    type: 'MESSAGES_REQUESTED',
    payload: {
        conversationId
    }
});

export const messagesLoaded = (conversationId, messages) => ({
    type: 'MESSAGES_LOADED',
    payload: {
        conversationId,
        messages
    }
});