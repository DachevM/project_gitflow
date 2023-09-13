import type { RootState } from "../state";

namespace citiesSelectors {
  export const cities = (s: RootState) => s.cities;
}
export default citiesSelectors;
