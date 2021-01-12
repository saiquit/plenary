import { types } from "./itemTypes";
const initialState = {
  loading: false,
  items: [],
  errors: null,
  current_page: 1,
  per_page: null,
  total: null,
};

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ITEM_LOADING:
      return { ...state, loading: true };
    case types.ITEM_SUCCESS:
      return { ...state, items: payload };
    case types.ITEM_SUCCESS_PAGE_LIMIT:
      return {
        ...state,
        loading: false,
        items: payload.data,
        current_page: payload.current_page,
        total: payload.total,
        per_page: payload.per_page,
      };
    default:
      return state;
  }
};

export default itemReducer;
