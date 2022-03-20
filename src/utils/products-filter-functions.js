const getFilteredByCategory = (products, filterByCategory) => {
  if (filterByCategory.length > 0) {
    return products.filter((product) =>
      filterByCategory.includes(product.category)
    );
  } else {
    return products;
  }
};

const getFilteredByRating = (products, filterByRating) => {
  const minimumRating = Math.min(...filterByRating);
  if (filterByRating.length > 0) {
    return products.filter((product) => product.rating > minimumRating);
  } else {
    return products;
  }
};;

const getFilteredByPriceRange = (products, priceRange) => {
  return products.filter(
    ({ price: { discounted: productPrice } }) => productPrice > priceRange
  );
};

const getFilteredByPriceSort = (products, sortBy) => {
  if (sortBy === "highToLow") {
    return products.sort(
      (
        { price: { discounted: firstProductPrice } },
        { price: { discounted: secondProductPrice } }
      ) => secondProductPrice - firstProductPrice
    );
  } else if (sortBy === "lowToHigh") {
    return products.sort(
      (
        { price: { discounted: firstProductPrice } },
        { price: { discounted: secondProductPrice } }
      ) => firstProductPrice - secondProductPrice
    );
  } else {
    return products;
  }
};

export {
  getFilteredByCategory,
  getFilteredByRating,
  getFilteredByPriceRange,
  getFilteredByPriceSort,
};
