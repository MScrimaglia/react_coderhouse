import React from "react"
import './style.css'
import { useParams } from "react-router-dom";
import { PRODUCTS } from '../../constants/data/products';
import BuyButton from '../../components/buy-button';

const Detail = () => {

    const {name} = useParams() || {};

    let product;

    for (let item of PRODUCTS){
        if (item.name === name){
            product = item;
            break;
        }
    }

    return (
        <div className="detail-container">

            <h1 className='detail-title'>{product.name}</h1>

            <div className="horizontal-flex-container">

                <div className="image-container"><img src={product.image} alt={product.name}></img></div>

                <div className="product-details">
                    <div className="product-description">{product.description}</div>
                    <BuyButton />
                </div>

            </div>

        </div>
    );
}

export default Detail;