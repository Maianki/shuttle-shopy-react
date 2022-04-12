import React from "react";
import "./product-page.css";
import { Navbar, Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { useFilteredData } from "../../hooks/useFilteredData";

export function ProductPage() {
  useDocumentTitle("Products page");

  const { finalFilteredData: productsList } = useFilteredData();

  return (
    <div className='productpage-container'>
      {/* <Navbar /> */}
      <aside className='flex-column products-filter card'>
        <ProductsFilter />
      </aside>
      <main className='productpage-main flex-row'>
        {productsList.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
