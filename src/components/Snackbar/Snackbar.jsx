import React from "react";
import { GridiconsCross } from "../../assets/icons";
import { useEffect } from "react";
import "./snackbar.css";

export function Snackbar({ message, type, handleRemoveSnackbar }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleRemoveSnackbar();
    }, 1500);

    return () => clearTimeout(timerId);
  }, [handleRemoveSnackbar]);

  return (
    <div
      className={`snackbar flex-row ${type} shuttle-motion-snackbar pd-1 md-vt-1`}
    >
      <p className='md-ht-2'>{message}</p>
      <span
        className='btn-snackbar-cancel md-ht-2'
        onClick={handleRemoveSnackbar}
        role='button'
      >
        <GridiconsCross className='snackbar-dismiss' />
      </span>
    </div>
  );
}
