import { useCallback } from "react";
import { createPortal } from "react-dom";

import type React from "react";

import "./modal.css";

interface DeleteProps {
  show: boolean;
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}
const DeleteModal = ({ show, setShow, children }: DeleteProps) => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  });
  const CloseModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const Propagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return createPortal(
    <div className={show ? "modal_active" : "modal"} onClick={CloseModal}>
      <div className={"delete_modal"} onClick={Propagation}>
        {children}
      </div>
    </div>,
    document.getElementById("deleteModal") as HTMLElement
  );
};

export default DeleteModal;
