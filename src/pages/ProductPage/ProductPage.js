import React, { useState, useEffect } from "react";
import "./product-page.css";
import { MdiFilter } from "../../assets/icons";
import { Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { useFilteredData } from "../../hooks/useFilteredData";

export function ProductPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { finalFilteredData: productsList } = useFilteredData();

  useDocumentTitle("Products page");

  const toggleFilterDrawer = () => {
    setIsOpenFilter((prev) => !prev);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });



  return (
    <div className='productpage-container'>
      {width > 768 ? (
        <aside className='flex-column products-filter card'>
          <ProductsFilter />
        </aside>
      ) : (
        isOpenFilter && (
          <section className='filters flex-column'>
            <button
              className='btn-close-filter text-bold-700 text-decoration-underline'
              onClick={toggleFilterDrawer}
            >
              Close
            </button>
            <ProductsFilter />
          </section>
        )
      )}

      <div className='filter-icon' onClick={toggleFilterDrawer} role='button'>
        <MdiFilter />
        <p className='flex-column text-lg text-decoration-underline'>Filters</p>
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
