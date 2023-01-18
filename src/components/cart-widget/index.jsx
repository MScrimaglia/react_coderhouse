import React, { useState, useEffect } from "react";
import './style.css'

export const CartWidget = (props) => {

    const [qty, setQty] = useState(0);

    let items = JSON.parse(localStorage.getItem('ch_products_cart'));

    useEffect(() => {
        console.log('effect!');
        if (!items) {
            setQty(0);
        }
        else {
            setQty(items.length);
        }
      }, []);

    return (
        <div className="cart_container" onClick={props.onClickHandler}>
            <h2><i className="bi bi-cart cart"></i></h2>
            <div className="cart_num">{qty}</div>
        </div>
    )
}

export default CartWidget;