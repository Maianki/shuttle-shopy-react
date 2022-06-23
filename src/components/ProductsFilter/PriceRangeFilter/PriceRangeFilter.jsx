import React from "react";
import { useProducts } from "../../../context/products-context";

export function PriceRangeFilter() {
  const { products, productsDispatcher } = useProducts();

  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>
        Price less than {products.filterByPriceRange}
      </h3>
      <input
        className='price-slider'
        type='range'
        min='1'
        max='4000'
        onChange={(e) =>
          productsDispatcher({
            type: "FILTER_BY_PRICE_RANGE",
            payload: Number(e.target.value),
          })
        }
        value={products.filterByPriceRange}
      />
      <div className='flex-row price-slider-range'>
        <p className='text-sm'>1</p>
        <p className='text-sm'>Rs. 4000</p>
      </div>
    </li>
  );
}
