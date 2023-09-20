import {
  type ISub,
  SubcategoriesEnum,
  type SubcategoryAction,
} from "../types/subcategory";
import { type ISubCategory } from "../../Types/types";

const SubcategoryState: ISub = {
  subcategory: [],
};

export const subcategoriesReducer = (
  state = SubcategoryState,
  action: SubcategoryAction
): ISub => {
  switch (action.type) {
    case SubcategoriesEnum.FETCH_SUB:
      return { ...state, subcategory: action.payload };
    case SubcategoriesEnum.SET_SUB:
      return {
        ...state,
        subcategory: state.subcategory.filter(
          (el: ISubCategory) => el.id !== action.payload
        ),
      };
    case SubcategoriesEnum.ADD_SUB:
      return { ...state, subcategory: [...state.subcategory, action.payload] };
    default:
      return state;
  }
};
