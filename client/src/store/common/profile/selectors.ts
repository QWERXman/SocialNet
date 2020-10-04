import {IRootState} from "../../store";

export const selectMyProfile = (state: IRootState) => (
    state.profile && state.profile.data
)

export const selectMyPosts = (state: IRootState) => (
    state.profile && state.profile.posts
)
