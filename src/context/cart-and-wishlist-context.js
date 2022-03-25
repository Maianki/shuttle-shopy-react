import { createContext, useContext, useReducer } from "react";
import { cartWishlistInitialState, cartWishlistReducer } from "../reducers";
import axios from "axios";
import { isInCart, isInWishlist } from "../utils/cart-and-wishlist-functions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { CART_API, WISHLIST_API } from "../constants/apiEndPoints";

const cartWishlistContext = createContext(null);

const CartWishlistProvider = ({ children }) => {
  const {
    auth: { encodedToken },
  } = useAuth();

  const navigate = useNavigate();

  const [cartWishlist, cartWishlistDispatcher] = useReducer(
    cartWishlistReducer,
    cartWishlistInitialState
  );

  const manageCart = async (product) => {
    const { cart } = cartWishlist;
    if (cart.length > 0 && isInCart(cart, product._id)) {
      navigate("/cart");
    } else {
      const response = await axios.post(
        CART_API,
        {
          product,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      const { cart: cartProducts } = response.data;
      if (response.status === 201) {
        cartWishlistDispatcher({ type: "UPDATE_CART", payload: cartProducts });
      }
    }
  };

  const manipulateProductQtyIncart = async (productId, operation) => {
    try {
      const response = await axios.post(
        `${CART_API}/${productId}`,
        {
          action: { type: operation },
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      if (response.status === 200) {
        const { cart } = response.data;
        console.log("Updated cart", cart);
        cartWishlistDispatcher({ type: "UPDATE_CART", payload: cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const manageDeleteItemIncart = async (productid) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productid}`, {
        headers: { authorization: encodedToken },
      });
      console.log("from delete handler", response);
      const { cart } = response.data;
      cartWishlistDispatcher({ type: "UPDATE_CART", payload: cart });
    } catch (err) {
      console.log(err);
    }
  };

  const manageWishlist = async (product) => {
    if (isInWishlist(cartWishlist.wishlist, product._id)) {
      try {
        const response = await axios.delete(`${WISHLIST_API}/${product._id}`, {
          headers: { authorization: encodedToken },
        });

        const { wishlist: wishlistProducts } = response.data;

        if (response.status === 200) {
          cartWishlistDispatcher({
            type: "UPDATE_WISHLIST",
            payload: wishlistProducts,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          WISHLIST_API,
          {
            product,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        const { wishlist: wishlistProducts } = response.data;

        if (response.status === 201) {
          cartWishlistDispatcher({
            type: "UPDATE_WISHLIST",
            payload: wishlistProducts,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <cartWishlistContext.Provider
      value={{
        cartWishlist,
        cartWishlistDispatcher,
        manageWishlist,
        manageCart,
        manipulateProductQtyIncart,
        manageDeleteItemIncart,
      }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};

const useCartWishlist = () => useContext(cartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
