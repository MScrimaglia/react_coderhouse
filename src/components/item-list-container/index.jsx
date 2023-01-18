import React, {useState, useEffect} from "react";
import './style.css'
import CartItem from "../cart-item";
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({onClose, isOpen}) => {

    const navigate = useNavigate();
    const onHandlerClick = () => {
        onClose();
        navigate(`/cart`);
    }

    const [item_qty, setItemQty] = useState(0);

    let items;

    if (localStorage['ch_products_cart'] === undefined || localStorage['ch_products_cart'] === '[]') {
        items = <h4 className="empty-cart-message">Aún no se ha añadido ningún producto</h4>;
    }
    else {
        let products = JSON.parse(localStorage['ch_products_cart']);
        items = [];
        for (let product of products){
            items.push(<CartItem key={product.id} product={product}/>);
        }
    }
    
    window.addEventListener('storage', () => {setItemQty(JSON.parse(localStorage['ch_products_cart']).length);});

    return (
        <div className="item_list_container" id="item-list-container" style = {{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)'}}>

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