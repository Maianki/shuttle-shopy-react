import React from "react";

export function Label({ labelName, labelFor }) {
  return (
    <label className='form-label' htmlFor={labelFor}>
      {labelName}:
    </label>
  );
}
