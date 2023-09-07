import { type ISearch, type SearchAction, searchCases } from "../types/search";

const InitialState: ISearch = {
  text: "",
};

export const searchReducer = (
  state = InitialState,
  action: SearchAction
): ISearch => {
  switch (action.type) {
    case searchCases.SEARCH:
      return { ...state, text: action.payload };
    case searchCases.CLEAN:
      return { text: action.payload };
    default:
      return state;
  }
};
