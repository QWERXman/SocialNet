import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {MessagesService} from "service/messages";
import {
    GET_DIALOG_MESSAGES_FAILED,
    GET_DIALOG_MESSAGES_SUCCEEDED,
    GET_DIALOGS,
    GET_DIALOGS_FAILED,
    GET_DIALOGS_SUCCEEDED,
    SET_ACTIVE_DIALOG
} from "./messagesActionTypes";
import {IMessagesAction} from "./messages";

function* fetchDialogs() {
    try {
        const dialogs = yield call(MessagesService.dialogsList);
        yield put({type: GET_DIALOGS_SUCCEEDED, dialogs});
        yield put({type: SET_ACTIVE_DIALOG, activeDialog: dialogs[0]});
    } catch (e) {
        yield put({type: GET_DIALOGS_FAILED, message: e.message});
    }
}

function* setActiveDialog(action: IMessagesAction) {
    try {
        if(!action.activeDialog) {
            throw new Error('Не выбран диалог');
        }
        if (action.hasMassages) {
            return;
        }

        const messages = yield call(MessagesService.dialogMessages, action.activeDialog._id);
        yield put({type: GET_DIALOG_MESSAGES_SUCCEEDED, messages});

    } catch (e) {
        yield put({type: GET_DIALOG_MESSAGES_FAILED, message: e.message});
    }
}

function* MessagesSaga() {
    yield takeLatest(GET_DIALOGS, fetchDialogs);
    yield takeEvery(SET_ACTIVE_DIALOG, setActiveDialog);
}

export default MessagesSaga;
