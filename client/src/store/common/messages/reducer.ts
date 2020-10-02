import {IMessagesState} from "./state";
import {LoadingState} from "../../state";
import {IMessagesAction} from "./actionCreators";
import {MessagesActionTypes} from "./actionTypes";

const initialState: IMessagesState = {
    dialogs: [],
    activeDialog: undefined,
    messages: {},
    loading: LoadingState.LOADED
};

export default (state = initialState, action: IMessagesAction) => {
    switch (action.type) {
        case MessagesActionTypes.SET_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            }
        case MessagesActionTypes.FETCH_DIALOGS_SUCCESS:
            return {
                ...state,
                dialogs: action.payload
            }
        case MessagesActionTypes.SET_ACTIVE_DIALOG:
            return {
                ...state,
                activeDialog: action.payload.dialog,
            };
        case MessagesActionTypes.FETCH_DIALOG_MESSAGES_SUCCESS:
            if (!state.activeDialog) {
                return state;
            }

            const messages = action.payload;

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.activeDialog._id]: messages
                }
            };
        case MessagesActionTypes.FETCH_DIALOG_MESSAGES_FAILED:
            if (!state.activeDialog) {
                return state;
            }

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.activeDialog._id]: []
                }
            };
        case MessagesActionTypes.RECEIVE_NEW_MESSAGE:
            const message = action.payload;
            if (!message || !state.dialogs || !state.activeDialog) {
                return state;
            }

            const dialogId = message.dialog

            const updatedDialog = state.dialogs.find(item => item._id === dialogId) || state.dialogs[0]
            updatedDialog.text = message.text;
            // @ts-ignore
            updatedDialog.lastMessageFromMe = message.receiver === state.activeDialog.receiver._id;
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
                        ? [message, ...state.messages[dialogId]]
                        : [message]
                }
            };

        default:
            return state;
    }
};
