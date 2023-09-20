import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { orderSlice } from "../reducers/orderReduce";
import { Links } from "../../links";

const fetchOrders = createAsyncThunk(
  "order/fetch",
  async (param: { page: number; limit: number }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}${Links.orders}`,
        {
          params: { _limit: param.limit, _page: param.page },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка загрузки данных");
    }
  }
);

const fetchTotal = createAsyncThunk(
  "total/fetch",
  async (param: { page: number; limit: number }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}${Links.orders}`,
      {
        params: {
          _limit: param.limit,
          _page: param.page,
        },
      }
    );
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
