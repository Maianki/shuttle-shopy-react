import React from "react";
import {
  Footer,
  CartProductCard,
  OrderSummaryCard,
  EmptyPlaceholder,
} from "../../components";
import { useCartWishlist } from "../../context";
import { useDocumentTitle } from "../../hooks";
import "./cart.css";

export function Cart() {
  useDocumentTitle("Cart");

  const {
    cartWishlist: { cart },
  } = useCartWishlist();

  return (
    <div className='cart-container'>
      <main className='cart-main'>
        <h1 className='text-primary text-center'> My Cart</h1>
        <p className='text-center'>You have {cart.length} items in the cart</p>
        {cart.length <= 0 ? (
          <EmptyPlaceholder />
        ) : (
          <section className='cart-product-details'>
            <section className='flex-column'>
              {cart.map((product) => {
                return <CartProductCard key={product._id} product={product} />;
              })}
            </section>
            {cart.length > 0 && <OrderSummaryCard />}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
