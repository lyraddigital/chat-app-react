import { all } from 'redux-saga/effects';

import { watchGetConversationsAsync } from './conversations';

export default function* rootSaga() {
    yield all([
        watchGetConversationsAsync()
    ]);
}