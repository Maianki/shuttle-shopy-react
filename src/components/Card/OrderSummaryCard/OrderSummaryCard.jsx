import React from "react";
import "./order-summary-card.css";

export function OrderSummaryCard() {
  return (
    <div className='card card-order-summary'>
      <div className='card-header'>
        <h2 className='text-primary text-center'>ORDER SUMMARY</h2>
      </div>
      <div className='card-body'>
        <ul>
          <li className='list-unstyled order-price order-item flex-row'>
            <p className='order-item-text'>Price (2 Items)</p>
            <p className='order-item-text'>2,698</p>
          </li>
          <li className='list-unstyled order-discount order-item flex-row'>
            <p className='order-item-text'>Discount</p>
            <p className='order-item-text text-primary'>-1000</p>
          </li>
          <li className='list-unstyled order-delivery-charge order-item flex-row'>
            <p className='order-item-text'>Delivery Charges</p>
            <p className='order-item-text'>500</p>
          </li>
          <li className='list-unstyled order-item flex-row total-price'>
            <p className='text-bold-500'>TOTAL AMOUNT</p>
            <p className='text-bold-500'>Rs 2198</p>
          </li>
        </ul>
      </div>
      <div className='card-footer'>
        <p className='text-sm text-center'>
          * You will save Rs 1000 on this order
        </p>
        <button className='card-btn btn btn-primary'>
          <span className='md-ht-1'>PLACE YOUR ORDER</span>
        </button>
      </div>
    </div>
  );
}
