import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { orderSlice } from "../reducers/orderReduce";

const SERVER = "http://localhost:5005/orders";
const fetchOrders = createAsyncThunk(
  "order/fetch",
  async (param: { page: number; limit: number }) => {
    return await new Promise((resolve) => {
      setTimeout(async () => {
        const response = await axios.get(SERVER, {
          params: { _limit: param.limit, _page: param.page },
        });
        resolve(response.data);
      }, 1000);
    });
  }
);

const fetchTotal = createAsyncThunk(
  "total/fetch",
  async (param: { page: number; limit: number }) => {
    const response = await axios.get(SERVER, {
      params: {
        _limit: param.limit,
        _page: param.page,
      },
    });
    return response.headers["x-total-count"];
  }
);

const setPage = (page: number) => {
  return orderSlice.actions.setPage(page);
};

const setLim = (limit: string) => {
  return orderSlice.actions.setLim(limit);
};

const orderFilter = (search: string) => {
  return orderSlice.actions.ordersFilt(search);
};
export { fetchOrders, fetchTotal, setPage, setLim, orderFilter };
