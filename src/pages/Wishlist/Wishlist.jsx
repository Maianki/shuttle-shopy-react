import React from "react";
import { Navbar, Footer } from "../../components";
import("./wishlist.css");

export function Wishlist() {
  return (
    <div className='wishlist-container'>
      <Navbar />
      <main className='wishlist-main'>
        <h1 class='text-center wishlist-heading'>My Wishlist</h1>
        <p class='md-ht-1 text-center'>You have 6 items in your wishlist</p>
        <section class='wishlist-products'></section>
      </main>
      <Footer />
    </div>
  );
}
