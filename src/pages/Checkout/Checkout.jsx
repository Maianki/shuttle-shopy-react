import React from "react";
import { useCartWishlist } from "../../context";
import {
  CartProductCard,
  OrderSummaryCard,
  AddressCard,
} from "../../components";
import "./checkout.css";

export function Checkout() {
  const {
    cartWishlist: { cart },
  } = useCartWishlist();

  console.log(cart);
  return (
    <div className='checkout-container'>
      <main className='checkout-main'>
        <h1 className='text-primary text-center'> Checkout</h1>
        <p className='text-center'>You have {cart.length} items in the cart</p>
        <section className='checkout-product-details'>
          <section className='flex-column address-details'>
            <div className='align-items-center address-details-heading'>
              <h3>Select Delivery Address</h3>
              <button className='btn btn-outline-primary'>
                Add New Address
              </button>
            </div>
            <AddressCard />
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

      {/* <Footer /> */}
    </div>
  );
}
