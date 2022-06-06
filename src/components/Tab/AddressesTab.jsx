import React from "react";
import { AddressCard } from "..";
import { useAddress } from "../../context";

export function AddressesTab() {
  const {
    address: { addressList },
    handleModal,
    handleIsEditAddress,
  } = useAddress();

  const handleNewAddress = () => {
    handleIsEditAddress(false);
    handleModal();
  };

  return (
    <div className='flex-column'>
      <button
        className='btn btn-primary btn-add-address'
        onClick={handleNewAddress}
      >
        Add New Address
      </button>
      {addressList?.map((address) => {
        return <AddressCard key={address._id} address={address} />;
      })}
    </div>
  );
}
