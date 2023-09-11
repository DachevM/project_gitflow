import type { RootState } from "../store";

namespace categorySelector {
  export const category = (s: RootState) => s.category.category;
}
export default categorySelector;
