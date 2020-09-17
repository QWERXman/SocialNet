import {IBaseActionType} from "../../base";
import {IDialogEntity, IMessage} from "entities/Messages";
import {GET_DIALOGS, NEW_MESSAGE, SET_ACTIVE_DIALOG} from "./messagesActionTypes";

export interface IMessagesAction extends IBaseActionType {
    dialogs?: IDialogEntity[],
    activeDialog?: IDialogEntity,
    messages?: IMessage[],
    message?: IMessage
}

export const getDialogs = () : IMessagesAction => {
    return {type: GET_DIALOGS}
}

export const newMessage = (message: IMessage) : IMessagesAction => {
    return {
        type: NEW_MESSAGE,
        message
    }
}

export const setActiveDialog = (dialog:IDialogEntity) => {
    return {
        type: SET_ACTIVE_DIALOG,
        activeDialog: dialog
    }
}
