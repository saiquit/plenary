import { types } from './itemTypes';
const initialState = {
    loading: false,
    items: [],
    errors: null,
    current_page: 1,
    per_page: null,
    total: null
};

const itemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ITEM_LOADING:
            return { ...state, loading: true };
        case types.ITEM_SUCCESS:
            return { ...state, items: payload, loading: false };

        default:
            return state;
    }
};

export default itemReducer;
