import { call, put, takeLatest } from 'redux-saga/effects';
import {IFetchProfilePostsAction, ProfileActionTypes} from "./actionTypes";
import ProfileService from "service/profile";
import {
    setProfileLoadingStateAction,
    setProfileDataAction,
    fetchProfilePostsSuccessAction
} from "./actionCreators";
import {LoadingState} from "../../state";
import {PostService} from "../../../service/post";
import {IPost} from "../news/state";


export function* profileSaga() {
    yield takeLatest(ProfileActionTypes.FETCH_PROFILE_DATA, fetchProfileData);
    yield takeLatest(ProfileActionTypes.FETCH_PROFILE_POSTS, fetchProfilePosts);
}

export function* fetchProfileData() {
    try {
        yield put(setProfileLoadingStateAction(LoadingState.LOADING));
        const profile = yield call(ProfileService.getSelf);
        yield put(setProfileDataAction(profile));
        yield put(setProfileLoadingStateAction(LoadingState.LOADED));
    } catch (error) {
        yield put(setProfileLoadingStateAction(LoadingState.ERROR));
    }
}

export function* fetchProfilePosts({payload: filter}: IFetchProfilePostsAction) {
    try {
        const posts: IPost[] = yield call(PostService.list, filter);
        yield put(fetchProfilePostsSuccessAction(posts));
    } catch (error) {
    }
}


