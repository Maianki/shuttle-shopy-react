export const productsAndFilterInitialState = {
  productsList: [],
  sortByPrice: "none",
  filterByCategory: [],
  filterByRating: [],
  filterByPriceRange: 0,
  isOutOFStock: true,
};

export const productsReducer = (state, action) => {
  const { payload, type } = action;
  const { productsList } = state;
  switch (type) {
    case "INITIALISE_PRODUCTLIST":
      return { ...state, productsList: payload };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterByCategory: state.filterByCategory.includes(payload)
          ? state.filterByCategory.filter(
              (categoryName) => categoryName !== payload
            )
          : [...state.filterByCategory, payload],
      };

    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: payload };

    case "FILTER_BY_RATING":
      return {
        ...state,
        filterByRating: state.filterByRating.includes(payload)
          ? state.filterByRating.filter((rating) => rating !== payload)
          : [...state.filterByRating, payload],
      };

    case "FILTER_BY_PRICE_RANGE":
      return { ...state, filterByPriceRange: payload };

    case "CLEAR_ALL":
      return { ...payload, productsList: productsList };

    case "SET_CATEGORY_FROM_HOME":

      return {
        ...productsAndFilterInitialState,
        productsList: productsList,
        filterByCategory: payload,
      };

    default:
      throw Error("Unknown action.");
  }
};
