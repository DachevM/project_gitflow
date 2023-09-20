import { useCallback, useState } from "react";

import type React from "react";
import type {
  ICharacteristics,
  IProducts,
  Itags,
} from "../../../../Types/types";

import { Img } from "../../../../Images/Img";

interface ICharacter {
  characteristic: ICharacteristics[];
  tags: Itags[];
}

const EditProdCharacteristics = ({ characteristic, tags }: ICharacter) => {
  const [characteristics, setCharacteristics] =
    useState<ICharacteristics[]>(characteristic);
  const removeCharacteristic = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      setCharacteristics(
        characteristics.filter(
          (el: ICharacteristics) => el.id !== event.currentTarget.id
        )
      );
    },
    [characteristics]
  );

  return (
    <div>
      <label form={"edit_parameter"}>Характеристики</label>
      {characteristics.map((el: ICharacteristics) => (
        <div key={el.id} className={"edit_parameter"}>
          <div className={"edit_volume_top"}>
            <input
              defaultValue={el.key}
              type={"text"}
              className={"edit_products_inline_inp"}
            />
            <input
              defaultValue={el.value}
              type={"text"}
              className={"edit_products_inline_inp"}
            />
            <img
              id={el.id}
              src={Img.trash}
              className={"trash"}
              alt={""}
              onClick={removeCharacteristic}
            />
          </div>
        </div>
      ))}
      <h4 className={"edit_products_add"}>+ Добавить характеристики</h4>
      <label form={"outlined-basic"}>Тэги товаров</label>
      <div className={"tags"}>
        {tags.map((el) => (
          <div key={el.id} className={"tag"}>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProdCharacteristics;
