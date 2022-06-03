/***
 * This function filters products based on categories
 * @params - array of products and array of category of products
 * @return - filtered products based on categories
 *
 */

const getFilteredByCategory = (products, filterByCategory) => {
  if (filterByCategory.length > 0) {
    return products.filter((product) =>
      filterByCategory.includes(product.category)
    );
  } else {
    return products;
  }
};

/***
 * This function filters products based on ratings
 * @params - array of products and array of ratings applied by users
 * @return - filtered products based on ratings
 */

const getFilteredByRating = (products, filterByRating) => {
  const minimumRating = Math.min(...filterByRating);
  if (filterByRating.length > 0) {
    return products.filter((product) => product.rating > minimumRating);
  } else {
    return products;
  }
};

/***
 * This function filters products based on pricerange
 * @params - array of products and price range
 * @return - filtered products which are greater than the price ranges passed
 */

const getFilteredByPriceRange = (products, priceRange) => {
  return products.filter(
    ({ price: { discounted: productPrice } }) => productPrice > priceRange
  );
};

/***
 * This function filters products based on type of sort passed in param
 * @params - array of products and sort by price applied on products
 * @return - sorted products either from low to high or high to low
 */

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

/***
 * This function filters products by search results
 * @params - array of products and searched Value
 * @return - filtered products based on searched value
 */

 const getFilteredBySearch = (products, searchedValue) => {
   if(searchedValue === ""){
     return products
   }else{
     let re = new RegExp(`${searchedValue}`,"i")
     return products.filter(({name})=>re.test(name))
   }
};

export {
  getFilteredByCategory,
  getFilteredByRating,
  getFilteredByPriceRange,
  getFilteredByPriceSort,
  getFilteredBySearch
};
