import React from "react";

export function Input({
  type,
  id,
  name,
  placeholder,
  isRequired = true,
  value,
  setUserDetails,
  userDetails,
}) {
  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <input
      className='form-input form-input-lg pd-1'
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={isRequired}
      onChange={changeHandler}
    />
  );
}
