import React from "react";
import {
  Navbar,
  Footer,
  CartProductCard,
  OrderSummaryCard,
} from "../../components";
import { useCartWishlist, useAuth } from "../../context";
import { productsList } from "../../data/products-data";
import { useDocumentTitle } from "../../hooks";
import { useAxios } from "../../hooks";
import "./cart.css";

export function Cart() {
  useDocumentTitle("Cart");

  const {
    cartWishlist: { cart },
  } = useCartWishlist();
  const {
    auth: { encodedToken },
  } = useAuth();

  // const { response: cart } = useAxios("/api/user/cart", encodedToken);
  // console.log("This is custom hook response ", cart);

  return (
    <div className='cart-container'>
      <Navbar />
      <main className='cart-main'>
        <h1 class='text-primary text-center'> My Cart</h1>
        <p class='text-center'>You have {cart.length} items in the cart</p>
        <section className='cart-product-details'>
          <section className='flex-column'>
            {cart.map((product) => {
              return <CartProductCard key={product._id} product={product} />;
            })}
          </section>
          {cart.length > 0 && (
            <OrderSummaryCard
              price='2,698'
              discountedPrice='1000'
              totalAmount='3698'
              deliveryCharges='- 500'
            />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
