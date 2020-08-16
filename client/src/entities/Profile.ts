import moment from "moment";
import {AvatarProps} from "@bigheads/core";

export interface IProfileEntity {
    _id: string;
    name: string,
    secondName?: string,
    email?: string,
    avatar?: AvatarProps,
    status?: string,
    birthday?: moment.Moment,
    city?: string
}
