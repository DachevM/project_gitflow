import { useCallback, useState } from "react";

import type React from "react";

import { Img } from "../../../Images/Img";
import { useAppDispatch } from "../../../Redux/hooks";
import {
  addCategory,
  remove,
} from "../../../Redux/action-creators/categoryAction";
import "./categories.css";
import { type ICategory } from "../../../Types/types";

interface CategoriesProps {
  categories: ICategory[];

  setSelected: (v: ICategory) => void;
}

const Categories = ({ categories, setSelected }: CategoriesProps) => {
  const [name, setCategName] = useState<string>("");

  const dispatch = useAppDispatch();

  const newCategories = useCallback(() => {
    const newCategories = {
      name,
      id: String(Date.now()),
      position: 0,
      __v: 0,
    };
    if (newCategories.name.length !== 0) dispatch(addCategory(newCategories));
    setCategName("");
  }, [dispatch, name]);

  const removeCategory = (category: ICategory) => {
    return dispatch(remove(category));
  };

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
        {categories.length !== 0 ? (
          <div className={"categories_data"}>
            {categories.map((elem) => (
              <div key={elem.id} className={"categories_body_data"}>
                <div
                  onClick={() => {
                    setSelected(elem);
                  }}
                  className={"categories_body_data_name"}
                >
                  {elem.name}
                </div>
                <div>
                  <img className={"categories_pen"} src={Img.pen} alt={""} />
                  <img
                    className={"categories_trash"}
                    src={Img.trash}
                    alt={""}
                    onClick={() => removeCategory(elem)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Здесь пока нет категорий</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
