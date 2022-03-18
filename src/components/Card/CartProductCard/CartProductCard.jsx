import React from "react";
import { BiHeartFill, BiTrashFill } from "../../../assets/icons";
import "./cart-product-card.css";

export function CartProductCard({
  badge,
  img,
  isBtnSaveToWishlist = false,
  originalPrice,
  name,
  discountedPrice,
  discountPercent,
  icon,
  ...rest
}) {
  return (
    <div className='card align-items-center card-horizontal'>
      <div className='card-header'>
        <img className='card-img card-horizontal-img' src={img} alt={name} />
        <span className='card-badge badge'>{badge}</span>
      </div>
      <div className='md-ht-1 card-body'>
        <h3>{name}</h3>
        <p className='md-ht-1'>
          {discountedPrice}
          <span className='card-discount'>
            <span className='original-price md-ht-1'>{originalPrice} </span>(
            {discountPercent}% OFF)
          </span>
        </p>
        <div className='card-horizontal-footer'>
          <div className='flex-row btn-quantity'>
            <button className='btn-quantity-plus'>+</button>
            <input type='number' className='btn-quantity-input' value='1' />
            <button className='btn-quantity-minus'>-</button>
            <button className='btn btn-outline-primary'>
              <BiTrashFill />
            </button>
          </div>

          <button className='card-horizontal-btn btn btn-primary'>
            <BiHeartFill />
            <span className='md-ht-1'>SAVE TO WISHLIST</span>
          </button>
        </div>
      </div>
    </div>
  );
}
