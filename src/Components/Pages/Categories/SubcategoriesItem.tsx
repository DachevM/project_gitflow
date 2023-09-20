import { useCallback } from "react";

import type React from "react";
import type { ISubCategory } from "../../../Types/types";

import { Img } from "../../../Images/Img";
import { removeSub } from "../../../Redux/action-creators/subcategoryAction";
import { useAppDispatch } from "../../../Redux/hooks";
import MissingError from "../../Elements/Error/MissingError";

interface ItemProps {
  filtered: ISubCategory[];
}

const SubcategoriesItem = ({ filtered }: ItemProps) => {
  const dispatch = useAppDispatch();
  const removeSubcategories = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      return dispatch(removeSub(e.currentTarget.id));
    },
    [dispatch]
  );
  if (!filtered.length) {
    return <MissingError title={"подкатегорий"} />;
  }

  return (
    <div className={"categories_data"}>
      {filtered.map((elem) => (
        <div key={elem.id} className={"categories_body_data"}>
          <div className={"categories_body_data_name"}>{elem.name}</div>
          <div>
            <img className={"categories_pen"} src={Img.pen} alt={""} />
            <img
              id={elem.id}
              className={"categories_trash"}
              src={Img.trash}
              alt={""}
              onClick={removeSubcategories}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubcategoriesItem;
