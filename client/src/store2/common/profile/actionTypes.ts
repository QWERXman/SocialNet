import {Action} from "redux";
import {IProfileAvatar, IProfileData, IProfileState} from "./state";
import {LoadingState} from "../../state";

export enum ProfileActionTypes {
    SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA',
    SET_PROFILE_AVATAR = 'profile/SET_PROFILE_AVATAR',
    FETCH_PROFILE_DATA = 'profile/FETCH_PROFILE_DATA',
    SET_PROFILE_LOADING_STATE = 'profile/SET_PROFILE_LOADING_STATE',
}

export interface IFetchProfileDataAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_DATA;
    payload: IProfileState;
}

export interface ISetProfileDataAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.SET_PROFILE_DATA;
    payload: IProfileData;
}

export interface ISetProfileAvatarAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.SET_PROFILE_AVATAR;
    payload: IProfileAvatar;
}

export interface ISetProfileLoadingStateAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.SET_PROFILE_LOADING_STATE;
    payload: LoadingState
}
