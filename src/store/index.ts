import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));