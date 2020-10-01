import {Action} from "redux";
import {IProfileAvatar, IProfileData, IProfileState} from "./state";
import {LoadingState} from "../../state";

export enum ProfileActionTypes {
    SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA',
    SET_PROFILE_AVATAR = 'profile/SET_PROFILE_AVATAR',
    FETCH_PROFILE_DATA = 'profile/FETCH_PROFILE_DATA',
    SET_PROFILE_LOADING_STATE = 'profile/SET_PROFILE_LOADING_STATE',
    FETCH_PROFILE_DATA_SUCCESS = 'profile/FETCH_PROFILE_DATA_SUCCESS',
    FETCH_PROFILE_DATA_FAILED = 'profile/FETCH_PROFILE_DATA_FAILED',
}

export interface IFetchProfileDataAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_DATA;
}

export interface IFetchProfileDataSuccessAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_DATA_SUCCESS;
    payload: IProfileData
}

export interface IFetchProfileDataFailedAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_DATA_FAILED;
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
