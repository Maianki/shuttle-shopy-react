import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useAddress, useCartWishlist, useProducts } from "../../context";

export function ProfileTab() {
  const { authDispatcher } = useAuth();
  const { cartWishlistDispatcher } = useCartWishlist();
  const { productsDispatcher, productsAndFilterInitialState } = useProducts();
  const { setAddress } = useAddress();

  const handleLogout = () => {
    localStorage.removeItem("token");
    authDispatcher({ type: "LOGGED_OUT" });
    cartWishlistDispatcher({ type: "RESET_CART_AND_WISHLIST" });
    productsDispatcher({
      type: "CLEAR_ALL",
      payload: {
        ...productsAndFilterInitialState,
      },
    });
    setAddress({
      addressList: [],
      currentAddress: null,
    });
  };
  return (
    <div>
      <p className='md-ht-1'>Welcome, to shuttle shoppy</p>
      <p className='text-bold-500 md-ht-1'>Start Shopping</p>
      <Link to='/shop-now'>
        <button className='btn btn-primary'>Shop Now</button>
      </Link>
      <Link to='/'>
        <button className='btn btn-secondary' onClick={handleLogout}>
          Log out
        </button>
      </Link>
    </div>
  );
}
