import {
    ICreateNewPostAction,
    IFetchProfileDataAction,
    IFetchProfileDataFailedAction,
    IFetchProfileDataSuccessAction,
    IFetchProfilePostsAction,
    IFetchProfilePostsFailedAction,
    IFetchProfilePostsSuccessAction,
    ISetProfileAvatarAction,
    ISetProfileDataAction,
    ISetProfileLoadingStateAction,
    ProfileActionTypes
} from "./actionTypes";
import {IProfileAvatar, IProfileData} from "./state";
import {LoadingState} from "../../state";
import {IPost} from "../news/state";

export const fetchProfileDataAction = (): IFetchProfileDataAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA,
});

export const fetchProfileDataSuccessAction = (payload: IProfileData): IFetchProfileDataSuccessAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA_SUCCESS,
    payload
});

export const fetchProfileDataFailedAction = (payload: IProfileData): IFetchProfileDataFailedAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA_FAILED
});

export const setProfileDataAction = (payload: IProfileData): ISetProfileDataAction => ({
    type: ProfileActionTypes.SET_PROFILE_DATA,
    payload
});

export const setProfileLoadingStateAction = (payload: LoadingState): ISetProfileLoadingStateAction => ({
    type: ProfileActionTypes.SET_PROFILE_LOADING_STATE,
    payload
});

export const setProfileAvatarAction = (payload: IProfileAvatar): ISetProfileAvatarAction => ({
    type: ProfileActionTypes.SET_PROFILE_AVATAR,
    payload
});

export const fetchProfilePostsAction = (payload: {profileId: string, pageSize: number}): IFetchProfilePostsAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_POSTS,
    payload
});

export const fetchProfilePostsSuccessAction = (payload: IPost[]): IFetchProfilePostsSuccessAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS,
    payload
});

export const fetchProfilePostsFailedAction = (): IFetchProfilePostsFailedAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_FAILED
});

export const createNewPostAction = (payload: IPost): ICreateNewPostAction => ({
    type: ProfileActionTypes.CREATE_NEW_POST,
    payload
});


export type IProfileAction =
    ISetProfileDataAction
    | IFetchProfileDataAction
    | IFetchProfileDataSuccessAction
    | IFetchProfileDataFailedAction
    | ISetProfileAvatarAction
    | IFetchProfilePostsAction
    | IFetchProfilePostsSuccessAction
    | IFetchProfilePostsFailedAction
    | ICreateNewPostAction
    | ISetProfileLoadingStateAction;
