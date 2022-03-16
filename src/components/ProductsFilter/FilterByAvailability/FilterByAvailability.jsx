import React from "react";

export function FilterByAvailability() {
  return (
    <li className='flex-column md-ht-1'>
      <h3 className='filter-heading'>Availability</h3>
      <div className='form-check'>
        <input type='checkbox' value='out-of-stock' id='out-of-stock' />
        <label className='form-label-inline' htmlFor='out-of-stock'>
          Include out of stock
        </label>
      </div>

      <div className='form-check'>
        <input type='checkbox' value='cash on delivery' id='cod' />
        <label className='form-label-inline' htmlFor='cod'>
          Cash on delivery
        </label>
      </div>

      <div className='form-check'>
        <input type='checkbox' value='all-items' id='all-items' />
        <label className='form-label-inline' htmlFor='all-items'>
          All items
        </label>
      </div>
    </li>
  );
}
