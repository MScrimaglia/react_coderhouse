import React from "react"
import './style.css'
import { useParams } from "react-router-dom";

const Detail = () => {

    const {id} = useParams() || {};

    return (
        <div className="detail-container">
            
        </div>
    );
}

export default Detail;