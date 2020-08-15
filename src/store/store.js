import { combineReducers } from "redux";
import dataSlice from "./reducer";
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  dataSlice: dataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
