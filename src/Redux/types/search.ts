enum searchCases {
  SEARCH = "SEARCH",
  CLEAN = "CLEAN",
}

interface SearchAction {
  type: searchCases;
  payload: string;
}

interface ISearch {
  text: string;
}
export { searchCases, type SearchAction, type ISearch };
