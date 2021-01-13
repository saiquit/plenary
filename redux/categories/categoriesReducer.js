import { types } from './categoryActionTypes';
const initialState = {
    loading: false,
    categories: [],
    errors: null
};

const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.CATEGORY_LOADING:
            return { ...state, loading: true };

        case types.CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: payload };
        case types.CATEGORY_FIELD:
            return { ...state, items: payload, loading: false };
        default:
            return state;
    }
};
export default categoryReducer;
