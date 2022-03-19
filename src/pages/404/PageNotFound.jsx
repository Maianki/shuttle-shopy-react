import React from 'react'
import "./pageNotFound.css"
import pageNotFound from "../../assets/images/404.svg"
import { useDocumentTitle } from "../../hooks";

export function PageNotFound() {
  useDocumentTitle("Page not found");
  return (
    <div className='show-404'>
      <h1>You took a wrong turn</h1>
      <img
        className='show-not-found responsive-img'
        src={pageNotFound}
        alt='page not found'
      ></img>
    </div>
  );
}
