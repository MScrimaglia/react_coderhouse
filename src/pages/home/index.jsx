import React, {useEffect, useState} from 'react';
import './style.css';
import { Card } from '../../components';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Home = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {  
        navigate(`/product/${product.name}`);
    }
    const [loading, isLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const product_collection = collection(db, 'products');
        getDocs(product_collection)
        .then((snapshot) => {
            const result = snapshot.docs.map((doc) => (doc.data()));
            setProducts(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            isLoading(false);
        })
    }
    ,[])

    if (loading) {return <h4>Cargando...</h4>}

    return (
        <div className='home-container'>
            <h1>Productos</h1>
            <div className='products-container'>
                {products.map((product) => (
                    <Card product={product} key={product.id} onSelect={onHandlerSelect} />
                ))}
            </div>
        </div>
    );
}

export default Home;