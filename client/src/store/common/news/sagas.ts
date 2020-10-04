import { call, put, takeLatest } from 'redux-saga/effects';

import {PostService} from "../../../service/post";
import {IPost} from "./state";
import {NewsActionTypes} from "./actionTypes";
import {fetchNewsSuccessAction} from "./actionCreators";


export function* newsSaga() {
    yield takeLatest(NewsActionTypes.FETCH_NEWS, fetchNews);
}

export function* fetchNews() {
    try {
        const posts: IPost[] = yield call(PostService.list, {});
        yield put(fetchNewsSuccessAction(posts));
    } catch (error) {
    }
}


