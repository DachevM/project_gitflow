import type { RootState } from "../store";

namespace ProductSelectors {
  export const product = (s: RootState) => s.product;
}

export default ProductSelectors;
