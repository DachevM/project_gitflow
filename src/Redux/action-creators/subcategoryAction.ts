import { type Dispatch } from "redux";
import axios from "axios";

import { type ISubCategory } from "../../Types/types";
import {
  SubcategoriesEnum,
  type SubcategoryAction,
} from "../types/subcategory";

const SERVER_SUB = "http://localhost:5005/subcategories";
const fetchSub = (): any => {
  return async (dispatch: Dispatch<SubcategoryAction>) => {
    try {
      const response = await axios.get<ISubCategory[]>(SERVER_SUB);
      dispatch({ type: SubcategoriesEnum.FETCH_SUB, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

const removeSub = (subcategory: ISubCategory) => {
  return { type: SubcategoriesEnum.SET_SUB, payload: subcategory };
};

const addCategory = (subcategory: ISubCategory) => {
  return { type: SubcategoriesEnum.ADD_SUB, payload: subcategory };
};
export { fetchSub, removeSub, addCategory };
