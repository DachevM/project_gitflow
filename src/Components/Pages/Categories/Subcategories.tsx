import { useCallback, useState } from "react";

import SubcategoriesItem from "./SubcategoriesItem";

import type React from "react";

import { useAppDispatch } from "../../../Redux/hooks";
import { addCategory } from "../../../Redux/action-creators/subcategoryAction";
import "./categories.css";
import { type ISubCategory } from "../../../Types/types";

interface SubcategoryProps {
  filtered: ISubCategory[];
}

const Subcategories = ({ filtered }: SubcategoryProps) => {
  const [name, setCategName] = useState<string>("");

  const dispatch = useAppDispatch();

  const newSubcategories = () => {
    const newSubcategories = {
      name,
      position: 0,
      id: String(Date.now()),
      catalog_product: "",
      __v: 0,
    };
    newSubcategories.name.trim().length !== 0 &&
      dispatch(addCategory(newSubcategories));

    setCategName("");
  };

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategName(e.target.value);
    },
    []
  );

  return (
    <div className={"subcategories"}>
      <div className={"subcategories_head"}>
        <input
          value={name}
          onChange={ChangeInpName}
          type={"text"}
          placeholder={"Введите название подкатегории"}
          className={"categories_search_inp"}
        />
        <button className={"categories_butt"} onClick={newSubcategories}>
          Добавить подкатегорию
        </button>
      </div>
      <div>
        <div className={"categories_body_head"}>Название подкатегории</div>
        <SubcategoriesItem filtered={filtered} />
      </div>
    </div>
  );
};

export default Subcategories;
