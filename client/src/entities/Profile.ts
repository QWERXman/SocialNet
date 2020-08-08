import moment from "moment";
import {IProfileAvatar} from "./ProfileAvatar";
import {AvatarProps} from "@bigheads/core";

export interface IProfileEntity {
    name: string,
    secondName?: string,
    email?: string,
    avatar?: AvatarProps,
    status?: string,
    birthday?: moment.Moment,
    city?: string
}
