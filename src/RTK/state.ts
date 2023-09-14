import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./reducers/orderReduce";
import searchReducer from "./reducers/searchReducerRtk";

const state = configureStore({
  reducer: {
    orders: orderReducer,
    search: searchReducer,
  },
});

type RootState = ReturnType<typeof state.getState>;

type ToolkitDispatch = typeof state.dispatch;
export { type RootState, type ToolkitDispatch, state };
