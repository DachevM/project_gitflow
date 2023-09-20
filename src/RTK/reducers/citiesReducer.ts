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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action: citiesAction) => {
        state.isLoading = false;
        state.error = "";
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action: citiesAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default citiesSlice.reducer;
