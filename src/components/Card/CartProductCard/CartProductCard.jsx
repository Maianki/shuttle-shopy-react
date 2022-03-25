import React from "react";
import { BiHeartFill, BiTrashFill } from "../../../assets/icons";
import { useCartWishlist } from "../../../context";
import { isInWishlist } from "../../../utils/cart-and-wishlist-functions";
import "./cart-product-card.css";

export function CartProductCard({
  product,
  product: {
    _id,
    img,
    name: productName,
    qty,
    price: {
      original: originalPrice,
      discounted: discountedPrice,
      discount: discountPercent,
    },
  },
}) {
  const {
    manageDeleteItemIncart,
    manageWishlist,
    manipulateProductQtyIncart,
    cartWishlist: { wishlist },
  } = useCartWishlist();

  const handleRemoveFromCart = (productid) => {
    manageDeleteItemIncart(productid);
  };

  const handleWishlist = () => {
    manageWishlist(product);
  };

  const handleQty = (productId, operation) => {
    manipulateProductQtyIncart(productId, operation);
  };

  return (
    <div className='card align-items-center card-horizontal'>
      <div className='card-header'>
        <img
          className='card-img card-horizontal-img'
          src={img}
          alt={productName}
        />
      </div>
      <div className='md-ht-1 card-body'>
        <h3>{productName}</h3>
        <p className='md-ht-1'>
          Rs. {discountedPrice}
          <span className='card-discount'>
            <span className='original-price md-ht-1'>Rs. {originalPrice} </span>
            ({discountPercent}% OFF)
          </span>
        </p>
        <div className='card-horizontal-footer'>
          <div className='flex-row btn-quantity'>
            <button
              className='btn-quantity-plus'
              onClick={() => handleQty(_id, "increment")}
            >
              +
            </button>

            <div className='quantity-display'>{qty}</div>
            <button
              className='btn-quantity-minus'
              onClick={() => handleQty(_id, "decrement")}
              disabled={qty <= 1}
            >
              -
            </button>
            <button
              className='btn btn-outline-primary btn-remove-product'
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