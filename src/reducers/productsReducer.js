export const productsReducer = (state, action) => {
  const { payload, type } = action;
  const { productsList } = state;
  switch (type) {
    case "initialize":
      return { ...state, productsList: payload };
    case "filterByCategory":
      return {
        ...state,
        filterByCategory: state.filterByCategory.includes(payload)
          ? state.filterByCategory.filter(
              (categoryName) => categoryName !== payload
            )
          : [...state.filterByCategory, payload],
      };

    case "sortByPrice":
      return { ...state, sortByPrice: payload };

    case "filterByRating":
      return {
        ...state,
        filterByRating: state.filterByRating.includes(payload)
          ? state.filterByRating.filter((rating) => rating !== payload)
          : [...state.filterByRating, payload],
      };

    case "filterByPriceRange":
      return { ...state, filterByPriceRange: payload };

    case "clearAll":
      return { ...payload, productsList: productsList };

    case "setCategoryFromHome":
      const { initialState, categoryName } = payload;
      return {
        ...initialState,
        productsList: productsList,
        filterByCategory: [categoryName],
      };

    default:
      return state;
  }
};