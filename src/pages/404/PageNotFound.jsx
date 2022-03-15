import React from 'react'
import "./pageNotFound.css"
import pageNotFound from "../../assets/images/404.svg"
export function PageNotFound() {
  return (
    <div className='show-404'>
        <h1>You took a wrong turn</h1>
        <img className="show-not-found responsive-img" src={pageNotFound} alt="page not found"></img>
    </div>
  )
}
