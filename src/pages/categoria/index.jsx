import React, {useState, useEffect} from 'react';
import './style.css';
import { Card } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const Home = () => {
    const {category} = useParams() || {};
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, isLoading] = useState(true);
    

    useEffect(() => {
        const db = getFirestore();
        const product_collection = query(collection(db, 'products'), where('category', '==', category));
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
    ,[category])

    const onHandlerSelect = (product) => {  
        navigate(`/product/${product.name}`, { state: product});
    }

    if (loading) {return <h4>Cargando...</h4>}
    
    return (
        <div className='home-container'>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className='products-container'>
                {products.map((product) => (
                    (<Card product={product} key={product.id} onSelect={onHandlerSelect} />)
                ))}
            </div>
        </div>
    );
}

export default Home;