import type { RootState } from "../state";

namespace ordersSelectors {
  export const orders = (s: RootState) => s.orders;
}

export default ordersSelectors;
