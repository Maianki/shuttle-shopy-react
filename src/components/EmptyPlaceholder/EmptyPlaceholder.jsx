import React from "react";
import { openBox } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import "./empty-placeholder.css";

function EmptyPlaceholder() {
  const { pathname } = useLocation();
  return (
    <div className='empty-section'>
      <img
        src={openBox}
        className='responsive-img empty-section-img'
        alt='empty box'
      />

      {pathname === "/cart" || pathname === "/wishlist" ? (
        <Link to='/shop-now' className='btn btn-primary btn-naviagte-shop-now'>
          Shop Now
        </Link>
      ) : (
        <h2 className={`text-gray md-btm-2 empty-section-description`}>
          No products to display!
        </h2>
      )}
    </div>
  );
}

export { EmptyPlaceholder };
