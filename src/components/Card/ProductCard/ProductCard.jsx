import React from 'react'
import { BiHeart, BiXCircle, FaSolidStar } from "../../../assets/icons";

function ProductCard({
  product: {
    badge,
    img,
    isDismissBtn = false,
    description,
    price: {
      original: originalPrice,
      discounted: discountedPrice,
      discount: discountPercent,
    },
    name,
    rating,
  },
}) {
  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} />
        <span className='card-badge badge'>{badge}</span>
        {isDismissBtn && (
          <span className='card-dismiss'>
            <BiXCircle />
          </span>
        )}
        <span className='card-dismiss btn-wishlist'>
          <BiHeart />
        </span>
      </div>
      <div className='card-body'>
        <h3>{name}</h3>
        <p className='card-description'>{description}</p>
        <p className='md-ht-1 md-btm-1'>
          Rs. {discountedPrice}{" "}
          <span className='card-discount'>
            <span className='original-price md-ht-1'> Rs. {originalPrice}</span>
            {`(${discountPercent}% OFF)`}
            <span className='product-rating text-xs text-bold-700'>
              {rating} <FaSolidStar />
            </span>
          </span>
        </p>
      </div>
      <div className='card-footer'>
        <button className='card-btn btn btn-primary'>
          <i className='fas fa-cart-plus'></i>
          <span className='md-ht-1'>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}

export {ProductCard}