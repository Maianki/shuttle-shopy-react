import React from "react";
import { useAddress, useCartWishlist } from "../../context";
import {
  CartProductCard,
  OrderSummaryCard,
  AddressCard,
  AddressEditCard,
  Modal,
} from "../../components";
import "./checkout.css";

export function Checkout() {
  const {
    cartWishlist: { cart },
  } = useCartWishlist();

  const { address, isModalOpen, handleModal, handleIsEditAddress } =
    useAddress();

  const handleNewAddress = () => {
    handleIsEditAddress(false);
    handleModal();
  };

  return (
    <div className='checkout-container'>
      <main className='checkout-main'>
        {isModalOpen && (
          <Modal>
            <AddressEditCard />
          </Modal>
        )}
        <h1 className='text-primary text-center'> Checkout</h1>
        <p className='text-center'>You have {cart.length} items in the cart</p>
        <section className='checkout-product-details'>
          <section className='flex-column address-details'>
            <div className='align-items-center address-details-heading'>
              <h3>Select Delivery Address</h3>
              <button
                className='btn btn-outline-primary'
                onClick={handleNewAddress}
              >
                Add New Address
              </button>
            </div>
            {address?.addressList?.map((address) => {
              return <AddressCard key={address._id} address={address} />;
            })}
          </section>
          <section className='flex-column'>
            {cart.map((product) => {
              return <CartProductCard key={product._id} product={product} />;
            })}
            <section className='card-checkout-summary'>
              {cart.length > 0 && <OrderSummaryCard />}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}
