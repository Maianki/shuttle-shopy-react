import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <footer className='footer flex-column align-items-center'>
      <ul className='list-unstyled'>
        <Link to='/'>
          <li className='list-inline footer-li'>HOME</li>
        </Link>
        <Link to='/shop-now'>
          <li className='list-inline footer-li'>SHOP NOW</li>
        </Link>
        <Link to='/wishlist'>
          <li className='list-inline footer-li'>WISHLIST</li>
        </Link>
        <Link to='/cart'>
          <li className='list-inline footer-li'>CART</li>
        </Link>
      </ul>

      <p className='text-xs'>
        &#169; 2021 - 2022 Shuttle Shopy | All rights reserved
      </p>
    </footer>
  );
}

export {Footer}