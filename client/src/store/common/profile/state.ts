import {AvatarProps} from "@bigheads/core";
import moment from "moment";
import {LoadingState} from "../../state";
import {IPost} from "../news/state";


export interface IProfileState {
    data?: IProfileData,
    posts: IPost[],
    loading: LoadingState,
}

export interface IProfileData {
    _id: string;
    name: string,
    secondName?: string,
    email?: string,
    status?: string,
    birthday?: moment.Moment,
    city?: string,
    avatar: AvatarProps
}

export interface IProfileAvatar {
    accessory: String,
    body: String,
    clothing: String,
    clothingColor: String,
    eyebrows: String,
    eyes: String,
    facialHair: String,
    graphic: String,
    hair: String,
    hairColor: String,
    hat: String,
    hatColor: String,
    lashes: Boolean,
    lipColor: String,
    mask: Boolean,
    mouth: String,
    skinTone: String,
}
