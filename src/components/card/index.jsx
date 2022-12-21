import React from "react"
import './style.css'

const Card = ({product, onSelect}) => {
    const { id, category, description, image, name, price, stock } = product || {};
    
    return (
        <div className="card" onClick={() => onSelect(product)}>
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-stock">{stock} en stock</p>
            </div>
        </div>
        
    )
}

export default Card;