import React, { useState } from "react"
import './style.css'


const BuyButton = () => { 
    
    const [qty, setQty] = useState(1);

    const qtyDecreaseHandler = () => {
        if (!(qty <= 1)) {
            setQty(qty - 1);
        }
    }

    return (
    <div className="buy-button">
        <button type="button" className="button">Comprar</button>
        <div className="change-qty horizontal-flex-container">
            <button onClick={() => qtyDecreaseHandler()} type="button" className="qty-btn">-</button>
            <p id="qty">{qty}</p>
            <button onClick={() => setQty(qty + 1)} type="button" className="qty-btn">+</button>
        </div>
    </div>
)}

export default BuyButton