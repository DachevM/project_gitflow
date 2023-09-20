import type React from "react";

import { searchSlice } from "../reducers/searchReducerRtk";

const searchMod = (e: React.ChangeEvent<HTMLInputElement>) => {
  return searchSlice.actions.searchMod(e.target.value);
};

const searchClean = () => {
  return searchSlice.actions.searchClean();
};

export { searchMod, searchClean };
