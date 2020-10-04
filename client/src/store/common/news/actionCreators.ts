import {
    IFetchNewsAction, IFetchNewsFailedAction, IFetchNewsSuccessAction, IReceiveNewPostAction, NewsActionTypes
} from "./actionTypes";
import {IPost} from "./state";


export const fetchNewsAction = (): IFetchNewsAction => ({
    type: NewsActionTypes.FETCH_NEWS,
});

export const fetchNewsSuccessAction = (payload: IPost[]): IFetchNewsSuccessAction => ({
    type: NewsActionTypes.FETCH_NEWS_SUCCESS,
    payload
});

export const fetchNewsFailedAction = (): IFetchNewsFailedAction => ({
    type: NewsActionTypes.FETCH_NEWS_FAILED,
});

export const receiveNewPostAction = (payload: IPost): IReceiveNewPostAction => ({
    type: NewsActionTypes.RECEIVE_NEW_POST,
    payload
});

export type INewsAction =
    IFetchNewsAction
    | IFetchNewsSuccessAction
    | IFetchNewsFailedAction
    | IReceiveNewPostAction
