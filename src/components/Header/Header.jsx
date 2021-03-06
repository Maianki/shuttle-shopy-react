import React from 'react'
import "./header.css"
import heroImg from "../../assets/images/hero.png"
import {Link} from "react-router-dom"

export function Header() {
  return (
    // -- hero section --
    <header className="hero md-btm-3">

        <img className="responsive-img hero-img" src={heroImg} alt="hero banner"/>
       
        <div className="hero-img-overlay flex-column">
            <h2 className="hero-heading">Your ultimate stop to buy all</h2>
            <h2 className="hero-heading"> badminton accessories</h2>
            <Link className="btn btn-outline-primary hero-cta text-bold-500 text-center" to="shop-now">Shop Now</Link>
        </div>

    </header>
  )
}