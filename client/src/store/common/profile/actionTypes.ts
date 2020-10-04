import {Action} from "redux";
import {IProfileAvatar, IProfileData} from "./state";
import {LoadingState} from "../../state";
import {IPost} from "store/common/news/state";

export enum ProfileActionTypes {
    SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA',
    SET_PROFILE_AVATAR = 'profile/SET_PROFILE_AVATAR',
    FETCH_PROFILE_DATA = 'profile/FETCH_PROFILE_DATA',
    SET_PROFILE_LOADING_STATE = 'profile/SET_PROFILE_LOADING_STATE',
    FETCH_PROFILE_DATA_SUCCESS = 'profile/FETCH_PROFILE_DATA_SUCCESS',
    FETCH_PROFILE_DATA_FAILED = 'profile/FETCH_PROFILE_DATA_FAILED',
    FETCH_PROFILE_POSTS = 'profile/FETCH_PROFILE_POSTS',
    FETCH_PROFILE_POSTS_SUCCESS = 'profile/FETCH_PROFILE_POSTS_SUCCESS',
    FETCH_PROFILE_POSTS_FAILED = 'profile/FETCH_PROFILE_POSTS_FAILED',
    CREATE_NEW_POST = 'profile/CREATE_NEW_POST',
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

export interface IFetchProfilePostsAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS;
    payload: {
        profileId: string,
        pageSize: number
    }
}

export interface IFetchProfilePostsSuccessAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS;
    payload: IPost[];
}

export interface IFetchProfilePostsFailedAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_FAILED;
}

export interface ICreateNewPostAction extends Action<ProfileActionTypes> {
    type: ProfileActionTypes.CREATE_NEW_POST;
    payload: IPost
}
