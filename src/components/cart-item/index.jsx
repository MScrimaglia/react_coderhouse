import React from "react"
import './style.css'

const cartItem = (props) => {

    let product = props.product;

    let purchases = JSON.parse(localStorage.getItem('ch_products_cart'));
    let purchase;

        for (let el of purchases){
            if (el.id == product.id){
                purchase = el;
            }
        }

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
                    <button className="item-close-button"><i className="bi bi-x"></i></button>
                </div>
            </div>
        </div>
    );
}

export default cartItem;