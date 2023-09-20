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

  const removeCharacteristic = (elem: ICharacteristics) => {
    setCharacteristics(
      characteristics.filter((el: ICharacteristics) => el.id !== elem.id)
    );
  };

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
              src={Img.trash}
              className={"trash"}
              alt={""}
              onClick={removeCharacteristic.bind(this, el)}
            />
          </div>
        </div>
      ))}
      <h4 className={"edit_products_add"}>+ Добавить характеристики</h4>
      <label form={"outlined-basic"}>Тэги товаров</label>
      <div className={"tags"}>
        {product.tags.map((el) => (
          <div key={el.id} className={"tag"}>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProdCharacteristics;
