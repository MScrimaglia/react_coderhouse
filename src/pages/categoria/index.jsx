import React from 'react';
import './style.css';
import { PRODUCTS } from '../../constants/data/products';
import { Card } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Home = () => {
    const {name} = useParams() || {};
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {  
        navigate(`/product/${product.name}`, { state: product});
    }
    let products = [];

    for (let product of PRODUCTS){
        if (product.category == name){
            products.push(product);
        }
    }
    
    return (
        <div className='home-container'>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <div className='products-container'>
                {products.map((product) => (
                    (<Card product={product} key={product.id} onSelect={onHandlerSelect} />)
                ))}
            </div>
        </div>
    );
}

export default Home;