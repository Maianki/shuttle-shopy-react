/***
 * This function return true if the product is already in the cart otherwise return false
 * @params - items in cart and id of product to be checked in cart
 * @return - true or false
 *
 */

const isInCart = (cart, currProductId) => {
  return cart.some(({ _id }) => _id === currProductId);
};


/***
 * This function return true if the product is already in the wishlist otherwise return false
 * @params - items in cart and id of product to be checked in wishlist
 * @return - true or false
 *
 */

const isInWishlist = (wishlist, currProductId) => {
  return wishlist.some(({ _id }) => _id === currProductId);
};


/***
 * This function return total price of all products in cart excluding discounts on them
 * @params - items in cart 
 * @return - total price of all products in cart
 *
 */

const calculateTotalAmount = (cart) => {
  return cart.reduce(
    (total, { price: { original }, qty }) => total + qty * original,
    0
  );
};

/***
 * This function return total discount price in all products in cart 
 * @params - items in cart 
 * @return - total discount price in all products in cart 
 *
 */

const calculateTotalDiscount = (cart) => {
  return cart.reduce(
    (total, { price: { discounted }, qty }) => total + qty * discounted,
    0
  );
};

/***
 * This function returns delivery charges if the total price of products in cart is less than 1400 otherwise it returns 0
 * @params - total price of all items in cart
 * @return - 0 or a random number between 10 to 25
 *
 */

const calculateDeliveryCharges = (totalPrice) => {
  return totalPrice < 1400 ? Math.floor(Math.random() * (25 - 10) + 10) : 0;
};

export {
  isInCart,
  isInWishlist,
  calculateTotalAmount,
  calculateTotalDiscount,
  calculateDeliveryCharges,
};

