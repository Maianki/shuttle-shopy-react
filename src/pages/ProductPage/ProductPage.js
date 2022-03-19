import React from "react";
import "./product-page.css";
import { Navbar, Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { useDocumentTitle, useAxios } from "../../hooks";
import { PRODUCTS_API } from "../../constants/apiEndPoints";

export function ProductPage() {
  useDocumentTitle("Products page");
  const { response: productsList } = useAxios(PRODUCTS_API);
  return (
    <div className='productpage-container'>
      <Navbar />
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
