import React from "react";

export function PriceRangeFilter() {
  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>Price</h3>
      <input className='price-slider' type='range' min='1' max='10000' />
      <div className='flex-row price-slider-range'>
        <p className='text-sm'>1</p>
        <p className='text-sm'>10000</p>
      </div>
    </li>
  );
}
