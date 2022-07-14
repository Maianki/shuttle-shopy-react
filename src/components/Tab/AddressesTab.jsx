import React from "react";
import { AddressCard, AddressEditCard, Modal } from "..";
import { useAddress } from "../../context";

export function AddressesTab() {
  const {
    address: { addressList },
    handleModal,
    handleIsEditAddress,
    isModalOpen,
  } = useAddress();

  const handleNewAddress = () => {
    handleIsEditAddress(false);
    handleModal();
  };

  return (
    <div className='flex-column'>
      {isModalOpen && (
        <Modal>
          <AddressEditCard />
        </Modal>
      )}
      <button
        className='btn btn-primary btn-add-address'
        onClick={handleNewAddress}
      >
        Add New Address
      </button>

      {addressList?.map((address) => {
        return <AddressCard key={address._id} address={address} />;
      })}
      {!addressList?.length && (
        <p className='pd-ht-1'>No address to display.</p>
      )}
    </div>
  );
}
