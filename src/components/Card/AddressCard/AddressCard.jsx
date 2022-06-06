import React from "react";
import { useAddress } from "../../../context";
import { Modal } from "../../Modal/Modal";
import { AddressEditCard } from "./AddressEditCard";
import { useLocation } from "react-router-dom";
import "./addresscard.css";

export function AddressCard({
  address: currAddress,
  address: { _id, city, country, state, name, phone, street, pincode },
}) {
  const {
    address,
    isModalOpen,
    setAddress,
    removeAddress,
    handleModal,
    handleIsEditAddress,
  } = useAddress();

  const { pathname } = useLocation();

  const addressChangeHandler = () => {
    setAddress((prev) => ({ ...prev, currentAddress: currAddress }));
  };

  const removeAddressHandler = () => {
    removeAddress(currAddress);
  };

  const editAddressHandler = () => {
    handleIsEditAddress(true);
    handleModal((prev) => !prev);
  };

  return (
    <div className='address-card md-vt-1'>
      {isModalOpen && pathname === "/profile" && (
        <Modal>
          <AddressEditCard currAddress={currAddress} />
        </Modal>
      )}
      <div className='form-check md-vt-1'>
        <input
          className='form-check-input'
          type='radio'
          name='address'
          id={`${name}-address`}
          value='option1'
          checked={address?.currentAddress?._id === _id}
          onChange={addressChangeHandler}
        />
        <label className='form-label-inline' htmlFor={`${name}-address`}>
          <p className='text-lg text-bold-500'>{name}</p>
          <p>{street}</p>
          <p>
            {city}, {state} {country}, {pincode}
          </p>
          <p>Phone number - {phone}</p>
        </label>
      </div>
      {pathname === "/profile" && (
        <div className='flex-column'>
          {address?.addressList.length > 1 && (
            <button className='btn btn-danger' onClick={removeAddressHandler}>
              Remove
            </button>
          )}

          <button className='btn btn-warning' onClick={editAddressHandler}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
