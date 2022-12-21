import React from 'react';
import './style.css';
import { PRODUCTS } from '../../constants/data/products';
import { Card } from '../../components';

const Home = () => {
    
    return (
        <div className='home-container'>
            <h1>Productos</h1>
            <div className='products-container'>
                {PRODUCTS.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;