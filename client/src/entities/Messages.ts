import moment from "moment";
import {IProfileEntity} from "entities/Profile";

export interface IDialogEntity {
    receiver: IProfileEntity,
    text: string,
    date?: moment.Moment,
    _id?: string
}

