import React from "react";
import './style.css'
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({items, onClose, isOpen}) => {

    const navigate = useNavigate();
    const onHandlerClick = () => {
        onClose(); 
        navigate(`/cart`);
    }

    return (
        <div className="item_list_container" style = {{ width: isOpen ? '25%' : '0'}}>
            <button onClick={onClose} className="close-button" style = {{ opacity: isOpen ? '100%' : '0%', visibility: isOpen ? 'visible' : 'hidden'}}><i className="bi bi-x"></i></button>
            {items}
            <button onClick={onHandlerClick} className="buy-button" style = {{ opacity: isOpen ? '100%' : '0%', visibility: isOpen ? 'visible' : 'hidden'}}><p>Comprar</p></button>
        </div>
    )
}

export default ItemListContainer