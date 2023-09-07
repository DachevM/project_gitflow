enum SubcategoriesEnum {
  FETCH_SUB = "FETCH_SUB",
  SET_SUB = "SET_SUB",
  ADD_SUB = "ADD_SUB",
}

interface SubcategoryAction {
  type: "FETCH_SUB" | "SET_SUB" | "ADD_SUB";
  payload: any;
}

interface ISub {
  subcategory: any;
}
export { SubcategoriesEnum, type SubcategoryAction, type ISub };
