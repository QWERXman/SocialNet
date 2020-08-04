const initialState = {
    items: null,
};
  
export default (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                items: action.items,
            };
        case 'ADD_NEWS':
            return {
                ...state,
                items: action.record,
            };
        default:
            return state;
    }
};