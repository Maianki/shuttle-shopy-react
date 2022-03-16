import React from "react";
import { categoryFilterData } from "../../../data/category-filter-data";

export function CategoriesFilter() {
  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>Categories</h3>

      {categoryFilterData.map(({ id, category, value }) => {
        return (
          <div key={id} className='form-check'>
            <input type='checkbox' value={value} id={value} />
            <label className='form-label-inline' htmlFor={value}>
              {category}
            </label>
          </div>
        );
      })}
    </li>
  );
}
