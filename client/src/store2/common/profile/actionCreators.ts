import {
    ISetProfileAvatarAction,
    ISetProfileDataAction,
    ISetProfileLoadingStateAction,
    ProfileActionTypes
} from "./actionTypes";
import {IProfileData} from "./state";
import {LoadingState} from "../../state";

export const setProfileData = (payload: IProfileData): ISetProfileDataAction => ({
    type: ProfileActionTypes.SET_PROFILE_DATA,
    payload
});

export const setProfileLoadingState = (payload: LoadingState): ISetProfileLoadingStateAction => ({
    type: ProfileActionTypes.SET_PROFILE_LOADING_STATE,
    payload
});


export type IProfileAction =
    ISetProfileDataAction
    | ISetProfileAvatarAction
    | ISetProfileLoadingStateAction;
