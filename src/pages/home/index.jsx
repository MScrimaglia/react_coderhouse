import React from 'react';
import './style.css';
import { PRODUCTS } from '../../constants/data/products';
import { Card } from '../../components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {  
        navigate(`/product/${product.name}`, { state: product});
    }
    
    return (
        <div className='home-container'>
            <h1>Productos</h1>
            <div className='products-container'>
                {PRODUCTS.map((product) => (
                    <Card product={product} key={product.id} onSelect={onHandlerSelect} />
                ))}
            </div>
        </div>
    );
}

export default Home;