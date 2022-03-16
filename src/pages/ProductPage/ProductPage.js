import React from "react";
import "./product-page.css";
import { Navbar, Footer, ProductCard } from "../../components";
import { ProductsFilter } from "../../components";
import { productsList } from "../../data/products-data";

export function ProductPage() {
  return (
    <div className='productpage-container'>
      <Navbar />
      <aside class='flex-column products-filter card'>
        <ProductsFilter />
      </aside>
      <main class='productpage-main flex-row'>
        {productsList.map(
          ({
            badge,
            img,
            name,
            description,
            price: { original, discounted, discount },
            Icon,
          }) => {
            return (
              <ProductCard
                badge={badge}
                img={img}
                discountPercent={discount}
                description={description}
                originalPrice={original}
                discountedPrice={discounted}
                name={name}
                icon={<Icon />}
              />
            );
          }
        )}
      </main>
      <Footer />
    </div>
  );
}
