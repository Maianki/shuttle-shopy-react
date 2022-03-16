import React from "react";

export function FilterHeader() {
  return (
    <li className='flex-row products-filter-header'>
      <h2>Filters </h2>
      <button className='btn btn-primary'>clear all</button>
    </li>
  );
}
