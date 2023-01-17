import React from "react"
import './style.css'


const BuyButton = () => { return (
    <div className="buy-button">
        <button type="button" className="button">Comprar</button>
        <div className="change-qty horizontal-flex-container">
            <button type="button" className="qty-btn">-</button>
            <p id="qty">1</p>
            <button type="button" className="qty-btn">+</button>
        </div>
    </div>
)}

export default BuyButton