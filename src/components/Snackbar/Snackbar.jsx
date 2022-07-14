import React from "react";
import { GridiconsCross } from "../../assets/icons";
import { useEffect } from "react";
import "./snackbar.css";

export function Snackbar({ message, type, handleRemoveSnackbar }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleRemoveSnackbar();
    }, 1000);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`snackbar flex-row ${type} shuttle-shopy-snackbar pd-1 md-vt-1`}
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
