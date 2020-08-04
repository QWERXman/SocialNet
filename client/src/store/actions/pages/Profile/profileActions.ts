import { SET_PROFILE_DATA } from "./profileActionTypes";
import { IProfileEntity } from "entities/Profile";
import { IBaseActionType } from "../../base";

export interface ISetProfileData extends IBaseActionType{
    profileData: IProfileEntity
}

export const setProfileData = (profileData: IProfileEntity): ISetProfileData => {
    return {
        type: SET_PROFILE_DATA,
        profileData
    }
}
