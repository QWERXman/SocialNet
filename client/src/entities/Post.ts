import moment from "moment";
import {AvatarProps} from "@bigheads/core";
import {IProfileEntity} from "entities/Profile";

export interface IPostEntity {
    title: string,
    text: string,
    date?: moment.Moment,
    avatar: AvatarProps,
    profile: IProfileEntity,
    _id?: string
}
