import React from "react";
import { BiHeartFill, BiTrashFill } from "../../../assets/icons";
import axios from "axios";
import { useAuth, useCartWishlist } from "../../../context";
import { isInWishlist } from "../../../utils/cart-and-wishlist-functions";
import "./cart-product-card.css";

export function CartProductCard({
  product,
  product: {
    _id,
    badge,
    img,
    name,
    qty,
    price: {
      original: originalPrice,
      discounted: discountedPrice,
      discount: discountPercent,
    },
  },
}) {
  const {
    auth: { encodedToken },
  } = useAuth();

  const {
    cartWishlistDispatcher,
    manageWishlist,
    cartWishlist: { wishlist },
  } = useCartWishlist();

  const handleRemoveFromCart = async (productid) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productid}`, {
        headers: { authorization: encodedToken },
      });
      console.log("from delete handler", response);
      const { cart } = response.data;
      cartWishlistDispatcher({ type: "UPDATE_CART", payload: cart });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWishlist = () => {
    manageWishlist(product);
  };

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
            <input type='number' className='btn-quantity-input' value={qty} />
            <button className='btn-quantity-minus'>-</button>
            <button
              className='btn btn-outline-primary'
              onClick={() => handleRemoveFromCart(_id)}
            >
              <BiTrashFill />
            </button>
          </div>

          <button
            className='card-horizontal-btn btn btn-primary'
            onClick={handleWishlist}
          >
            <BiHeartFill />
            <span className='md-ht-1'>
              {isInWishlist(wishlist, product._id)
                ? `WISHLISTED`
                : `SAVE TO WISHLIST`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}