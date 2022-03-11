import React from 'react'

function FeaturesCard({title,description,icon,children}) {
  return (
    <>
        <div className="card align-items-center">
                <h3>{title}</h3>
                <p className="text-center text-sm md-btm-1">{description}</p>
        
                <div className="card-footer align-items-center">
                   <span style={{fontSize:"3em"}}>{icon}</span> 
                </div>
        </div>
    </>
    )
}

export {FeaturesCard}