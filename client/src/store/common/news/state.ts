import {LoadingState} from "../../state";
import {IProfileData} from "../profile/state";
import moment from "moment";
import {AvatarProps} from "@bigheads/core";


export interface INewsState {
    posts: IPost[],
    loading: LoadingState,
}


export interface IPost {
    title: string,
    text: string,
    date?: moment.Moment,
    avatar: AvatarProps,
    profile: IProfileData,
    _id?: string
}
