import React, { useMemo } from "react";
import { BiHeart, BiHeartFill, FaSolidStar } from "../../../assets/icons";
import { useCartWishlist } from "../../../context";
import {
  isInCart,
  isInWishlist,
} from "../../../utils/cartAndWishlistFunctions";
import { throttle } from "../../../utils/throttle";

function ProductCard({
  product,
  product: {
    _id,
    badge,
    img,
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
  const {
    manageWishlist,
    manageCart,
    cartWishlist: { cart, wishlist },
  } = useCartWishlist();

  const cartHandler = () => {
    manageCart(product);
  };

  const handleWishlist = () => {
    manageWishlist(product);
  };

  const throttledHandleWishlist = throttle(handleWishlist, 400);

  const throttledCartHandler = throttle(cartHandler, 400);

  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} />
        <span className='card-badge badge'>{badge}</span>
        {isInWishlist(wishlist, _id) ? (
          <span
            className='card-dismiss btn-wishlist-fill'
            onClick={() => throttledHandleWishlist()}
          >
            <BiHeartFill />
          </span>
        ) : (
          <span
            className='card-dismiss btn-wishlist'
            onClick={() => throttledHandleWishlist()}
          >
            <BiHeart />
          </span>
        )}
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
        <button
          className={
            isInCart(cart, product._id)
              ? `card-btn btn btn-secondary`
              : `card-btn btn btn-primary`
          }
          onClick={() => throttledCartHandler()}
        >
          <i className='fas fa-cart-plus'></i>
          <span className='md-ht-1'>
            {isInCart(cart, product._id) ? `GO TO CART` : `ADD TO CART`}
          </span>
        </button>
      </div>
    </div>
  );
}

export { ProductCard };
