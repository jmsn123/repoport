import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./slice/user";

const rootReducer = combineReducers({
  user,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
