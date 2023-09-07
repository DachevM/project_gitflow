import { type Dispatch } from "redux";
import axios from "axios";

import { type ICategory, type ISubCategory } from "../../Types/types";
import { CategoriesEnum, type CategoryAction } from "../types/categories";

const SERVER = "http://localhost:5005/categories";
const fetchCat = (): any => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const response = await axios.get<ISubCategory[]>(SERVER);
      dispatch({ type: CategoriesEnum.FETCH_CAT, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};
const remove = (category: ICategory) => {
  return { type: CategoriesEnum.SET_CAT, payload: category };
};

const addCategory = (newCategories: ICategory) => {
  return { type: CategoriesEnum.ADD_CAT, payload: newCategories };
};
export { fetchCat, remove, addCategory };
