import React from 'react'

function CategoryCard({category,img}) {
  return (
      <>
        <div className="card align-items-center">
            <div className="card-header">
                <img className="card-img" src={img} alt="badminton racket"/>
            </div>
            <div className="card-body card-overlay-text btn btn-primary">
                {category}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Shop Now</button>
            </div>
        </div>
      </>
  )
}

export {CategoryCard}