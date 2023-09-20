import { type Dispatch } from "redux";
import axios from "axios";

import { type ISubCategory } from "../../Types/types";
import {
  SubcategoriesEnum,
  type SubcategoryAction,
} from "../types/subcategory";
import { Endpoints } from "../../Enums/endpoints";

const fetchSub = (): any => {
  return async (dispatch: Dispatch<SubcategoryAction>) => {
    try {
      const response = await axios.get<ISubCategory[]>(
        `${process.env.REACT_APP_SERVER_URL}${Endpoints.subcategories}`
      );
      dispatch({ type: SubcategoriesEnum.FETCH_SUB, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

const removeSub = (id: string) => {
  return { type: SubcategoriesEnum.SET_SUB, payload: id };
};

const addCategory = (subcategory: ISubCategory) => {
  return { type: SubcategoriesEnum.ADD_SUB, payload: subcategory };
};
export { fetchSub, removeSub, addCategory };
