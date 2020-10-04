import {Action} from "redux";
import {IPost} from "./state";

export enum NewsActionTypes {
    FETCH_NEWS = 'profile/FETCH_NEWS',
    FETCH_NEWS_SUCCESS = 'profile/FETCH_NEWS_SUCCESS',
    FETCH_NEWS_FAILED = 'profile/FETCH_NEWS_FAILED',
    RECEIVE_NEW_POST = 'profile/RECEIVE_NEW_POST',
}

export interface IFetchNewsAction extends Action<NewsActionTypes> {
    type: NewsActionTypes.FETCH_NEWS;
}

export interface IFetchNewsSuccessAction extends Action<NewsActionTypes> {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS;
    payload: IPost[]
}

export interface IFetchNewsFailedAction extends Action<NewsActionTypes> {
    type: NewsActionTypes.FETCH_NEWS_FAILED;
}

export interface IReceiveNewPostAction extends Action<NewsActionTypes> {
    type: NewsActionTypes.RECEIVE_NEW_POST;
    payload: IPost
}
