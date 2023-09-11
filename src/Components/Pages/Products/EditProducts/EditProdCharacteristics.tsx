import React, { useState } from "react";

import type { ICharacteristics, IProducts } from "../../../../Types/types";

import { Img } from "../../../../Images/Img";

interface ICharacter {
  product: IProducts;
}

const EditProdCharacteristics = ({ product }: ICharacter) => {
  const [characteristics, setCharacteristics] = useState<ICharacteristics[]>(
    product.characteristics
  );

  return (
    <div>
      <label form={"edit_parameter"}>Характеристики</label>
      {characteristics.map((e: ICharacteristics) => (
        <div key={e.id} className={"edit_parameter"}>
          <div className={"edit_volume_top"}>
            <input
              defaultValue={e.key}
              type={"text"}
              className={"edit_products_inline_inp"}
            />
            <input
              defaultValue={e.value}
              type={"text"}
              className={"edit_products_inline_inp"}
            />
            <img
              src={Img.trash}
              className={"trash"}
              alt={""}
              onClick={() => {
                setCharacteristics(
                  characteristics.filter(
                    (elem: ICharacteristics) => elem.id !== e.id
                  )
                );
              }}
            />
          </div>
        </div>
      ))}
      <h4 className={"edit_products_add"}>+ Добавить характеристики</h4>
      <label form={"outlined-basic"}>Тэги товаров</label>
      <div className={"tags"}>
        {product.tags.map((e) => (
          <div key={e.id} className={"tag"}>
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProdCharacteristics;
