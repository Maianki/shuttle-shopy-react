import React from "react";
import { useProducts } from "../../context";
import { useParams } from "react-router-dom";
import "./single-product.css";

import { BiHeartFill, BiHeart, FaSolidStar } from "../../assets/icons";
import { useCartWishlist } from "../../context";
import { isInWishlist, isInCart } from "../../utils/cartAndWishlistFunctions";
import { throttle } from "../../utils/throttle";

export function SingleProduct() {
  const {
    manageWishlist,
    manageCart,
    cartWishlist: { cart, wishlist },
  } = useCartWishlist();

  const handleWishlist = () => {
    manageWishlist(product);
  };

  const { products } = useProducts();
  const { productId } = useParams();

  const product = products?.productsList?.find(({ id }) => productId === id);
  const cartHandler = () => {
    manageCart(product);
  };

  const throttledHandleWishlist = throttle(handleWishlist, 400);

  const throttledCartHandler = throttle(cartHandler, 400);

  return (
    <div className='single-product-main'>
      <div className=''>
        <div className='align-items-center card-horizontal card-single-product'>
          <div className='card-header'>
            <img
              className='single-product-img responsive-img card-horizontal-img'
              src={product?.img}
              alt={product?.name}
            />
            {isInWishlist(wishlist, product?._id) ? (
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
          <div className='md-ht-1 card-body single-product-card-body'>
            <h2>{product?.name}</h2>
            <p className='md-ht-1 single-product-price'>
              Rs. {product?.price?.discounted}
              <span className='card-discount'>
                <span className='original-price md-ht-1'>
                  Rs. {product?.price?.original}{" "}
                </span>
                ({product?.price?.discount}% OFF)
              </span>
            </p>
            <hr className='style-one'></hr>
            <div className='pd-ht-1'>
              <p className='single-product-description'>
                <span className='text-bold-700'>Description :</span>{" "}
                {product?.description}
              </p>
              <p className='single-product-availability'>
                <span className='text-bold-700'> Availability :</span>{" "}
                {product?.isOutOfStock ? (
                  <span>Out of stock</span>
                ) : (
                  <span>In stock</span>
                )}
                <div className='single-product-rating'>
                  <span>
                    <span className='text-bold-700'> Rating : </span>{" "}
                    {product?.rating} <FaSolidStar />
                  </span>
                </div>
              </p>
            </div>

            <div className='card-horizontal-footer'>
              <button
                className={
                  isInCart(cart, product?._id)
                    ? `card-btn btn btn-secondary`
                    : `card-btn btn btn-primary`
                }
                onClick={() => throttledCartHandler()}
              >
                <span className='md-ht-1'>
                  {isInCart(cart, product?._id) ? `GO TO CART` : `ADD TO CART`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
