import type { RootState } from "../store";

namespace SearchSelectors {
  export const searchText = (s: RootState) => s.search.text;
}

export default SearchSelectors;
