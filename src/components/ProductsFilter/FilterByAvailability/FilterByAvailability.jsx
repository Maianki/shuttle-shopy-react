import React from "react";
import { availabilityFilterData } from "../../../data/availability-filter-data";
export function FilterByAvailability() {
  return (
    <li className='flex-column md-ht-1'>
      <h3 className='filter-heading'>Availability</h3>
      {availabilityFilterData.map(({ id, availabilityType, value }) => {
        return (
          <div key={id} className='form-check'>
            <input type='checkbox' value={value} id={value} />
            <label className='form-label-inline' htmlFor={value}>
              {availabilityType}
            </label>
          </div>
        );
      })}
    </li>
  );
}
