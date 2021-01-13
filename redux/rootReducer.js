import { combineReducers } from 'redux';
import categoriesReducer from './categories/categoriesReducer';
import itemReducer from './items/itemReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    items: itemReducer,
    categories: categoriesReducer
});

export default rootReducer;
