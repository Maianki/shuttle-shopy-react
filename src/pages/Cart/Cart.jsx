import React from "react";
import {
  Navbar,
  Footer,
  CartProductCard,
  OrderSummaryCard,
} from "../../components";
import { productsList } from "../../data/products-data";
import { useDocumentTitle } from "../../hooks";
import "./cart.css";

export function Cart() {
  useDocumentTitle("Cart");
  return (
    <div classNameName='cart-container'>
      <Navbar />
      <main className='cart-main'>
        <section className='cart-product-details'>
          <section className='flex-column'>
            {productsList
              .slice(0, 2)
              .map(
                ({
                  badge,
                  img,
                  name,
                  description,
                  price: { original, discounted, discount },
                }) => {
                  return (
                    <CartProductCard
                      badge={badge}
                      img={img}
                      discountPercent={discount}
                      description={description}
                      originalPrice={original}
                      discountedPrice={discounted}
                      name={name}
                    />
                  );
                }
              )}
          </section>
          <OrderSummaryCard
            price='2,698'
            discountedPrice='1000'
            totalAmount='3698'
            deliveryCharges='- 500'
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
