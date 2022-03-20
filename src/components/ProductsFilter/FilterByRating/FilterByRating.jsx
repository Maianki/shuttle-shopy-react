import React from "react";
import { ratingFilterData } from "../../../data/rating-filter-data";
import { useProducts } from "../../../context/products-context";
export function FilterByRating() {
  const { products, productsDispatcher } = useProducts();
  console.log(products.filterByRating);

  return (
    <li className='flex-column md-ht-1'>
      <h3 className='filter-heading'>Customer Ratings</h3>
      {ratingFilterData.map(({ id, rating, value }) => {
        return (
          <div key={id} className='form-check'>
            <input
              type='checkbox'
              value={value}
              id={value}
              onChange={() =>
                productsDispatcher({
                  type: "filterByRating",
                  payload: Number(value),
                })
              }
              checked={products.filterByRating.includes(Number(value))}
            />
            <label className='form-label-inline' htmlFor={value}>
              {rating}
            </label>
          </div>
        );
      })}
    </li>
  );
}
