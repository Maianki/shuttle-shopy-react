import React from "react";
import "./products-filter.css";
import { CategoriesFilter } from "../CategoriesFilter/CategoriesFilter";
import { FilterByAvailability } from "../FilterByAvailability/FilterByAvailability";
import { FilterHeader } from "../FilterHeader/FilterHeader";
import { PriceRangeFilter } from "../PriceRangeFilter/PriceRangeFilter";
import { SortByPriceFilter } from "../SortByPriceFilter/SortByPriceFilter";

export function ProductsFilter() {
  return (
    <ul className='list-unstyled'>
      <FilterHeader />
      <SortByPriceFilter />
      <CategoriesFilter />
      <PriceRangeFilter />
      <FilterByAvailability />
    </ul>
  );
}
