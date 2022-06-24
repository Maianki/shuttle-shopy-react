import React from "react";
import { useProducts } from "../../../context/products-context";

export function FilterHeader() {
  const { productsDispatcher, productsAndFilterInitialState } = useProducts();

  return (
    <li className='flex-row products-filter-header'>
      <h2>Filters </h2>
      <button
        className='btn btn-primary'
        onClick={() =>
          productsDispatcher({
            type: "CLEAR_ALL",
            payload: {
              ...productsAndFilterInitialState,
            },
          })
        }
      >
        CLEAR ALL
      </button>
    </li>
  );
}
