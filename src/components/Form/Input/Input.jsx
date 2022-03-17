import React from "react";

export function Input({ type, id, name, placeholder, isRequired = true }) {
  return (
    <input
      className='form-input form-input-lg pd-1'
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={isRequired}
    />
  );
}
