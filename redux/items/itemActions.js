import { types } from "./itemTypes";
import axios from "axios";

export const getAllItems = (page_limit = null) => {
  return async (dispatch) => {
    dispatch({
      type: types.ITEM_LOADING,
    });
    try {
      if (page_limit) {
        const { data } = await axios.get(
          `http://localhost:8000/api/items?page_limit=${page_limit}`,
        );
        dispatch({
          type: types.ITEM_SUCCESS_PAGE_LIMIT,
          payload: data,
        });
      } else {
        const { data } = await axios.get("http://localhost:8000/api/items");
        dispatch({
          type: types.ITEM_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: types.ITEM_FAILED,
        payload: error.message,
      });
    }
  };
};
