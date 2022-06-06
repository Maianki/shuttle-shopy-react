import React, { useState } from "react";
import { Input } from "../../Form";
import { useAddress } from "../../../context";
import { useLocation } from "react-router-dom";

export function AddressEditCard({ currAddress }) {
  const { addNeWAddress, editAddress, isEditAddress } = useAddress();

  const { pathname } = useLocation();

  const initializeAddressDetails = () => {
    if (isEditAddress) {
      return { ...currAddress };
    } else {
      return {
        name: "",
        street: "",
        city: "",
        state: "",
        country: "India",
        pincode: "",
        phone: "",
      };
    }
  };

  const [addressDetails, setAddressDetails] = useState(
    initializeAddressDetails
  );

  const dummyData = {
    name: "Ankur",
    street: "Sec 9",
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India",
    pincode: "544099",
    phone: "9999999999",
  };

  const handleChange = (event) => {
    setAddressDetails((prev) => ({ ...prev, country: event.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (pathname === "/profile") {
      editAddress(addressDetails);
    } else {
      addNeWAddress(addressDetails);
    }
  };

  return (
    <form className='address-form' onSubmit={submitHandler}>
      <p className='text-lg text-bold-500'>Address form</p>
      <div className='form-set'>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          value={addressDetails.name}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <Input
          type='text'
          id='house-number'
          name='street'
          placeholder='Enter your house number/street'
          value={addressDetails.street}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <Input
          type='text'
          id='city'
          name='city'
          placeholder='Enter your city'
          value={addressDetails.city}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <Input
          type='text'
          id='state'
          name='state'
          placeholder='Enter your state'
          value={addressDetails.state}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <Input
          type='number'
          id='pincode'
          name='pincode'
          placeholder='Enter your pincode'
          value={addressDetails.pincode}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <Input
          type='number'
          id='phone-number'
          name='phone'
          placeholder='Enter your phone number'
          pattern='[0-9]{10}'
          value={addressDetails.phone}
          setUserDetails={setAddressDetails}
          userDetails={addressDetails}
        />
      </div>

      <div className='form-set'>
        <label className='form-label' htmlFor='country'>
          Country
        </label>
        <select
          className='form-input form-input-lg pd-1'
          id='country'
          value={addressDetails.country}
          onChange={handleChange}
        >
          <option value='India'>India</option>
          <option value='Albania'>Albania</option>
          <option value='Algeria'>Algeria</option>
          <option value='American Samoa'>American Samoa</option>
          <option value='Andorra'>Andorra</option>
          <option value='Argentina'>Argentina</option>
          <option value='Armenia'>Armenia</option>
          <option value='Aruba'>Aruba</option>
          <option value='Australia'>Australia</option>
          <option value='Austria'>Austria</option>
          <option value='Azerbaijan'>Azerbaijan</option>
          <option value='Bahamas'>Bahamas</option>
          <option value='Bahrain'>Bahrain</option>
          <option value='Bangladesh'>Bangladesh</option>
        </select>
      </div>

      <div className='flex-row '>
        <button
          className='btn btn-secondary form-btn text-center'
          onClick={(e) => {
            e.preventDefault();
            setAddressDetails((prev) => ({ ...prev, ...dummyData }));
          }}
        >
          Fill Dummy Data
        </button>
        <input
          type='submit'
          className='btn btn-primary form-btn text-center modal-btn'
          value='Save'
        />
      </div>
    </form>
  );
}
