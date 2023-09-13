import type React from "react";
import type { SearchAction } from "../types/search";

import { searchCases } from "../types/search";

function changeEvent(e: React.ChangeEvent<HTMLInputElement>): SearchAction {
  return { type: searchCases.SEARCH, payload: e.target.value };
}
function empty(): SearchAction {
  return { type: searchCases.CLEAN, payload: "" };
}

export { changeEvent, empty };
