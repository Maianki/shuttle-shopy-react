import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer className='footer flex-column align-items-center'>
      <ul className='list-unstyled'>
        <li className='list-inline'>CONTACT US</li>
        <li className='list-inline'>SHIPPING</li>
        <li className='list-inline'>RETURNS</li>
        <li className='list-inline'>CAREERS</li>
        <li className='list-inline'>PRIVACY</li>
        <li className='list-inline'>TERMS</li>
      </ul>

      <p className='text-xs'>
        &#169; 2021 - 2022 Shuttle Shopy | All rights reserved
      </p>
    </footer>
  );
}

export {Footer}