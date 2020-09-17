import {
    GET_DIALOG_MESSAGES_FAILED, GET_DIALOG_MESSAGES_SUCCEEDED,
    GET_DIALOGS, GET_DIALOGS_FAILED,
    GET_DIALOGS_SUCCEEDED, NEW_MESSAGE,
    SET_ACTIVE_DIALOG,
    SET_MESSAGES
} from "store/actions/pages/Messages/messagesActionTypes";
import {IMessagesAction} from "store/actions/pages/Messages/messages";
import {IDialogEntity, IMessage} from "entities/Messages";

export interface IMessagesStore {
    dialogs?: IDialogEntity[],
    activeDialog?: IDialogEntity,
    messages?: IMessage[],
    loading?: boolean
}

const initialState: IMessagesStore = {
    dialogs: [],
    activeDialog: undefined,
    messages: [],
    loading: false
};

export default (state = initialState, action: IMessagesAction) => {
    switch (action.type) {
        case GET_DIALOGS:
            return {
                ...state,
                loading: true
            };
        case GET_DIALOGS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                dialogs: action.dialogs,
                activeDialog: action.dialogs && action.dialogs[0]
            }
        case GET_DIALOGS_FAILED:
            return {
                ...state,
                loading: false
            };
        case SET_ACTIVE_DIALOG:
            return {
                ...state,
                activeDialog: action.activeDialog,
                messages: []
            };
        case NEW_MESSAGE:
            return {
                ...state,
                messages: state.messages ? [...state.messages, action.message] : [action.message]
            };
        case GET_DIALOG_MESSAGES_FAILED:
            return {
                ...state,
                messages: []
            };
        case GET_DIALOG_MESSAGES_SUCCEEDED:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
};
