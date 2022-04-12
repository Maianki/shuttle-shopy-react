import React from "react";
import { loginIcon, profileIcon } from "../../assets/images";
import { MakiCross11 } from "../../assets/icons/";
import { useAuth, useCartWishlist } from "../../context";
import "./drawer.css";
import { NavLink } from "react-router-dom";

export function Drawer({ toggleDrawer, isDrawerOpen }) {
  const {
    auth: { encodedToken },
    authDispatcher,
  } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    authDispatcher({ type: "LOGGED_OUT" });
    cartWishlistDispatcher({ type: "RESET_CART_AND_WISHLIST" });
  };

  const activeLinkHandler = ({ isActive }) => {
    return isActive ? { fontWeight: "500" } : {};
  };

  const { cartWishlistDispatcher } = useCartWishlist();

  return (
    <>
      <section className='overlay' onClick={toggleDrawer}></section>
      <div className='drawer'>
        <div className='drawer-header flex-row'>
          {encodedToken ? (
            <NavLink className='flex-row menu-link' to='/profile'>
              <img
                className='navbar-link'
                src={profileIcon}
                alt='profile icon'
              />
              <p className='text-bold-500 pd-ht-1 text-lg'>User Profile</p>
            </NavLink>
          ) : (
            <NavLink className='flex-row menu-link' to='/login'>
              {/* -- login -- */}
              <img className='navbar-link' src={loginIcon} alt='login icon' />
              <p className='text-bold-500 pd-ht-1 text-lg'> Login</p>
            </NavLink>
          )}
          <span
            className='btn-drawer-toggle'
            role='button'
            onClick={toggleDrawer}
          >
            <MakiCross11 />
          </span>
        </div>
        <ul className='list-unstyled flex-column drawer-menu'>
          <li>
            <NavLink
              className='flex-row drawer-menu-link text-md'
              to='/'
              style={activeLinkHandler}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className='flex-row drawer-menu-link text-md'
              to='/shop-now'
              style={activeLinkHandler}
            >
              Shop now
            </NavLink>
          </li>
          <li>
            <NavLink
              className='flex-row drawer-menu-link text-md'
              to='/cart'
              style={activeLinkHandler}
            >
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              className='flex-row drawer-menu-link text-md'
              to='/wishlist'
              style={activeLinkHandler}
            >
              Wishlist
            </NavLink>
          </li>

          <li
            className='flex-row drawer-menu-link text-md'
            onClick={handleLogout}
            role='button'
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}
