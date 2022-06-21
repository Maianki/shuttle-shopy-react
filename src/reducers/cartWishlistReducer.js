export const cartWishlistInitialState = {
  cart: [],
  wishlist: [],
  orders: {},
};

export const cartWishlistReducer = (state, action) => {
  switch (action.type) {
    case "RESET_CART_AND_WISHLIST":
      return cartWishlistInitialState;
    case "UPDATE_CART":
      return { ...state, cart: action.payload };

    case "UPDATE_WISHLIST":
      return { ...state, wishlist: action.payload };

    case "UPDATE_ORDERS":
      return { ...state, orders: action.payload };
    default:
      throw Error("Unknown action.");
  }
};
