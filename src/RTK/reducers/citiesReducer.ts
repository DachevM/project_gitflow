import { createSlice } from "@reduxjs/toolkit";

import { fetchCities } from "../actions/citiesAction";
import { type ICities } from "../../Types/types";

interface ICitiesState {
  cities: ICities[];
  isLoading: boolean;
  error: string;
}

const citiesState: ICitiesState = {
  isLoading: false,
  error: "",
  cities: [],
};

interface citiesAction {
  payload: any;
}

export const citiesSlice = createSlice({
  name: "cities",
  initialState: citiesState,
  reducers: {
    remove(state, action: citiesAction) {
      state.cities = [...state.cities].filter(
        (el) => el.id !== action.payload.id
      );
    },
    add(state, action: citiesAction) {
      state.cities = [...state.cities, action.payload];
    },
  },
  extraReducers: {
    [fetchCities.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCities.fulfilled.type]: (state, action: citiesAction) => {
      state.isLoading = false;
      state.error = "";
      state.cities = action.payload;
    },
    [fetchCities.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = "ошибка 404";
    },
  },
});

export default citiesSlice.reducer;
