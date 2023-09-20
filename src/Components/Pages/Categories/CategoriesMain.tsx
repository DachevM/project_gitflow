import React, { useEffect, useMemo, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Categories from "./Categories";
import Subcategories from "./Subcategories";

import { type ISubCategory } from "../../../Types/types";
import categorySelector from "../../../Redux/selectors/categorySelector";
import subcategorySelectors from "../../../Redux/selectors/subcategorySelectors";
import { fetchCat } from "../../../Redux/action-creators/categoryAction";
import { fetchSub } from "../../../Redux/action-creators/subcategoryAction";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";

import "./categories.css";

const CategoriesMain = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(categorySelector.category);
  const subcategories = useAppSelector(subcategorySelectors.subcategory);

  const filtered = useMemo(() => {
    return subcategories.filter(
      (e: ISubCategory) => e.position.toString() === selected
    );
  }, [selected, subcategories]);

  useEffect(() => {
    dispatch(fetchCat());
    dispatch(fetchSub());
  }, [dispatch]);

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
