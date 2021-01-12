import { combineReducers } from "redux";
import itemReducer from "./items/itemReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  items: itemReducer,
});

export default rootReducer;
