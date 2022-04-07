import React from "react";
import { Navbar, Footer } from "../../components";
import { useAuth } from "../../context/auth-context";
import { useDocumentTitle } from "../../hooks";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../../context";

export function Profile() {
  useDocumentTitle("Profile");
  const { authDispatcher } = useAuth();
  const { cartWishlistDispatcher } = useCartWishlist();

  const handleLogout = () => {
    localStorage.removeItem("token");
    authDispatcher({ type: "LOGGED_OUT" });
    cartWishlistDispatcher({ type: "RESET_CART_AND_WISHLIST" });
  };
  return (
    <div className='cart-container'>
      <Navbar />
      <main className='cart-main'>
        <div className='card'>
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
        ;
      </main>
      <Footer />
    </div>
  );
}
