import React from "react";
import './style.css'

const ItemListContainer = ({items, onClose, isOpen}) => {
    return (
        <div className="item_list_container" style = {{ width: isOpen ? '25%' : '0'}}>
            <button onClick={onClose} className="close-button" style = {{ opacity: isOpen ? '100%' : '0%', visibility: isOpen ? 'visible' : 'hidden'}}><i className="bi bi-x"></i></button>
            {items}
        </div>
    )
}

export default ItemListContainer