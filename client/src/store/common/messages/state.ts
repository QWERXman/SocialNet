import moment from "moment";
import {LoadingState} from "../../state";
import {IProfileData} from "../profile/state";

export interface IMessagesState {
    dialogs: IDialog[],
    activeDialog?: IDialog,
    messages: {
        [key: string]: IMessage[]
    },
    loading: LoadingState
}

export interface IDialog {
    receiver: IProfileData,
    text: string,
    date?: moment.Moment,
    lastMessageFromMe: boolean
    _id: string
}

export interface IMessage {
    _id?: string;
    text: string,
    date: moment.Moment,
    receiver: IProfileData,
    sender: string,
    dialog: string
}
