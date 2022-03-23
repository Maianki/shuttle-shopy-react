import axios from "axios";
import React from "react";
import { BiHeart, BiHeartFill, FaSolidStar } from "../../../assets/icons";
import { useAuth, useCartWishlist } from "../../../context";
import {
  isInCart,
  isInWishlist,
} from "../../../utils/cart-and-wishlist-functions";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    auth: { encodedToken },
  } = useAuth();

  const {
    cartWishlistDispatcher,
    manageWishlist,
    cartWishlist: { cart, wishlist },
  } = useCartWishlist();

  const cartHandler = async (product) => {
    console.log("from handler", cart);

    if (cart.length > 0 && isInCart(cart, product._id)) {
      navigate("/cart");
    } else {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      const { cart: cartProducts } = response.data;
      cartWishlistDispatcher({ type: "UPDATE_CART", payload: cartProducts });
    }
  };

  const handleWishlist = () => {
    manageWishlist(product);
  };

  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} />
        <span className='card-badge badge'>{badge}</span>
        {isInWishlist(wishlist, _id) ? (
          <span
            className='card-dismiss btn-wishlist-fill'
            onClick={() => handleWishlist(product)}
          >
            <BiHeartFill />
          </span>
        ) : (
          <span
            className='card-dismiss btn-wishlist'
            onClick={() => handleWishlist(product)}
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
          onClick={() => cartHandler(product)}
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
