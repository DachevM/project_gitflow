import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import { Img } from "../../../Images/Img";

interface ModalProps {
  setShow: (v: boolean) => void;
  setCheckAll: (v: boolean) => void;
  number: number;
  setSelectedItems: (v: string[]) => void;
}

const CountModal = ({
  setShow,
  number,
  setSelectedItems,
  setCheckAll,
}: ModalProps) => {
  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [keyDown]);

  const Delete = useCallback(() => {
    setSelectedItems([]);
    setCheckAll(false);
    setShow(false);
  }, [setCheckAll, setSelectedItems, setShow]);

  const Close = useCallback(() => {
    setShow(false);
  }, [setShow]);

  useEffect(() => {
    if (number === 0) {
      setShow(false);
    }
  }, [number, setShow]);

  return createPortal(
    <div className={"modal_count_active"}>
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
    document.getElementById("countModal") as HTMLInputElement
  );
};

export default CountModal;
