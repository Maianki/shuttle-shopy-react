import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer class="footer flex-column align-items-center">
            <ul class="list-unstyled">
                <li class="list-inline">CONTACT US</li>
                <li class="list-inline">SHIPPING</li>
                <li class="list-inline">RETURNS</li>
                <li class="list-inline">CAREERS</li>
                <li class="list-inline">PRIVACY</li>
                <li class="list-inline">TERMS</li>
            </ul>
    
            <p class="text-xs">&#169; 2021 - 2022 Shuttle Shopy | All rights reserved</p>
    
    </footer>
  )
}

export {Footer}