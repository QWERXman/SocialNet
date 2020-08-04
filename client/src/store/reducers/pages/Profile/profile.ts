import { IProfileEntity } from 'entities/Profile'
import { SET_PROFILE_DATA } from 'store/actions/pages/Profile/profileActionTypes'
import { ISetProfileData } from 'store/actions/pages/Profile/profileActions'

const initialState: IProfileEntity = {
    name: ''
};

export default (state = initialState, action:ISetProfileData) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.profileData,
            };
        default:
            return state;
    }
};
