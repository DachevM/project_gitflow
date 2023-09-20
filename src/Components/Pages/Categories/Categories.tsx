import { useCallback, useState } from "react";

import CategoriesItem from "./CategoriesItem";

import type React from "react";

import { type ICategory } from "../../../Types/types";
import { useAppDispatch } from "../../../Redux/hooks";
import { addCategory } from "../../../Redux/action-creators/categoryAction";

import "./categories.css";

interface CategoriesProps {
  categories: ICategory[];

  setSelected: (v: string) => void;
}

const Categories = ({ categories, setSelected }: CategoriesProps) => {
  const [name, setCategName] = useState<string>("");
  const dispatch = useAppDispatch();

  const newCategories = useCallback(() => {
    const newCategories = {
      name: name,
      id: String(Date.now()),
      position: 0,
      __v: 0,
    };
    newCategories.name.trim().length !== 0 &&
      dispatch(addCategory(newCategories));
    setCategName("");
  }, [dispatch, name]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategName(e.target.value);
    },
    []
  );

  return (
    <div className={"categories"}>
      <div className={"categories_head"}>
        <input
          value={name}
          onChange={ChangeInpName}
          type={"text"}
          placeholder={"Введите название категории"}
          className={"categories_search_inp"}
        />
        <button className={"categories_butt"} onClick={newCategories}>
          Добавить категорию
        </button>
      </div>
      <div>
        <div className={"categories_body_head"}>Название категории</div>
        <CategoriesItem categories={categories} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Categories;
