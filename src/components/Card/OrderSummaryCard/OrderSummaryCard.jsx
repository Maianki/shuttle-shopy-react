import React from "react";
import { useCartWishlist } from "../../../context";
import {
  calculateTotalAmount,
  calculateTotalDiscount,
  calculateDeliveryCharges,
} from "../../../utils/cart-and-wishlist-functions";
import "./order-summary-card.css";

export function OrderSummaryCard() {
  const {
    cartWishlist: { cart },
  } = useCartWishlist();

  const totalPrice = calculateTotalAmount(cart);
  const totalDiscount = calculateTotalDiscount(cart);
  const deliveryCharges = calculateDeliveryCharges(totalPrice);

  const totalAmount =
    totalPrice - (totalPrice - totalDiscount) + deliveryCharges;

  return (
    <div className='card card-order-summary'>
      <div className='card-header'>
        <h2 className='text-primary text-center'>ORDER SUMMARY</h2>
      </div>
      <div className='card-body'>
        <ul>
          <li className='list-unstyled order-price order-item flex-row'>
            <p className='order-item-text'>Price ({cart.length} Items)</p>
            <p className='order-item-text'>&#8377; {totalPrice}</p>
          </li>
          <li className='list-unstyled order-discount order-item flex-row'>
            <p className='order-item-text'>Discount</p>
            <p className='order-item-text text-primary order-summary-htext'>
              - &#8377; {totalPrice - totalDiscount}
            </p>
          </li>
          <li className='list-unstyled order-delivery-charge order-item flex-row'>
            <p className='order-item-text'>Delivery Charges</p>
            <p className='order-item-text order-summary-htext'>
              {deliveryCharges ? <span>- &#8377;</span> : ""}
              {deliveryCharges ? deliveryCharges : `FREE`}
            </p>
          </li>
          <li className='list-unstyled order-item flex-row total-price'>
            <p className='text-bold-500'>TOTAL AMOUNT</p>
            <p className='text-bold-500'>&#8377; {totalAmount}</p>
          </li>
        </ul>
      </div>
      <div className='card-footer'>
        <p className='text-sm text-center text-highlight'>
          * You will save &#8377; {totalPrice - totalAmount} on this order
        </p>
        <button className='card-btn btn btn-primary'>
          <span className='md-ht-1'>PLACE YOUR ORDER</span>
        </button>
      </div>
    </div>
  );
}
