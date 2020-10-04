import {INewsState} from "./state";
import {INewsAction} from "./actionCreators";
import {NewsActionTypes} from "./actionTypes";
import {LoadingState} from "../../state";
import {ProfileActionTypes} from "../profile/actionTypes";
import {IProfileAction} from "../profile/actionCreators";

const initialState: INewsState = {
    loading: LoadingState.LOADED,
    posts: []
};

export default (state = initialState, action: INewsAction | IProfileAction) => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };
        case NewsActionTypes.RECEIVE_NEW_POST || ProfileActionTypes.CREATE_NEW_POST:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            };
        default:
            return state;
    }
};
