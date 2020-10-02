import moment from "moment";
import {AvatarProps} from "@bigheads/core";
import {IProfileData} from "../store/common/profile/state";

export interface IPostEntity {
    title: string,
    text: string,
    date?: moment.Moment,
    avatar: AvatarProps,
    profile: IProfileData,
    _id?: string
}
