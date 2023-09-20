import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import type React from "react";

import "./modal.css";

interface DeleteProps {
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}
const DeleteModal = ({ setShow, children }: DeleteProps) => {
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
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, [keyDown]);

  const CloseModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const Propagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return createPortal(
    <div className={"modal_active"} onClick={CloseModal}>
      <div className={"delete_modal"} onClick={Propagation}>
        {children}
      </div>
    </div>,
    document.getElementById("deleteModal") as HTMLElement
  );
};

export default DeleteModal;
