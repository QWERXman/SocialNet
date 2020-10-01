import { call, put, takeLatest } from 'redux-saga/effects';
import {ProfileActionTypes} from "./actionTypes";
import ProfileService from "service/profile";
import {setProfileLoadingState, setProfileData} from "./actionCreators";
import {LoadingState} from "../../state";


export function* profileSaga() {
    yield takeLatest(ProfileActionTypes.FETCH_PROFILE_DATA, fetchProfileData);
}

export function* fetchProfileData() {
    try {
        yield put(setProfileLoadingState(LoadingState.LOADING));
        const profile = yield call(ProfileService.getSelf);
        yield put(setProfileData(profile));
        yield put(setProfileLoadingState(LoadingState.LOADED));
    } catch (error) {
        yield put(setProfileLoadingState(LoadingState.ERROR));
    }
}
