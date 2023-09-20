import type { RootState } from "../state";

namespace searchSelectors {
  export const search = (s: RootState) => s.search;
}
export default searchSelectors;
