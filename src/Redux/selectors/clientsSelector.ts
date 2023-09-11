import type { RootState } from "../store";

namespace clientsSelector {
  export const clients = (s: RootState) => s.clients;
}
export default clientsSelector;
