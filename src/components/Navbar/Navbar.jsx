import React from 'react'
import {
  logo,
  wishlistIcon,
  loginIcon,
  cartIcon,
  profileIcon,
} from "../../assets/images";
import { useAuth, useCartWishlist } from "../../context";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const {
    cartWishlist: { cart, wishlist },
  } = useCartWishlist();

  const {
    auth: { isLoggedIn },
  } = useAuth();
  return (
    <nav className='navbar flex-row'>
      <Link className='navbar-brand' to='/'>
        <img className='responsive-img navbar-logo' src={logo} alt='logo' />
      </Link>

      <form className='navbar-form form-label-inline'>
        <input
          className='form-search navbar-form'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
      </form>

      <ul className='navbar-menu list-unstyled flex-row'>
        <li className='list-inline'>
          <Link
            className='flex-row  btn btn-outline-secondary btn-shop-now'
            to='/shop-now'
          >
            {/* -- Shop Now -- */}
            Shop now
          </Link>
        </li>

        <li className='list-inline'>
          <Link className='flex-column menu-link' to='/wishlist'>
            {/* -- wishlist  -- */}
            <div class='badge-container'>
              <img
                className='navbar-link'
                src={wishlistIcon}
                alt='wishlist icon'
              />
              {wishlist.length > 0 && (
                <span class='badge badge-icon badge-navlink'>
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>
        </li>

        <li className='list-inline'>
          <Link className='flex-column menu-link' to='/cart'>
            {/* -- cart -- */}
            <div class='badge-container'>
              <img
                className='navbar-link'
                src={cartIcon}
                alt='add to cart icon'
              />
              {cart.length > 0 && (
                <span class='badge badge-icon badge-navlink'>
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </li>

        <li className='list-inline'>
          {isLoggedIn ? (
            <Link className='flex-column menu-link' to='/profile'>
              <img
                className='navbar-link'
                src={profileIcon}
                alt='profile icon'
              />
            </Link>
          ) : (
            <Link className='flex-column menu-link' to='/login'>
              {/* -- login -- */}
              <img className='navbar-link' src={loginIcon} alt='login icon' />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export { Navbar }
