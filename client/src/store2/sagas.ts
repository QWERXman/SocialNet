import { all } from 'redux-saga/effects';
import { profileSaga } from './common/profile/sagas';
import { messagesSaga } from './common/messages/sagas';

export default function* rootSaga() {
    yield all([
        profileSaga(),
        messagesSaga(),
    ]);
}
