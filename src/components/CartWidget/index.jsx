import React from "react";
import './style.css'

export const CartWidget = () => {
    return (
        <div className="cart_container">
            <h2><i className="bi bi-cart cart"></i></h2>
            <div className="cart_num">0</div>
        </div>
    )
}

export default CartWidget;