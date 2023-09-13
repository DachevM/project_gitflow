import { useCallback, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

import EditProductsDescrip from "./EditProductsDescrip";
import EditProdCharacteristics from "./EditProdCharacteristics";

import type React from "react";

import { Img } from "../../../../Images/Img";
import "../products.css";
import { type IProducts } from "../../../../Types/types";

interface EditProps {
  product: IProducts;
  setShow: (v: boolean) => void;
  setProductName: (v: string) => void;
  setProductCodeFrom1C: (v: string) => void;
}

const color = { color: "#737680" };
const left = { marginLeft: "10px" };
const bottom = { marginBottom: "15px" };

const EditProducts = ({ product, setShow, setProductName }: EditProps) => {
  const [categ, setCateg] = useState<string>("");
  const [subcateg, setSubcateg] = useState<string>("");
  const [name, setName] = useState(product.name);

  const changeName = () => {
    setProductName(name);
    setShow(false);
  };

  const Save = () => {
    setProductName(name);
  };

  const ChangeCategory = useCallback((e: SelectChangeEvent) => {
    setCateg(e.target.value);
  }, []);

  const ChangeSubcategory = useCallback((e: SelectChangeEvent) => {
    setSubcateg(e.target.value);
  }, []);

  return (
    <div key={product.id} className={"edit_products"}>
      <div className={"edit_head"}>
        <button onClick={Save} className={"edit_products_butt_save"}>
          Сохранить
        </button>
        <button onClick={changeName} className={"edit_products_butt_close"}>
          Сохранить и закрыть
        </button>
      </div>
      <div className={"edit_body"}>
        <EditProductsDescrip product={product} name={name} setName={setName} />
        <div className={"edit_price"}>
          <label form={"outlined-basic"}>Цена</label>
          <input
            disabled={true}
            type={"text"}
            className={"edit_products_inline_inp"}
          />
        </div>
        <div className={"edit_category"}>
          <FormControl sx={bottom} fullWidth={true} size="small">
            <label form={"demo-select-small"}>Категория</label>
            <Select
              displayEmpty
              id="demo-select-small"
              defaultValue={categ}
              onChange={ChangeCategory}
            >
              <MenuItem disabled value="">
                <em style={color}>Выберите категорию</em>
              </MenuItem>
              <MenuItem>{product.catalog_product.name}</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={left} fullWidth={true} size="small">
            <label form={"demo-select-small"}>Подкатегория</label>
            <Select
              displayEmpty
              id="demo-select-small"
              defaultValue={subcateg}
              onChange={ChangeSubcategory}
            >
              <MenuItem disabled value="">
                <em style={color}>Выберите категорию</em>
              </MenuItem>
              <MenuItem>{product.sub_catalog_product.name}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <label form={"edit_volume"}>Объем</label>
        <div className={"edit_volume"}>
          <div className={"edit_volume_top"}>
            <input
              placeholder={"50 мл"}
              type={"text"}
              className={"edit_products_inline_inp"}
            />
            <input
              type={"text"}
              placeholder={"SK00U2"}
              className={"edit_products_inline_inp"}
            />
            <img src={Img.trash} alt={""} className={"trash"} />
          </div>
          <div className={"edit_volume_top"}>
            <input
              type={"text"}
              placeholder={"Значение"}
              className={"edit_products_inline_inp"}
            />
            <input
              defaultValue={name}
              type={"text"}
              placeholder={"Артикул"}
              className={"edit_products_inline_inp"}
            />
            <img src={Img.trash} className={"trash"} alt={""} />
          </div>
        </div>
        <h4 className={"edit_products_add"}>+ Добавить объем</h4>
        <EditProdCharacteristics product={product} />
      </div>
    </div>
  );
};

export default EditProducts;
