import {SET_PROFILE_AVATAR, SET_PROFILE_DATA} from "./profileActionTypes";
import { IProfileEntity } from "entities/Profile";
import { IBaseActionType } from "store/actions/base";
import {IProfileAvatar} from "entities/ProfileAvatar";
import {AvatarProps} from "@bigheads/core";

export interface ISetProfileData extends IBaseActionType{
    profileData: IProfileEntity
}

export interface ISetProfileAvatar extends IBaseActionType{
    avatar: AvatarProps
}

export const setProfileData = (profileData: IProfileEntity): ISetProfileData => {
    return {
        type: SET_PROFILE_DATA,
        profileData
    }
}

export const setProfileAvatar = (avatar: AvatarProps): ISetProfileData => {
    return {
        type: SET_PROFILE_AVATAR,
        profileData: {
            name: '',
            avatar
        },
    }
}
