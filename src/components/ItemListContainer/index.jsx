import React from "react";
import './style.css'

const ItemListContainer = (props) => {
    return (
        <div className="item_list_container">
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer