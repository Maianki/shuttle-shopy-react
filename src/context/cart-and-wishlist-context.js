import { createContext, useContext, useReducer } from "react";
import { cartWishlistInitialState, cartWishlistReducer } from "../reducers";
import axios from "axios";
import { isInCart, isInWishlist } from "../utils/cart-and-wishlist-functions";
import { useAuth } from "./auth-context";

const cartWishlistContext = createContext(null);

const CartWishlistProvider = ({ children }) => {
  const {
    auth: { encodedToken },
  } = useAuth();

  const [cartWishlist, cartWishlistDispatcher] = useReducer(
    cartWishlistReducer,
    cartWishlistInitialState
  );

  console.log("Products in wishlist", cartWishlist.wishlist);

  const manageWishlist = async (product) => {
    if (isInWishlist(cartWishlist.wishlist, product._id)) {
      try {
        const response = await axios.delete(
          `/api/user/wishlist/${product._id}`,
          {
            headers: { authorization: encodedToken },
          }
        );

        const { wishlist: wishlistProducts } = response.data;
        cartWishlistDispatcher({
          type: "UPDATE_WISHLIST",
          payload: wishlistProducts,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        const { wishlist: wishlistProducts } = response.data;

        cartWishlistDispatcher({
          type: "UPDATE_WISHLIST",
          payload: wishlistProducts,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <cartWishlistContext.Provider
      value={{ cartWishlist, cartWishlistDispatcher, manageWishlist }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};

const useCartWishlist = () => useContext(cartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
