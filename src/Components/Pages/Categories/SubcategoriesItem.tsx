import React from "react";

import type { ISubCategory } from "../../../Types/types";

import { Img } from "../../../Images/Img";
import { removeSub } from "../../../Redux/action-creators/subcategoryAction";
import { useAppDispatch } from "../../../Redux/hooks";

interface ItemProps {
  filtered: ISubCategory[];
}

const SubcategoriesItem = ({ filtered }: ItemProps) => {
  const dispatch = useAppDispatch();
  const removeSubcategories = (sub: ISubCategory) => {
    return dispatch(removeSub(sub));
  };
  if (!filtered.length) {
    return <p>Здесь пока нет подкатегорий</p>;
  }
  return (
    <div className={"categories_data"}>
      {filtered.map((elem) => (
        <div key={elem.id} className={"categories_body_data"}>
          <div className={"categories_body_data_name"}>{elem.name}</div>
          <div>
            <img className={"categories_pen"} src={Img.pen} alt={""} />
            <img
              className={"categories_trash"}
              src={Img.trash}
              alt={""}
              onClick={removeSubcategories.bind(this, elem)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubcategoriesItem;
