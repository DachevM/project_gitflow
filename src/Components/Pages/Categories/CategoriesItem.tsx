import { useCallback } from "react";

import type React from "react";
import type { ICategory } from "../../../Types/types";

import { Img } from "../../../Images/Img";
import { remove } from "../../../Redux/action-creators/categoryAction";
import { useAppDispatch } from "../../../Redux/hooks";
import MissingError from "../../Elements/Error/MissingError";

interface ItemProps {
  categories: ICategory[];

  setSelected: (v: string) => void;
}

const CategoriesItem = ({ categories, setSelected }: ItemProps) => {
  const dispatch = useAppDispatch();

  const removeCategory = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      return dispatch(remove(event.currentTarget.id));
    },
    [dispatch]
  );

  const selected = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      setSelected(event.currentTarget.id);
    },
    [setSelected]
  );

  if (!categories.length) {
    return <MissingError title={"категорий"} />;
  }

  return (
    <div className={"categories_data"}>
      {categories.map((elem) => (
        <div key={elem.id} className={"categories_body_data"}>
          <div
            id={elem.position.toString()}
            onClick={selected}
            className={"categories_body_data_name"}
          >
            {elem.name}
          </div>
          <div>
            <img className={"categories_pen"} src={Img.pen} alt={""} />
            <img
              id={elem.id}
              className={"categories_trash"}
              src={Img.trash}
              alt={""}
              onClick={removeCategory}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesItem;
