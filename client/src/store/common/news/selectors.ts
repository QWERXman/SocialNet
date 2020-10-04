import {IRootState} from "../../store";

export const selectNews = (state: IRootState) => (
    state.news && state.news.posts
)

