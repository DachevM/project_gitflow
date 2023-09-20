import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./reducers/orderReduce";
import searchReducer from "./reducers/searchReducerRtk";
import citiesReducer from "./reducers/citiesReducer";

const state = configureStore({
  reducer: {
    orders: orderReducer,
    search: searchReducer,
    cities: citiesReducer,
  },
});

type RootState = ReturnType<typeof state.getState>;

type ToolkitDispatch = typeof state.dispatch;
export { type RootState, type ToolkitDispatch, state };
