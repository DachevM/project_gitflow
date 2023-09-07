import { useCallback } from "react";
import { createPortal } from "react-dom";

import type React from "react";

import "./modal.css";

interface ModalProps {
  show: boolean;
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ show, setShow, children }: ModalProps) => {
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
      <div className={"content"} onClick={Propagation}>
        {children}
      </div>
    </div>,
    document.getElementById("modals") as HTMLInputElement
  );
};

export default Modal;
