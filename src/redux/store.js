import { createStore, combineReducers } from "redux";
import { composeReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  compose: composeReducer,
});

export const myStore = createStore(rootReducer);
