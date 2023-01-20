import React, {useState} from "react";
import CartItem from "../../components/cart-item";
import { useNavigate } from 'react-router-dom';
import './style.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {

    let items;
    let total = 0;
    const navigate = useNavigate();

    if (!(localStorage['ch_products_cart'] === undefined || localStorage['ch_products_cart'] === '[]')){
        for (let product of JSON.parse(localStorage['ch_products_cart'])){
            total += product.price * product.qty;
        }
    }

    const [total_price, setTotalPrice] = useState(total);

    const submitHandler = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        let products = JSON.parse(localStorage['ch_products_cart']);
            items = [];
            for (let product of products){
                items.push(product);
            }
        const order = {
            buyer: {name: name, email: email, phone: phone},
            items: items,
            total: total_price
        }
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then((docRef) => {
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: 'Compra exitosa!',
                text: 'Orden de compra: ' + docRef.id,
                icon: 'success',
                confirmButtonText: 'Cerrar'
                })

            localStorage.removeItem('ch_products_cart');
            window.dispatchEvent( new Event('storage') );
            navigate(`/`);
        });
    }

    window.addEventListener('storage', () => {
        let total = 0;
        if(localStorage['ch_products_cart'] !== undefined && localStorage['ch_products_cart'] !== '[]'){
            for (let product of JSON.parse(localStorage['ch_products_cart'])){
                total += product.price * product.qty;
            }
        }

        setTotalPrice(total);
    });

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

    let products = JSON.parse(localStorage['ch_products_cart']);
    items = [];
    for (let product of products){
        items.push(<CartItem key={product.id} product={product}/>);
    }
    items.push(<h3 key='total_price' id="total_price">Total: ${total_price}</h3>);


    return (
        <div>
            <h1>Carrito</h1>
            <div className="final-purchase-items">
                {items}
            </div>
            <div>
                <form className="user-data-form" onSubmit={submitHandler}>
                    <div className="form-fields">
                        <label>
                            <h5>Nombre completo:</h5>
                            <input placeholder="Ingrese su nombre completo..." type="text" required/>
                        </label>
                        <label>
                            <h5>Email:</h5>
                            <input placeholder="Ingrese su email..." type="email" required/>
                        </label>
                        <label>
                            <h5>Número de telefono:</h5>
                            <input placeholder="Ingrese su número de telefono..." type="number" required/>
                        </label>
                    </div>
                    <div className="cart-buy-button-container">
                        <button type="submit" className="cart-buy-button">Comprar</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default Cart;