import { CHANGE_ROUTE } from 'store/actions/routes'
const initialState = {
    items: null,
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                id: action,
            };
        default:
            return state;
    }
};
