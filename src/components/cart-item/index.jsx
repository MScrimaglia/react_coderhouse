import React, { useEffect, useState } from "react"
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

    const [item_qty, setItemQty] = useState(purchase.qty);

    window.addEventListener('storage', () => {
        purchases = JSON.parse(localStorage.getItem('ch_products_cart'));

        for (let el of purchases){
            if (el.id == product.id){
                purchase = el;
            }
        }
        setItemQty(purchase.qty);
        console.log(purchase.qty);
    })

    const removeHandler = () => {
        delete purchases[purchases.indexOf(purchase)];
        purchases = purchases.filter(item => item != undefined);
        localStorage.setItem('ch_products_cart', JSON.stringify(purchases));
        window.dispatchEvent( new Event('storage') );
    }

    const subtractHandler = () => {
        if (purchase.qty <= 1) {return;}
        purchase.qty -= 1;
        purchases[purchases.indexOf(purchase)] = purchase;
        localStorage.setItem('ch_products_cart', JSON.stringify(purchases));
        setItemQty(purchase.qty);
        window.dispatchEvent( new Event('storage') );
    }

    const addHandler = () => {
        purchase.qty += 1;
        purchases[purchases.indexOf(purchase)] = purchase;
        localStorage.setItem('ch_products_cart', JSON.stringify(purchases));
        setItemQty(purchase.qty);
        window.dispatchEvent( new Event('storage') );
    }

    

    return (
        <div className="cart-item-container">
            <h4 className="item-title">{purchase.name}</h4>
            <div className="horizontal-container">
                <img className="item-image" src={purchase.image}/>
                <div className="item-price">
                    <h4 className="item-price-text">${parseInt(purchase.price) * parseInt(purchase.qty)}</h4>
                    <div className="item-change-qty horizontal-container">
                        <button id={'subtract-' + purchase.id} onClick={subtractHandler} type="button" className="item-qty-btn">-</button>
                        <p id="qty">{item_qty}</p>
                        <button id={'add-' + purchase.id} onClick={addHandler} type="button" className="item-qty-btn">+</button>
                    </div>
                </div>
                <div className="close-button-container">
                    <button id={'remove-' + purchase.id} onClick={removeHandler} className="item-remove-button"><i className="bi bi-x"></i></button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;