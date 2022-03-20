import React from "react";
import { useProducts } from "../../../context/products-context";

export function FilterHeader() {
  const { productsDispatcher, initialState } = useProducts();

  return (
    <li className='flex-row products-filter-header'>
      <h2>Filters </h2>
      <button
        className='btn btn-primary'
        onClick={() =>
          productsDispatcher({
            type: "clearAll",
            payload: {
              ...initialState,
            },
          })
        }
      >
        clear all
      </button>
    </li>
  );
}
