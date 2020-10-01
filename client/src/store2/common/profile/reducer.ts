import moment from "moment";
import {IProfileState} from "./state";
import {IProfileAction} from "./actionCreators";
import {ProfileActionTypes} from "./actionTypes";
import {LoadingState} from "../../state";

const initialState: IProfileState = {
    loading: LoadingState.LOADED
};

export default (state = initialState, action: IProfileAction) => {
    switch (action.type) {
        case ProfileActionTypes.SET_PROFILE_DATA:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload,
                    birthday: action.payload.birthday && moment(action.payload.birthday)
                }
            };
        case ProfileActionTypes.SET_PROFILE_AVATAR:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    avatar: action.payload
                }
            };
        case ProfileActionTypes.SET_PROFILE_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};
