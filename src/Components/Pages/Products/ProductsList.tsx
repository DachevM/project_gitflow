import React, { type ChangeEvent, useCallback, useState } from "react";

import ProductsItem from "./ProductsItem";

import CountModal from "../../UI/PopUP/CountModal";
import "./products.css";
import { type IProducts } from "../../../Types/types";

interface ListProps {
  searched: IProducts[];
}

const ProductsList = ({ searched }: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showModalCount, setModalCount] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isSelected = e.target.checked;
    const value = e.target.value;
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  };
  const checkAllHandler = () => {
    if (searched.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const postIds = searched.map((item: IProducts) => {
        return item.id;
      });
      setSelectedItems(postIds);
    }
  };

  const showCount = useCallback(() => {
    setCheckAll(!checkAll);
    setModalCount(true);
  }, [checkAll]);

  return (
    <div className={"products_body"}>
      <div className={"products_descr"}>
        <div className={"products_name"}>
          <label className={"label_prod"}>
            <input
              type={"checkbox"}
              checked={checkAll}
              onClick={showCount}
              onChange={checkAllHandler}
              className={"products_checkbox"}
            />
            <span className={"fake_prod"}></span>
            <span className={"text_prod"}>Название продукта</span>
          </label>
        </div>
        <span className={"products_article"}>Артикул</span>
      </div>
      {searched.length !== 0 ? (
        <div className={"products_body_products"}>
          {searched.map((elem) => (
            <div key={elem.id}>
              <ProductsItem
                setModalCount={setModalCount}
                setSelectedItems={setSelectedItems}
                checkboxHandler={checkboxHandler}
                selectedItems={selectedItems}
                key={elem.id}
                product={elem}
              />
              {showModalCount && (
                <CountModal
                  setCheckAll={setCheckAll}
                  setSelectedItems={setSelectedItems}
                  show={showModalCount}
                  setShow={setModalCount}
                  number={selectedItems.length}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Здесь пока нет товаров</p>
      )}
    </div>
  );
};

export default ProductsList;
