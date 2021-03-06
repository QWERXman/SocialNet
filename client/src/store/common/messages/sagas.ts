import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {MessagesService} from "service/messages";
import {
    IFetchDialogMessagesAction,
    ISendMessageAction,
    ISetActiveDialogAction,
    MessagesActionTypes
} from "./actionTypes";
import {
    fetchDialogMessagesAction,
    fetchDialogMessagesFailedAction,
    fetchDialogMessagesSuccessAction,
    fetchDialogsFailedAction,
    fetchDialogsSuccessAction, receiveNewMessageAction,
    setActiveDialogAction, setLoadingStateWriteMessageModalAction,
    setMessagesLoadingState
} from "./actionCreators";
import {LoadingState} from "../../state";


export function* messagesSaga() {
    yield takeEvery(MessagesActionTypes.SET_ACTIVE_DIALOG, setActiveDialog);
    yield takeLatest(MessagesActionTypes.FETCH_DIALOGS, fetchDialogs);
    yield takeLatest(MessagesActionTypes.FETCH_DIALOG_MESSAGES, fetchMessages);
    yield takeLatest(MessagesActionTypes.SEND_MESSAGE, sendMessage);
}

function* fetchDialogs() {
    try {
        yield put(setMessagesLoadingState(LoadingState.LOADING));
        const dialogs = yield call(MessagesService.dialogsList);
        yield put(fetchDialogsSuccessAction(dialogs));
        yield put(setActiveDialogAction(dialogs[0]));
        yield put(setMessagesLoadingState(LoadingState.LOADED));
    } catch (e) {
        yield put(fetchDialogsFailedAction());
        yield put(setMessagesLoadingState(LoadingState.ERROR));
    }
}

function* fetchMessages({payload: dialogId}: IFetchDialogMessagesAction) {
    try {
        yield put(setMessagesLoadingState(LoadingState.LOADING));
        const messages = yield call(MessagesService.dialogMessages, dialogId);
        yield put(fetchDialogMessagesSuccessAction(messages));
        yield put(setMessagesLoadingState(LoadingState.LOADED));
    } catch (e) {
        yield put(fetchDialogMessagesFailedAction());
        yield put(setMessagesLoadingState(LoadingState.ERROR));
    }
}

function* setActiveDialog({payload}: ISetActiveDialogAction) {
    if (!payload.dialog) {
        return;
    }
    // Чтоб не запрашивать один диалог несколько раз, если что сообщения придут по сокету
    if (payload.hasMassages) {
        return;
    }

    yield put(fetchDialogMessagesAction(payload.dialog._id));
}

function* sendMessage({payload}: ISendMessageAction) {
    try {
        yield put(setLoadingStateWriteMessageModalAction(LoadingState.LOADING));
        const message = yield call(MessagesService.sendMessage, payload);
        yield put(receiveNewMessageAction(message.data));
        yield put(setLoadingStateWriteMessageModalAction(LoadingState.LOADED));
    } catch (e) {
        yield put(setLoadingStateWriteMessageModalAction(LoadingState.ERROR));
    }
}
