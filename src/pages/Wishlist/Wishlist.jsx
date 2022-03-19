import React from "react";
import { Navbar, Footer } from "../../components";
import { useDocumentTitle } from "../../hooks";
import("./wishlist.css");

export function Wishlist() {
  useDocumentTitle("Wishlist");
  return (
    <div className='wishlist-container'>
      <Navbar />
      <main className='wishlist-main'>
        <h1 className='text-center wishlist-heading'>My Wishlist</h1>
        <p className='md-ht-1 text-center'>You have 6 items in your wishlist</p>
        <section className='wishlist-products'></section>
      </main>
      <Footer />
    </div>
  );
}
