import React from "react";
import { createPortal } from "react-dom";
import { useAddress } from "../../context";
import "./modal.css";

export function Modal({ children }) {
  const { handleModal } = useAddress();
  return createPortal(
    <div>
      <div className='overlay' onClick={() => handleModal(false)}></div>
      <span></span>
      <div className={"modal-body"}>{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
