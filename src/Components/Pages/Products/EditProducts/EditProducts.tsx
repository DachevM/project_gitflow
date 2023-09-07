import { useCallback, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

import type React from "react";

import { Img } from "../../../../Images/Img";
import "../products.css";
import {
  type ICharacteristics,
  type Images,
  type IProducts,
} from "../../../../Types/types";

interface EditProps {
  product: IProducts;
  setShow: (v: boolean) => void;
  setProductName: (v: string) => void;
  setProductCodeFrom1C: (v: string) => void;
}

const color = { color: "#737680" };
const left = { marginLeft: "10px" };
const bottom = { marginBottom: "15px" };

const EditProducts = ({
  product,
  setShow,
  setProductName,
  setProductCodeFrom1C,
}: EditProps) => {
  const [categ, setCateg] = useState<string>("");
  const [subcateg, setSubcateg] = useState<string>("");
  const [name, setName] = useState(product.name);
  const [nameFrom1c, setNameFrom1c] = useState<string>(product.nameFrom1C);
  const [codeFrom1C, setCodeFrom1C] = useState<string>(product.codeFrom1C);
  const [image, setImage] = useState<Images[]>(product.images);
  const [characteristics, setCharacteristics] = useState<ICharacteristics[]>(
    product.characteristics
  );
  const changeName = () => {
    setProductName(name);
    setProductCodeFrom1C(codeFrom1C);
    setShow(false);
  };

  const Save = () => {
    setProductName(name);
    setProductCodeFrom1C(codeFrom1C);
  };

  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      setProductName(name);
      setProductCodeFrom1C(codeFrom1C);
      setShow(false);
    }
  });

  const ChangeInpName1c = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameFrom1c(e.target.value);
    },
    []
  );

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeCategory = useCallback((e: SelectChangeEvent) => {
    setCateg(e.target.value);
  }, []);

  const ChangeSubcategory = useCallback((e: any) => {
    setSubcateg(e.target.value);
  }, []);

  const ChangeCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeFrom1C(e.target.value);
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
        <div className={"edit_descr"}>
          <label form={"outlined-basic"}>Название 1С</label>
          <input
            disabled={true}
            value={nameFrom1c}
            onChange={ChangeInpName1c}
            type={"text"}
            className={"edit_products_inp"}
          />
          <label form={"outlined-basic"}>Название*</label>
          <input
            value={name}
            onChange={ChangeInpName}
            type={"text"}
            className={"edit_products_inp"}
          />
          <label form={"outlined-basic"}>Бренд*</label>
          <div className={"products_edit_select"}>
            <FormControl sx={bottom} fullWidth={true} size="small">
              <Select
                displayEmpty
                id="demo-select-small"
                onChange={ChangeCategory}
              >
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
            value={codeFrom1C}
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
                className={"trash"}
                src={Img.trash}
                alt={""}
                onClick={() => {
                  setImage(image.filter((e: Images) => e.name !== elem.name));
                }}
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
              value={categ}
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
              value={subcateg}
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
              value={name}
              type={"text"}
              placeholder={"Артикул"}
              className={"edit_products_inline_inp"}
            />
            <img src={Img.trash} className={"trash"} alt={""} />
          </div>
        </div>
        <h4 className={"edit_products_add"}>+ Добавить объем</h4>
        <label form={"edit_parameter"}>Характеристики</label>
        {characteristics.map((e: ICharacteristics) => (
          <div key={e.id} className={"edit_parameter"}>
            <div className={"edit_volume_top"}>
              <input
                value={e.key}
                type={"text"}
                className={"edit_products_inline_inp"}
              />
              <input
                value={e.value}
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
    </div>
  );
};

export default EditProducts;
