import {Action} from "redux";
import {IDialog, IMessage} from "./state";
import {LoadingState} from "../../state";

export enum MessagesActionTypes {
    FETCH_DIALOGS = 'messages/FETCH_DIALOGS',
    FETCH_DIALOGS_SUCCESS = 'messages/FETCH_DIALOGS_SUCCESS',
    FETCH_DIALOGS_FAILED = 'messages/FETCH_DIALOGS_FAILED',
    FETCH_DIALOG_MESSAGES = 'messages/FETCH_DIALOG_MESSAGES',
    FETCH_DIALOG_MESSAGES_SUCCESS = 'messages/FETCH_DIALOG_MESSAGES_SUCCESS',
    FETCH_DIALOG_MESSAGES_FAILED = 'messages/FETCH_DIALOG_MESSAGES_FAILED',
    SET_ACTIVE_DIALOG = 'messages/SET_ACTIVE_DIALOG',
    SET_LOADING_STATE = 'messages/SET_LOADING_STATE',
    RECEIVE_NEW_MESSAGE = 'messages/RECEIVE_NEW_MESSAGE',
    SEND_MESSAGE = 'messages/SEND_MESSAGE',
    SET_LOADING_STATE_WRITE_MESSAGE_MODAL = 'messages/SET_LOADING_STATE_WRITE_MESSAGE_MODAL',
}

export interface IFetchDialogsAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOGS;
}

export interface IFetchDialogsSuccessAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOGS_SUCCESS;
    payload: IDialog[];
}

export interface IFetchDialogsFailedAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOGS_FAILED;
}

export interface IFetchDialogMessagesAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES;
    payload: string
}

export interface IFetchDialogMessagesSuccessAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES_SUCCESS;
    payload: IMessage[];
}

export interface IFetchDialogMessagesFailedAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.FETCH_DIALOG_MESSAGES_FAILED;
}

export interface ISetActiveDialogAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.SET_ACTIVE_DIALOG,
    payload: {
        dialog: IDialog,
        hasMassages: boolean
    }
}

export interface ISetDialogsLoadingStateAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.SET_LOADING_STATE;
    payload: LoadingState
}

export interface IReceiveNewMessageAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.RECEIVE_NEW_MESSAGE;
    payload: IMessage
}

export interface ISendMessageAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.SEND_MESSAGE;
    payload: {
        text: string,
        profileId: string
    }
}

export interface ISetLoadingStateWriteMessageModalAction extends Action<MessagesActionTypes> {
    type: MessagesActionTypes.SET_LOADING_STATE_WRITE_MESSAGE_MODAL;
    payload: LoadingState
}
