import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ICities } from "../../Types/types";

import { citiesSlice } from "../reducers/citiesReducer";

const server = "/cities";
const fetchCities = createAsyncThunk("cities/fetch", async () => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}${server}`
      );
      resolve(response.data);
    }, 1000);
  });
});

const removeCity = (city: ICities) => {
  return citiesSlice.actions.remove(city);
};

const citiesAdd = (city: ICities) => {
  return citiesSlice.actions.add(city);
};

export { fetchCities, removeCity, citiesAdd };
