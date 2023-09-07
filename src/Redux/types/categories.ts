enum CategoriesEnum {
  FETCH_CAT = "FETCH_CAT",
  SET_CAT = "SET_CAT",
  ADD_CAT = "ADD_CAT",
}

interface CategoryAction {
  type: "FETCH_CAT" | "SET_CAT" | "ADD_CAT";
  payload: any;
}

interface ICat {
  category: any;
}
export { CategoriesEnum, type CategoryAction, type ICat };
