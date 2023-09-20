import { type Dispatch } from "redux";
import axios from "axios";

import { type ICategory, type ISubCategory } from "../../Types/types";
import { CategoriesEnum, type CategoryAction } from "../types/categories";
import { Endpoints } from "../../Enums/endpoints";

const fetchCat = (): any => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const response = await axios.get<ISubCategory[]>(
        `${process.env.REACT_APP_SERVER_URL}${Endpoints.categories}`
      );
      dispatch({ type: CategoriesEnum.FETCH_CAT, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};
const remove = (id: string) => {
  return { type: CategoriesEnum.SET_CAT, payload: id };
};

const addCategory = (newCategories: ICategory) => {
  return { type: CategoriesEnum.ADD_CAT, payload: newCategories };
};
export { fetchCat, remove, addCategory };
