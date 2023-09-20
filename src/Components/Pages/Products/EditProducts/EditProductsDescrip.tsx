import { useCallback, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import type React from "react";
import type { Images, IProducts } from "../../../../Types/types";

import { Img } from "../../../../Images/Img";

const color = { color: "#737680" };
const bottom = { marginBottom: "15px" };

interface IEditDescr {
  product: IProducts;
  name: string;
  setName: (v: string) => void;
}

const EditProductsDescrip = ({ product, setName, name }: IEditDescr) => {
  const [codeFrom1C, setCodeFrom1C] = useState<string>(product.codeFrom1C);
  const [nameFrom1c, setNameFrom1c] = useState<string>(product.nameFrom1C);
  const [image, setImage] = useState<Images[]>(product.images);

  const ChangeInpName1c = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameFrom1c(e.target.value);
    },
    []
  );

  const ChangeCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeFrom1C(e.target.value);
  }, []);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  const removeImage = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      setImage(image.filter((e: Images) => e.name !== event.currentTarget.id));
    },
    [image]
  );
  return (
    <div>
      <div className={"edit_descr"}>
        <label form={"outlined-basic"}>Название 1С</label>
        <input
          disabled={true}
          defaultValue={nameFrom1c}
          onChange={ChangeInpName1c}
          type={"text"}
          className={"edit_products_inp"}
        />
        <label form={"outlined-basic"}>Название*</label>
        <input
          defaultValue={name}
          onChange={ChangeInpName}
          type={"text"}
          className={"edit_products_inp"}
        />
        <label form={"outlined-basic"}>Бренд*</label>
        <div className={"products_edit_select"}>
          <FormControl sx={bottom} fullWidth={true} size="small">
            <Select displayEmpty id="demo-select-small">
              <MenuItem disabled value="">
                <em style={color}>Выберите категорию</em>
              </MenuItem>
              <MenuItem>{product.brand.name}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <label form={"demo-select-small"}>Артикул</label>
        <input
          disabled={true}
          defaultValue={codeFrom1C}
          onChange={ChangeCode}
          type={"text"}
          placeholder={"Введите название категории"}
          className={"edit_products_inp"}
        />
        <label form={"outlined-basic"}>Описание*</label>
        <input type={"text"} className={"edit_products_descr_inp"} />
      </div>
      <div className={"image"}>
        {image.map((elem: Images) => (
          <div key={elem.name} className={"image_descr"}>
            <img className={"images_prod"} src={elem.name} alt="picture" />
            <div className={"image_name"}>{elem.name}</div>
            <img
              id={elem.name}
              className={"trash"}
              src={Img.trash}
              alt={""}
              onClick={removeImage}
            />
          </div>
        ))}
        <input
          type={"text"}
          placeholder={"Вставьте ссылку на Google Drive"}
          className={"edit_products_inp"}
        />
        <div className={"edit_txt"}>
          <p>Максимум 5 изображений</p>
          <p>Размер фото 1000x1000 px PNG, JPG, JPEG</p>
        </div>
      </div>
    </div>
  );
};
export default EditProductsDescrip;
