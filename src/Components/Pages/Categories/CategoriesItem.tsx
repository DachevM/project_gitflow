import React from "react";

import type { ICategory } from "../../../Types/types";

import { Img } from "../../../Images/Img";
import { remove } from "../../../Redux/action-creators/categoryAction";
import { useAppDispatch } from "../../../Redux/hooks";

interface ItemProps {
  categories: ICategory[];

  setSelected: (v: ICategory) => void;
}

const CategoriesItem = ({ categories, setSelected }: ItemProps) => {
  const dispatch = useAppDispatch();

  const removeCategory = (category: ICategory) => {
    return dispatch(remove(category));
  };

  if (!categories.length) {
    return <p>Здесь пока нет категорий</p>;
  }

  return (
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
              onClick={removeCategory.bind(this, elem)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesItem;
