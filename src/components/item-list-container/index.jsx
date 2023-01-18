import React from "react";
import './style.css'
import CartItem from "../cart-item";
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({onClose, isOpen}) => {

    const navigate = useNavigate();
    const onHandlerClick = () => {
        onClose();
        navigate(`/cart`);
    }

    let items;

    if (localStorage['ch_products_cart'] === undefined) {
        items = <h4 className="empty-cart-message">Aún no se ha añadido ningún producto</h4>;
    }
    else {
        let products = JSON.parse(localStorage['ch_products_cart']);
        items = [];
        for (let product of products){
            items.push(<CartItem key={product.id} product={product}/>);
        }
    }

    return (
        <div className="item_list_container" id="item-list-container" style = {{ width: isOpen ? '400px' : '0'}}>

            <div className="close-button-container">
                <button onClick={onClose} className="close-button" style = {{ opacity: isOpen ? '100%' : '0%', visibility: isOpen ? 'visible' : 'hidden'}}><i className="bi bi-x"></i></button>
            </div>

            <div className="items-container">
                {items}
            </div>

            <div className="confirm-buy-button-container">
                <button onClick={onHandlerClick} className="confirm-buy-button" style = {{ opacity: isOpen ? '100%' : '0%', visibility: isOpen ? 'visible' : 'hidden'}}>Comprar</button>
            </div>

        </div>
    )
}

export default ItemListContainer