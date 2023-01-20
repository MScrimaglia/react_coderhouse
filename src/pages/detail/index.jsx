import React, {useEffect, useState} from "react"
import './style.css'
import { useParams } from "react-router-dom";
import BuyButton from '../../components/buy-button';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const Detail = () => {

    const {name} = useParams() || {};
    const [loading, isLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const product_collection = query(collection(db, 'products'), where('name', '==', name));
        getDocs(product_collection)
        .then((snapshot) => {
            const result = snapshot.docs.map((doc) => (doc.data()));
            setProduct(result[0]);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            isLoading(false);
        })
    }
    ,[name])

    if (loading) {return <h4>Cargando...</h4>}

    return (
        <div className="detail-container">

            <h1 className='detail-title'>{product.name}</h1>

            <div className="horizontal-flex-container">

                <div className="image-container"><img src={product.image} alt={product.name}></img></div>

                <div className="product-details">
                    <div className="product-description">
                        <h3>Descripción:</h3>
                        <p>{product.description}</p>
                    </div>
                    <BuyButton product={product}/>
                </div>

            </div>

        </div>
    );
}

export default Detail;