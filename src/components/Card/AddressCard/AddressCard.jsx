import React from "react";
import "./addresscard.css";

export function AddressCard() {
  return (
    <div className='address-card'>
      <div className='form-check md-vt-1'>
        <input
          className='form-check-input'
          type='radio'
          name='exampleradio'
          id='exampleradio'
          value='option1'
          checked
        />
        <label className='form-label-inline' for='exampleradio'>
          Example radio
        </label>
      </div>
    </div>
  );
}
