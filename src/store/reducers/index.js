import { combineReducers } from 'redux';

import conversationState from './conversations';
import messagesState from './messages';

export default combineReducers({
  conversationState,
  messagesState
});