import { call, put, takeLatest } from 'redux-saga/effects';
import {ProfileActionTypes} from "./actionTypes";
import ProfileService from "service/profile";
import {setProfileLoadingStateAction, setProfileDataAction, setProfileAvatarAction} from "./actionCreators";
import {LoadingState} from "../../state";


export function* profileSaga() {
    yield takeLatest(ProfileActionTypes.FETCH_PROFILE_DATA, fetchProfileData);
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
