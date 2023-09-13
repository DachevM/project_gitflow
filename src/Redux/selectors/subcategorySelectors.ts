import type { RootState } from "../store";

namespace subcategorySelectors {
  export const subcategory = (s: RootState) => s.subcategory.subcategory;
}
export default subcategorySelectors;
