export const cartWishlistInitialState = {
  cart: [],
  wishlist: [],
};

export const cartWishlistReducer = (state, action) => {
  switch (action.type) {
    case "RESET_CART_AND_WISHLIST":
      return cartWishlistInitialState;
    case "UPDATE_CART":
      return { ...state, cart: action.payload };

    case "UPDATE_WISHLIST":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};
