import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ICities } from "../../Types/types";

import { citiesSlice } from "../reducers/citiesReducer";
import { Endpoints } from "../../Enums/endpoints";

const fetchCities = createAsyncThunk("cities/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}${Endpoints.cities}`
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Ошибка загрузки данных");
  }
});

const removeCity = (city: ICities) => {
  return citiesSlice.actions.remove(city);
};

const citiesAdd = (city: ICities) => {
  return citiesSlice.actions.add(city);
};

export { fetchCities, removeCity, citiesAdd };
