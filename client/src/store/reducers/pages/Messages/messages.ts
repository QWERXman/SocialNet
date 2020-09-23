import {
    GET_DIALOG_MESSAGES_FAILED, GET_DIALOG_MESSAGES_SUCCEEDED,
    GET_DIALOGS, GET_DIALOGS_FAILED,
    GET_DIALOGS_SUCCEEDED, NEW_MESSAGE,
    SET_ACTIVE_DIALOG,
} from "store/actions/pages/Messages/messagesActionTypes";
import {IMessagesAction} from "store/actions/pages/Messages/messages";
import {IDialogEntity, IMessage} from "entities/Messages";

export interface IMessagesStore {
    dialogs?: IDialogEntity[],
    activeDialog?: IDialogEntity,
    messages?: {
        [key: string]: IMessage[]
    },
    loading?: boolean
}

const initialState: IMessagesStore = {
    dialogs: [],
    activeDialog: undefined,
    messages: {},
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
            };
        case NEW_MESSAGE:
            if (!action.message || !state.dialogs || !state.activeDialog) {
                return state;
            }

            const dialogId = action.message.dialog

            const updatedDialog = state.dialogs.find(item => item._id === dialogId) || state.dialogs[0]
            updatedDialog.text = action.message.text;
            // @ts-ignore
            updatedDialog.lastMessageFromMe = action.message.receiver === state.activeDialog.receiver._id;
            const updatedDialogs = state.dialogs.filter(item => item._id !== dialogId)

            return {
                ...state,
                dialogs: [
                    updatedDialog,
                    ...updatedDialogs,
                ],
                messages: {
                    ...state.messages,
                    [dialogId]: state.messages && state.messages[dialogId]
                        ? [action.message, ...state.messages[dialogId]]
                        : [action.message]
                }
            };
        case GET_DIALOG_MESSAGES_FAILED:
            return {
                ...state,
                messages: []
            };
        case GET_DIALOG_MESSAGES_SUCCEEDED:
            if (!state.activeDialog) {
                return state;
            }

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.activeDialog._id]: action.messages
                }
            };
        default:
            return state;
    }
};
