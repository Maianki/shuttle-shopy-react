/***
 * This function return true if the product is already in the cart otherwise return false
 * @params - items in cart and id of product to be checked in cart
 * @return - true or false
 *
 */

const isInCart = (cart, currProductId) => {
  return cart.some(({ _id }) => _id === currProductId);
};

const isInWishlist = (wishlist, currProductId) => {
  return wishlist.some(({ _id }) => _id === currProductId);
};

export { isInCart, isInWishlist };
