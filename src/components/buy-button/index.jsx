import React, { useState } from "react"
import './style.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const BuyButton = (props) => { 

    let product = props.product;
    
    const [qty, setQty] = useState(1);

    const qtyDecreaseHandler = () => {
        if (!(qty <= 1)) {
            setQty(qty - 1);
        }
    }

    const buyButtonClickHandler = () => {

        if (localStorage.ch_products_cart === undefined){
            let cart_products = [];
            localStorage.setItem('ch_products_cart', JSON.stringify(cart_products));
        }

        let new_item = JSON.parse(localStorage.getItem('ch_products_cart'));

        for (let item in new_item){
            if (new_item[item].id === {product}.product.id){
                new_item[item].qty += qty;
                localStorage.setItem('ch_products_cart', JSON.stringify(new_item));
                window.dispatchEvent( new Event('storage') );
                const MySwal = withReactContent(Swal)

                MySwal.fire({
                    text: 'El producto se ha añadido al carrito',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                  })

                return;
            }
        }

        let new_purchase = {product}.product;
        new_item.push(new_purchase);
        new_item[new_item.length - 1]['qty'] = qty;
        localStorage.setItem('ch_products_cart', JSON.stringify(new_item));
        window.dispatchEvent( new Event('storage') );
        const MySwal = withReactContent(Swal)

                MySwal.fire({
                    text: 'El producto se ha añadido al carrito',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                  })
    }

    return (
    <div className="buy-button">
        <h2>${product.price * qty}</h2>
        <button type="button" className="button" onClick={() => buyButtonClickHandler()}>Agregar al carrito</button>
        <div className="change-qty horizontal-flex-container">
            <button onClick={() => qtyDecreaseHandler()} type="button" className="qty-btn">-</button>
            <p id="qty">{qty}</p>
            <button onClick={() => setQty(qty + 1)} type="button" className="qty-btn">+</button>
        </div>
    </div>
)}

export default BuyButton