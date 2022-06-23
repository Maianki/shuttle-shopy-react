import React from "react";
import { createPortal } from "react-dom";
import { useAddress } from "../../context";
import { GridiconsCross } from "../../assets/icons";
import "./modal.css";

export function Modal({ children }) {
  const { handleModal } = useAddress();
  return createPortal(
    <div>
      <div className='overlay' onClick={() => handleModal(false)}></div>

      <div className={"modal-body"}>
        <div className='text-lg btn-close-modal'>
          <GridiconsCross onClick={() => handleModal(false)} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
