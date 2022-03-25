import React from "react";
import { Navbar, Footer, ProductCard } from "../../components";
import { useCartWishlist } from "../../context";
import { useDocumentTitle } from "../../hooks";

import("./wishlist.css");

export function Wishlist() {
  useDocumentTitle("Wishlist");

  const {
    cartWishlist: { wishlist },
  } = useCartWishlist();
  return (
    <div className='wishlist-container'>
      <Navbar />
      <main className='wishlist-main'>
        <h1 className='text-center wishlist-heading'>My Wishlist</h1>
        <p className='md-ht-1 text-center'>
          You have {wishlist.length} items in your wishlist
        </p>
        <section className='wishlist-products'>
          {wishlist.map((product) => {
            return (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
