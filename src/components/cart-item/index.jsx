import React from "react"
import './style.css'
import { PRODUCTS } from '../../constants/data/products';

const cartItem = (props) => {

    let product = props.product;

    return (
        <div className="cart-item-container">
            <h3>{product.name}</h3>
        </div>
    );
}

export default cartItem;