import React, { useState, useEffect } from "react";
import "./product-page.css";
import { MdiFilter } from "../../assets/icons";
import { Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { useDocumentTitle, useFilteredData, useWindowSize } from "../../hooks";

export function ProductPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { finalFilteredData: productsList } = useFilteredData();
  const { width: innerWidth } = useWindowSize();

  useDocumentTitle("Products page");

  const toggleFilterDrawer = () => {
    setIsOpenFilter((prev) => !prev);
  };

  useEffect(() => {
    setWidth(innerWidth);
  }, [innerWidth]);

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
