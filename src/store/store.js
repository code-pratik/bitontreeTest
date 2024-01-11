import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./index";
const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
