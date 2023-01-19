import React, {useState} from "react";
import CartItem from "../../components/cart-item";
import './style.css'

const Cart = () => {

    let items;
    const [total_price, setTotalPrice] = useState(0);

    if (localStorage['ch_products_cart'] === undefined || localStorage['ch_products_cart'] === '[]') {
        items = <h4 className="empty-cart-message">Aún no se ha añadido ningún producto</h4>;
        return (
            <div>
                <h1>Carrito</h1>
                <div className="final-purchase-items">
                    {items}
                </div>
            </div>
        )
    }
    else {
        let products = JSON.parse(localStorage['ch_products_cart']);
        items = [];
        for (let product of products){
            items.push(<CartItem key={product.id} product={product}/>);
        }
        items.push(<h3 key='total_price' id="total_price">Total: ${total_price}</h3>);
    }

    window.addEventListener('storage', () => {
        let total = 0;
        for (let product of JSON.parse(localStorage['ch_products_cart'])){
            total += product.price * product.qty;
        }
        setTotalPrice(total);
    });

    return (
        <div>
            <h1>Carrito</h1>
            <div className="final-purchase-items">
                {items}
            </div>
            <div className="confirm-buy-button-container">
                <button className="cart-buy-button">Comprar</button>
            </div>
        </div>
    )
}

export default Cart;