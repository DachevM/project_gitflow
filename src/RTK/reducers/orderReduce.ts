import { createSlice } from "@reduxjs/toolkit";

import { fetchOrders, fetchTotal } from "../actions/orderAction";
import { type IOrders } from "../../Types/types";
interface IOrderState {
  order: IOrders[];
  orderFiltered: IOrders[];
  lim: number;
  page: number;
  total: number;
  isLoading: boolean;
  error: string;
}

const orderState: IOrderState = {
  isLoading: false,
  error: "",
  order: [],
  orderFiltered: [],
  page: 1,
  lim: 5,
  total: 0,
};

interface OrderAction {
  payload: any;
}

export const orderSlice = createSlice({
  name: "order",
  initialState: orderState,
  reducers: {
    ordersFilt(state, action: OrderAction) {
      state.orderFiltered = [...state.order].filter((el: IOrders) =>
        el.user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLim(state, action: OrderAction) {
      state.lim = action.payload;
    },
    setPage(state, action: OrderAction) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchOrders.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOrders.fulfilled.type]: (state, action: OrderAction) => {
      state.isLoading = false;
      state.error = "";
      state.order = action.payload;
    },
    [fetchOrders.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = "ошибка 404";
    },
    [fetchTotal.fulfilled.type]: (state, action: OrderAction) => {
      state.total = action.payload;
    },
  },
});

export default orderSlice.reducer;
