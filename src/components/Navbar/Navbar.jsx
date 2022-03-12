import React from 'react'
import logo from "../../assets/images/shuttle-shopy-logo.png"
import wishlistIcon from "../../assets/images/heart.png"
import loginIcon from "../../assets/images/user.png"
import cartIcon from "../../assets/images/shopping-bag.png"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar flex-row">

        <a className="navbar-brand" href="/">
            <img className="responsive-img navbar-logo" 
            src={logo} alt="logo"/>
        </a>

        <form className="navbar-form form-label-inline">
            <input className="form-search navbar-form" 
            type="search" placeholder="Search" aria-label="Search"/>
        </form>

        <ul className="navbar-menu list-unstyled flex-row">
            <li className="list-inline">
                <a className="flex-row  btn btn-outline-secondary btn-shop-now" href="/">
                    {/* -- Shop Now -- */}
                    Shop now
                </a>
            </li>   
            <li className="list-inline">
                <a className="flex-column menu-link" href="/">
                    {/* -- login -- */}
                    <img className="navbar-link" src={loginIcon} alt="login icon"/>
                </a>
            </li>

            <li className="list-inline">
                <a className="flex-column menu-link" href="/">
                    {/* -- wishlist  -- */}
                <img className="navbar-link" src={wishlistIcon} alt="wishlist icon"/>

                </a>
            </li>
                
            <li className="list-inline">
                <a className="flex-column menu-link" href="/">
                    {/* -- cart -- */}
                    <img className="navbar-link" src={cartIcon} alt="add to cart icon"/>
                </a>
            </li>    
        </ul>

    </nav>
  )
}

export { Navbar }
