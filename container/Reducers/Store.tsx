import { combineReducers, createStore } from "@reduxjs/toolkit";
import dataCheckSlice from "../Features/DataCheckSlice/DataCheckSlice";
import dataMealSlice from "../Features/DataMealSlice/DataMealSlice";

// assume that the counter slice will be combined with other slices
const reducer = combineReducers({
  dataCheck: dataCheckSlice,
  dataMeal: dataMealSlice
});

// create the store from the combined reducer
const store = createStore(reducer);

export default store;

// typescript type for the combined state
export type RootState = ReturnType<typeof reducer>;
