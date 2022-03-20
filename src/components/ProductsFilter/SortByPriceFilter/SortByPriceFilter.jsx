import React from "react";
import { useProducts } from "../../../context/products-context";

export function SortByPriceFilter() {
  const { products, productsDispatcher } = useProducts();

  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>Sort By</h3>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='price-filter'
          id='price-low-to-high'
          value='low-to-high'
          onChange={() =>
            productsDispatcher({ type: "sortByPrice", payload: "lowToHigh" })
          }
          checked={products.sortByPrice === "lowToHigh"}
        />
        <label className='form-label-inline' htmlFor='price-low-to-high'>
          Price - Low to High
        </label>
      </div>

      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='price-filter'
          id='price-high-to-low'
          value='high-to-low'
          onChange={() =>
            productsDispatcher({ type: "sortByPrice", payload: "highToLow" })
          }
          checked={products.sortByPrice === "highToLow"}
        />
        <label className='form-label-inline' htmlFor='price-high-to-low'>
          Price - High to Low
        </label>
      </div>
    </li>
  );
}
