import React, { useEffect } from "react"
import './style.css'

const CartItem = (props) => {

    let product = props.product;

    let purchases = JSON.parse(localStorage.getItem('ch_products_cart'));
    let purchase;

        for (let el of purchases){
            if (el.id == product.id){
                purchase = el;
            }
        }

    useEffect(() => {
        document.getElementById('remove-' + purchase.id).addEventListener('click', () => {
            delete purchases[purchases.indexOf(purchase)];
            purchases = purchases.filter(item => item != undefined);
            localStorage.setItem('ch_products_cart', JSON.stringify(purchases));
            window.dispatchEvent( new Event('storage') );
        })
    });

    

    return (
        <div className="cart-item-container">
            <h4 className="item-title">{purchase.name}</h4>
            <div className="horizontal-container">
                <img className="item-image" src={purchase.image}/>
                <div className="item-price">
                    <h4 className="item-price-text">${parseInt(purchase.price) * parseInt(purchase.qty)}</h4>
                    <div className="item-change-qty horizontal-container">
                        <button type="button" className="item-qty-btn">-</button>
                        <p id="qty">{purchase.qty}</p>
                        <button type="button" className="item-qty-btn">+</button>
                    </div>
                </div>
                <div className="close-button-container">
                    <button id={'remove-' + purchase.id} className="item-remove-button"><i className="bi bi-x"></i></button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;