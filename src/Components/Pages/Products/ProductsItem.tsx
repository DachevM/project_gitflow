import React, { type ChangeEvent, useCallback, useMemo, useState } from "react";

import EditProducts from "./EditProducts/EditProducts";

import Modal from "../../UI/PopUP/Modal";
import { type IProducts } from "../../../Types/types";

interface ListProps {
  product: IProducts;
  selectedItems: string[];
  checkboxHandler: (v: ChangeEvent<HTMLInputElement>) => void;
  setSelectedItems: (v: string[]) => void;
  setModalCount: (v: boolean) => void;
}

const ProductsItem = ({
  product,
  checkboxHandler,
  selectedItems,
  setModalCount,
}: ListProps) => {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState(product.name);
  const [productCodeFrom1C, setProductCodeFrom1C] = useState(
    product.codeFrom1C
  );

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  const showCount = useCallback(() => {
    setModalCount(true);
  }, [setModalCount]);

  const checked = useMemo(() => {
    return selectedItems.includes(product.id);
  }, [product.id, selectedItems]);

  return (
    <div key={product.id} className={"products_body_section"}>
      {show && (
        <Modal show={show} key={product.id} setShow={setShow}>
          <EditProducts
            key={product.id}
            setProductCodeFrom1C={setProductCodeFrom1C}
            setProductName={setProductName}
            setShow={setShow}
            product={product}
          />
        </Modal>
      )}
      <div className={"products_name"}>
        <label className={"label_list"}>
          <input
            type={"checkbox"}
            onChange={checkboxHandler}
            onClick={showCount}
            checked={checked}
            value={product.id}
            className={"productsList_checkbox"}
          />
          <span className={"fake_list"}></span>
        </label>
        <span className={"products_name_text"} onClick={showModal}>
          {productName}
        </span>
      </div>
      <span className={"products_article_section"} onClick={showModal}>
        {productCodeFrom1C}
      </span>
    </div>
  );
};

export default ProductsItem;
