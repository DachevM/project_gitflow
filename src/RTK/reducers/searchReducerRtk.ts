import { createSlice } from "@reduxjs/toolkit";

interface ISearchState {
  search: string;
}

const orderState: ISearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: orderState,
  reducers: {
    searchMod(state, action) {
      state.search = action.payload;
    },
    searchClean(state) {
      state.search = "";
    },
  },
});

export default searchSlice.reducer;
