import { createStore, combineReducers } from "redux";
import { composeReducer, userReducer, readmailReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  compose: composeReducer,
  readmail: readmailReducer,
});

export const myStore = createStore(rootReducer);
