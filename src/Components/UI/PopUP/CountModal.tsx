import React, { useCallback } from "react";
import { createPortal } from "react-dom";

import { Img } from "../../../Images/Img";

interface ModalProps {
  show: boolean;
  setShow: (v: boolean) => void;
  setCheckAll: (v: boolean) => void;
  number: number;
  setSelectedItems: (v: []) => void;
}

const CountModal = ({
  show,
  setShow,
  number,
  setSelectedItems,
  setCheckAll,
}: ModalProps) => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  });

  const Delete = useCallback(() => {
    setSelectedItems([]);
    setCheckAll(false);
    setShow(false);
  }, [setCheckAll, setSelectedItems, setShow]);

  const Close = useCallback(() => {
    setShow(false);
  }, [setShow]);

  if (number === 0) {
    setShow(false);
  }

  return createPortal(
    <div className={show ? "modal_count_active" : "modal"}>
      <div className={"modal_count"}>
        <img
          src={Img.cross}
          alt={""}
          className={"cross_count"}
          onClick={Close}
        />
        <p className={"products_count"}>
          Количество выбранных товаров: {number}
        </p>
        <button onClick={Delete} className={"delete_count_butt"}>
          Удалить
        </button>
      </div>
    </div>,
    document.getElementById("CountModal") as HTMLInputElement
  );
};

export default CountModal;
