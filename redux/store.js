import { applyMiddleware, createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const makeStore = (context) =>
  createStore(rootReducer, context, composedEnhancers);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
