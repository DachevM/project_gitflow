import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Categories from "./Categories";
import Subcategories from "./Subcategories";

import { fetchCat } from "../../../Redux/action-creators/categoryAction";
import { fetchSub } from "../../../Redux/action-creators/subcategoryAction";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import "./categories.css";
import { type ICategory, type ISubCategory } from "../../../Types/types";
import categorySelector from "../../../Redux/selectors/categorySelector";
import subcategorySelectors from "../../../Redux/selectors/subcategorySelectors";
const CategoriesMain = () => {
  const [selected, setSelected] = useState<null | ICategory>(null);

  const dispatch = useAppDispatch();
  const categories = useAppSelector(categorySelector.category);
  const subcategories = useAppSelector(subcategorySelectors.subcategory);

  const filtered = selected
    ? subcategories.filter(
        (e: ISubCategory) => e.position === selected.position
      )
    : [];

  useEffect(() => {
    dispatch(fetchCat());
    dispatch(fetchSub());
  }, []);

  return (
    <div className={"categories_main"}>
      <Categories setSelected={setSelected} categories={categories} />
      <div>
        <KeyboardDoubleArrowRightIcon />
      </div>
      {selected ? (
        <Subcategories filtered={filtered} />
      ) : (
        <p className={"choose_categ"}>Выберите категорию</p>
      )}
    </div>
  );
};

export default CategoriesMain;
