import moment from "moment";
import {IProfileEntity} from "entities/Profile";
import {IProfileData} from "store/common/profile/state";

export interface IDialogEntity {
    receiver: IProfileEntity,
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
