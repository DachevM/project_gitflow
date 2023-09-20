import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import type { MouseEventHandler } from "react";
import type React from "react";

import "./modal.css";

interface ModalProps {
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ setShow, children }: ModalProps) => {
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

  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const Propagation: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return createPortal(
    <div className={"modal_active"} onClick={closeModal}>
      <div className={"content"} onClick={Propagation}>
        {children}
      </div>
    </div>,
    document.getElementById("modals") as HTMLInputElement
  );
};

export default Modal;
