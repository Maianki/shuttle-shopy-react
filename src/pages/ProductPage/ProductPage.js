import React from "react";
import "./product-page.css";
import { MdiFilter } from "../../assets/icons";
import { Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { useFilteredData } from "../../hooks/useFilteredData";

export function ProductPage() {
  useDocumentTitle("Products page");

  const { finalFilteredData: productsList } = useFilteredData();

  return (
    <div className='productpage-container'>
      <aside className='flex-column products-filter card'>
        <ProductsFilter />
      </aside>
      <div className='filter-icon'>
        <MdiFilter />
        <p className='pd-ht-1 flex-column text-decoration-underline'>
          Filter
          <span className='filter-icon-text text-sm'>
            Showing {productsList.length} products
          </span>
        </p>
      </div>

      <main className='productpage-main flex-row'>
        {productsList.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
