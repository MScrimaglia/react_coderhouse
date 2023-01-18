import React, { useState, useEffect } from "react";
import './style.css'

export const CartWidget = (props) => {

    const [qty, setQty] = useState(0);

    useEffect(() => {
        function checkItemCount() {
            let items = JSON.parse(localStorage.getItem('ch_products_cart'));

            if (!items) {
                setQty(0);
            }
            else {
                let item_count = 0;
                for (let item of items){
                    item_count += parseInt(item['qty']);
                }
                setQty(item_count);
            }
        }

        window.addEventListener('storage', () => checkItemCount());
        window.dispatchEvent( new Event('storage') );
        return () => {
            window.removeEventListener('storage', () => checkItemCount());
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