import React, { useCallback, useState } from "react";

import ProductsItemLayout from "./ProductsItemLayout";

import "./products.css";

import { type IProducts } from "../../../Types/types";

interface ListProps {
  searched: IProducts[];
}

const ProductsList = ({ searched }: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showModalCount, setModalCount] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

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
        <label className={"label_prod"}>
          <input
            type={"checkbox"}
            checked={checkAll}
            onClick={showCount}
            onChange={checkAllHandler}
            className={"products_checkbox"}
          />
          <span className={"fake_prod"}></span>
        </label>
        <div className={"products_name"}>
          <span>Название продукта</span>
          <span className={"products_article"}>Артикул</span>
        </div>
      </div>
      <ProductsItemLayout
        searched={searched}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setModalCount={setModalCount}
        setCheckAll={setCheckAll}
        showModalCount={showModalCount}
      />
    </div>
  );
};

export default ProductsList;
