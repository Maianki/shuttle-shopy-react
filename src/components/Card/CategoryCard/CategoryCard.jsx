import React from 'react'
import { Link } from "react-router-dom";
import { useProducts } from "../../../context/products-context";

function CategoryCard({ category: { categoryName, img } }) {
  const { productsDispatcher, initialState } = useProducts();
  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={categoryName} />
      </div>
      <div className='card-body card-overlay-text btn btn-primary'>
        {categoryName}
      </div>
      <div className='card-footer'>
        <Link to='/shop-now' className='btn-category-card'>
          <button
            className='btn btn-primary'
            onClick={() =>
              productsDispatcher({
                type: "setCategoryFromHome",
                payload: {
                  initialState,
                  categoryName,
                },
              })
            }
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export {CategoryCard}