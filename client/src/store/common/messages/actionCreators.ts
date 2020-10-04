import {
    IFetchDialogMessagesAction,
    IFetchDialogMessagesFailedAction,
    IFetchDialogMessagesSuccessAction,
    IFetchDialogsAction,
    IFetchDialogsFailedAction,
    IFetchDialogsSuccessAction, IReceiveNewMessageAction, ISendMessageAction,
    ISetActiveDialogAction,
    ISetDialogsLoadingStateAction, ISetLoadingStateWriteMessageModalAction,
    MessagesActionTypes
} from "./actionTypes";
import {LoadingState} from "../../state";
import {IDialog, IMessage} from "./state";


export const fetchDialogsAction = (): IFetchDialogsAction => ({
    type: MessagesActionTypes.FETCH_DIALOGS,
});

export const fetchDialogsSuccessAction = (payload: IDialog[]): IFetchDialogsSuccessAction => ({
    type: MessagesActionTypes.FETCH_DIALOGS_SUCCESS,
    payload
});

export const fetchDialogsFailedAction = (): IFetchDialogsFailedAction => ({
    type: MessagesActionTypes.FETCH_DIALOGS_FAILED
});

export const fetchDialogMessagesAction = (payload: string): IFetchDialogMessagesAction => ({
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES,
    payload
});

export const fetchDialogMessagesSuccessAction = (payload: IMessage[]): IFetchDialogMessagesSuccessAction => ({
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES_SUCCESS,
    payload
});

export const fetchDialogMessagesFailedAction = (): IFetchDialogMessagesFailedAction => ({
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES_FAILED
});

export const setActiveDialogAction = (payload: {dialog: IDialog, hasMassages: boolean}): ISetActiveDialogAction => ({
    type: MessagesActionTypes.SET_ACTIVE_DIALOG,
    payload
});

export const setMessagesLoadingState = (payload: LoadingState): ISetDialogsLoadingStateAction => ({
    type: MessagesActionTypes.SET_LOADING_STATE,
    payload
});

export const receiveNewMessageAction = (payload: IMessage): IReceiveNewMessageAction => ({
    type: MessagesActionTypes.RECEIVE_NEW_MESSAGE,
    payload
});

export const sendMessageAction = (payload: {text: string, profileId: string}): ISendMessageAction => ({
    type: MessagesActionTypes.SEND_MESSAGE,
    payload
});

export const setLoadingStateWriteMessageModalAction = (payload: LoadingState): ISetLoadingStateWriteMessageModalAction => ({
    type: MessagesActionTypes.SET_LOADING_STATE_WRITE_MESSAGE_MODAL,
    payload
});


export type IMessagesAction =
    IFetchDialogsAction
    | IFetchDialogsSuccessAction
    | IFetchDialogsFailedAction
    | IFetchDialogMessagesAction
    | IFetchDialogMessagesSuccessAction
    | IFetchDialogMessagesFailedAction
    | ISetActiveDialogAction
    | ISetDialogsLoadingStateAction
    | IReceiveNewMessageAction
    | ISendMessageAction
    | ISetLoadingStateWriteMessageModalAction


