import { createContext, useContext, useReducer } from "react";
import { cartWishlistInitialState, cartWishlistReducer } from "../reducers";
import axios from "axios";
import { isInCart, isInWishlist } from "../utils/cart-and-wishlist-functions";
import { useNavigate ,useLocation} from "react-router-dom";
import { useAuth } from "./auth-context";
import { CART_API, WISHLIST_API } from "../constants/apiEndPoints";
import { useSnackbar } from "./snackbar-context";

const cartWishlistContext = createContext(null);

const CartWishlistProvider = ({ children }) => {
  const { addSnackbar } = useSnackbar();
  const {
    auth: { encodedToken },
  } = useAuth();

  const navigate = useNavigate();
  const {pathname} = useLocation()

  const [cartWishlist, cartWishlistDispatcher] = useReducer(
    cartWishlistReducer,
    cartWishlistInitialState
  );

  const manageCart = async (product) => {
    const { cart } = cartWishlist;
    if (cart.length > 0 && isInCart(cart, product._id)) {
      navigate("/cart");
    } else {
      try {
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
          cartWishlistDispatcher({
            type: "UPDATE_CART",
            payload: cartProducts,
          });
          addSnackbar("Item added to cart", "snackbar-primary");
        }
      } catch (err) {
        const { status, data } = err.response;

        if (status === 500 && data.message === "jwt must be provided") {
          addSnackbar("Please login to add item to cart", "snackbar-danger");
        }
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

        cartWishlistDispatcher({ type: "UPDATE_CART", payload: cart });
        operation === "increment"
          ? addSnackbar("Quantity of item increased by 1", "snackbar-primary")
          : addSnackbar("Quantity of item decreased by 1", "snackbar-primary");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const emptyCart = async (products) => {
    try {
      await Promise.all(
        cartWishlist.cart.map((product) =>manageDeleteItemIncart(product._id))
      );
    } catch (error) {
      addSnackbar("Could not place your order try again", "snackbar-danger");
    } 
  };

  const manageDeleteItemIncart = async (productid) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productid}`, {
        headers: { authorization: encodedToken },
      });

      if (response.status === 200) {
        const { cart } = response.data;
        cartWishlistDispatcher({ type: "UPDATE_CART", payload: cart });
       
        if(pathname !== '/checkout'){
          addSnackbar("Item deleted from cart", "snackbar-danger");
        }
      }
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
          addSnackbar("Item deleted from wishlist", "snackbar-danger");
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
          addSnackbar("Item added to wishlist", "snackbar-primary");
        }
      } catch (err) {
        const { status, data } = err.response;
        console.log(err.response);
        if (status === 500 && data.message === "jwt must be provided") {
          addSnackbar(
            "Please login to add item to wishlist",
            "snackbar-danger"
          );
        }
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
        emptyCart,
        manipulateProductQtyIncart,
        manageDeleteItemIncart,
      }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};;

const useCartWishlist = () => useContext(cartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
