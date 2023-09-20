import React from "react";

import ProductsItem from "./ProductsItem";

import type { ChangeEvent } from "react";
import type { IProducts } from "../../../Types/types";

import CountModal from "../../UI/PopUP/CountModal";
import MissingError from "../../Elements/Error/MissingError";

interface ItemProps {
  searched: IProducts[];
  selectedItems: string[];
  setSelectedItems: (v: any) => void;
  setModalCount: (v: boolean) => void;
  setCheckAll: (v: boolean) => void;
  showModalCount: boolean;
}

const ProductsItemLayout = ({
  searched,
  selectedItems,
  setSelectedItems,
  setModalCount,
  showModalCount,
  setCheckAll,
}: ItemProps) => {
  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isSelected = e.target.checked;
    const value = e.target.value;
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData: string[]) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  };

  if (!searched.length) {
    return <MissingError title={"продуктов"} />;
  }

  return (
    <div className={"products_body_products"}>
      {searched.map((elem) => (
        <div key={elem.id}>
          <ProductsItem
            setModalCount={setModalCount}
            checkboxHandler={checkboxHandler}
            selectedItems={selectedItems}
            product={elem}
          />
          {showModalCount && (
            <CountModal
              setCheckAll={setCheckAll}
              setSelectedItems={setSelectedItems}
              setShow={setModalCount}
              number={selectedItems.length}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsItemLayout;
