import moment from "moment";
import {IProfileState} from "./state";
import {IProfileAction} from "./actionCreators";
import {ProfileActionTypes} from "./actionTypes";
import {LoadingState} from "../../state";

const initialState: IProfileState = {
    loading: LoadingState.LOADED,
    posts: []
};

export default (state = initialState, action: IProfileAction) => {
    switch (action.type) {
        case ProfileActionTypes.SET_PROFILE_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                    birthday: action.payload.birthday && moment(action.payload.birthday)
                }
            };
        case ProfileActionTypes.SET_PROFILE_AVATAR:
            return {
                ...state,
                data: {
                    ...state.data,
                    avatar: action.payload
                }
            };
        case ProfileActionTypes.SET_PROFILE_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            };
        case ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };
        case ProfileActionTypes.CREATE_NEW_POST:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts,
                ]
            };
        default:
            return state;
    }
};
