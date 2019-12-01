const initialState = {
    messageDetails: {}
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MESSAGES_LOADED':
            const { conversationId, messages } = action.payload;
            const newConversationMapEntry = { messages };

            const newMessageDetails = { ...state.messageDetails };
            newMessageDetails[conversationId] = newConversationMapEntry;

            return { messageDetails: newMessageDetails };
        default: 
            return state;
    }
}

export default messagesReducer;