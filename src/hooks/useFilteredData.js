import { useProducts } from "../context/products-context";
import {
  getFilteredByCategory,
  getFilteredByRating,
  getFilteredByPriceRange,
  getFilteredByPriceSort,
  getFilteredBySearch,
} from "../utils/products-filter-functions";

/**
 * custom hook to filterData based on filter appplied by user
 *
 * @returns filtered data based on filter applied by user
 *
 */

export function useFilteredData() {
  const { products } = useProducts();
  const {
    productsList,
    sortByPrice,
    filterByCategory,
    filterByRating,
    filterByPriceRange,
    filteredDataBySearch: filteredSearch,
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

  const filteredDataBySearch = getFilteredBySearch(
    filteredDataByPriceSort,
    filteredSearch
  );

  return { finalFilteredData: filteredDataBySearch };
}
