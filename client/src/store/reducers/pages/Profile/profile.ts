import { IProfileEntity } from 'entities/Profile'
import { SET_PROFILE_DATA, SET_PROFILE_AVATAR } from 'store/actions/pages/Profile/profileActionTypes'
import {ISetProfileData} from 'store/actions/pages/Profile/profileActions'
import moment from 'moment'

const initialState: IProfileEntity = {
    name: ''
};

export default (state = initialState, action:ISetProfileData) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.profileData,
                birthday: action.profileData.birthday && moment(action.profileData.birthday)
            };
        case SET_PROFILE_AVATAR:
            return {
                ...state,
                avatar: action.profileData.avatar
            };
        default:
            return state;
    }
};
