import React from 'react'

function ProductCard({badge,img,description,isBtnSaveToWishlist=false,originalPrice,name,discountedPrice,discountPercent,icon}) {
  return (
    <>
        <div className="card align-items-center">
            <div className="card-header">
                <img className="card-img" src={img} alt={name}/>
                <span className="card-badge badge">{badge}</span>
            </div>
            <div className="card-body">
                <h3>{name}<span className= "btn btn-primary product-rating text-xs">4 {icon}</span></h3>
                <p className="card-description">{description}</p>
                <p className="md-ht-1 md-btm-1">Rs. {discountedPrice} <span className="card-discount"> 
                <span className="original-price md-ht-1"> Rs. {originalPrice}</span> {`(${discountPercent}% OFF)`}</span> </p>
            </div>
            <div className="card-footer">
                <button className="card-btn btn btn-primary"><i className="fas fa-cart-plus"></i>
                <span className="md-ht-1">ADD TO CART</span></button>
                {isBtnSaveToWishlist && <button className="card-btn btn btn-secondary"><i className="fas fa-heart"></i>
                    <span className="md-ht-1">SAVE TO WISHLIST</span></button>}
                  
            </div>
        </div>
    </>
  )
}

export {ProductCard}