import React from "react";
import { CATEGORIES_API } from "../../../constants/apiEndPoints";
import { useProducts } from "../../../context/products-context";
import { useAxios } from "../../../hooks";

export function CategoriesFilter() {
  const { products, productsDispatcher } = useProducts();
  const { response: categoryFilterData } = useAxios(CATEGORIES_API);

  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>Categories</h3>

      {categoryFilterData.map(({ id, categoryName, value }) => {
        return (
          <div key={id} className='form-check'>
            <input
              type='checkbox'
              value={value}
              id={value}
              checked={products.filterByCategory.includes(categoryName)}
              onChange={() =>
                productsDispatcher({
                  type: "FILTER_BY_CATEGORY",
                  payload: categoryName,
                })
              }
            />
            <label className='form-label-inline' htmlFor={value}>
              {categoryName}
            </label>
          </div>
        );
      })}
    </li>
  );
}
