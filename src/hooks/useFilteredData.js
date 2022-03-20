import { useProducts } from "../context/products-context";
import {
  getFilteredByCategory,
  getFilteredByRating,
  getFilteredByPriceRange,
  getFilteredByPriceSort,
} from "../utils/products-filter-functions";

export function useFilteredData() {
  const { products } = useProducts();
  const {
    productsList,
    sortByPrice,
    filterByCategory,
    filterByRating,
    filterByPriceRange,
  } = products;
  const filteredData = JSON.parse(JSON.stringify(productsList));

  const filteredDataByCategory = getFilteredByCategory(
    filteredData,
    filterByCategory
  );

  const filteredDataByRating = getFilteredByRating(
    filteredDataByCategory,
    filterByRating
  );

  const filteredDataByPriceRange = getFilteredByPriceRange(
    filteredDataByRating,
    filterByPriceRange
  );

  const filteredDataByPriceSort = getFilteredByPriceSort(
    filteredDataByPriceRange,
    sortByPrice
  );

  return { finalFilteredData: filteredDataByPriceSort };
}
