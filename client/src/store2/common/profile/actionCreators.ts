import {
    IFetchProfileDataAction,
    IFetchProfileDataFailedAction,
    IFetchProfileDataSuccessAction,
    ISetProfileAvatarAction,
    ISetProfileDataAction,
    ISetProfileLoadingStateAction,
    ProfileActionTypes
} from "./actionTypes";
import {IProfileAvatar, IProfileData} from "./state";
import {LoadingState} from "../../state";

export const fetchProfileDataAction = (): IFetchProfileDataAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA,
});

export const fetchProfileDataSuccessAction = (payload: IProfileData): IFetchProfileDataSuccessAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA_SUCCESS,
    payload
});

export const setProfileDataAction = (payload: IProfileData): ISetProfileDataAction => ({
    type: ProfileActionTypes.SET_PROFILE_DATA,
    payload
});

export const fetchProfileDataFailedAction = (payload: IProfileData): IFetchProfileDataFailedAction => ({
    type: ProfileActionTypes.FETCH_PROFILE_DATA_FAILED
});

export const setProfileLoadingStateAction = (payload: LoadingState): ISetProfileLoadingStateAction => ({
    type: ProfileActionTypes.SET_PROFILE_LOADING_STATE,
    payload
});

export const setProfileAvatarAction = (payload: IProfileAvatar): ISetProfileAvatarAction => ({
    type: ProfileActionTypes.SET_PROFILE_AVATAR,
    payload
});


export type IProfileAction =
    ISetProfileDataAction
    | IFetchProfileDataAction
    | IFetchProfileDataSuccessAction
    | IFetchProfileDataFailedAction
    | ISetProfileAvatarAction
    | ISetProfileLoadingStateAction;
