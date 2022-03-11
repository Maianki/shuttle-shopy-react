import React from 'react'
import "./navbar.css"
import loginIcon from "../../assets/images/user.png"
import logo from "../../assets/images/shuttle-shopy-logo.png"
import wishlistIcon from "../../assets/images/heart.png"
import cartIcon from "../../assets/images/shopping-bag.png"

export const Navbar = () => {
  return (
    <>
        <nav classNameName="navbar flex-row">

            <a classNameName="navbar-brand" href="../index.html">
                <img classNameName="responsive-img navbar-logo" 
                src={logo} alt="logo"/>
            </a>

            <form classNameName="navbar-form form-label-inline">
                <input classNameName="form-search navbar-form" 
                type="search" placeholder="Search" aria-label="Search"/>
            </form>

            <ul classNameName="navbar-menu list-unstyled flex-row">
                <li classNameName="list-inline">
                    <a className="flex-row btn btn-outline-secondary btn-shop-now" href="product-listing-page.html">
                        {/* -- Shop Now -- */}
                        Shop now
                    </a>
                </li>   
                <li className="list-inline">
                    <a className="flex-column menu-link" href="login.html">
                        {/* -- login-- */}
                        <img className="navbar-link" src={loginIcon} alt="login icon"/>
                    </a>
                </li>

                <li className="list-inline">
                    <a className="flex-column menu-link" href="wishlist.html">
                        {/* -- wishlist  -- */}
                    <img className="navbar-link" src={wishlistIcon} alt="wishlist icon"/>

                    </a>
                </li>
                    
                <li className="list-inline">
                    <a className="flex-column menu-link" href="shopping-cart.html">
                        {/* -- cart -- */}
                        <img classNameName="navbar-link" src={cartIcon} alt="add to cart icon"/>
                    </a>
                </li>    
            </ul>

        </nav>
    </>
  )
}
