import React from "react";

export function CategoriesFilter() {
  return (
    <li className='flex-column products-filter-type'>
      <h3 className='filter-heading'>Categories</h3>
      <div className='form-check'>
        <input type='checkbox' value='racket' id='rackets' />
        <label className='form-label-inline' htmlFor='rackets'>
          Rackets
        </label>
      </div>

      <div className='form-check'>
        <input type='checkbox' value='shuttle' id='shuttles' />
        <label className='form-label-inline' htmlFor='shuttles'>
          Shuttles
        </label>
      </div>

      <div className='form-check'>
        <input type='checkbox' value='bag' id='badminton-bags' />
        <label className='form-label-inline' htmlFor='badminton-bags'>
          Badminton Bags
        </label>
      </div>

      <div className='form-check'>
        <input type='checkbox' value='shoes' id='badminton-shoes' />
        <label className='form-label-inline' htmlFor='badminton-shoes'>
          Badminton Shoes
        </label>
      </div>
    </li>
  );
}
