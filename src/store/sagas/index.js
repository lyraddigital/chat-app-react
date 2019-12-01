import { all } from 'redux-saga/effects';

import { watchGetConversationsAsync } from './conversations';
import { watchGetMessagesAsync } from './messages';

export default function* rootSaga() {
    yield all([
        watchGetConversationsAsync(),
        watchGetMessagesAsync()
    ]);
}