import React from "react"
import './style.css'
import { useParams } from "react-router-dom";

const Detail = () => {

    const {name} = useParams() || {};

    return (
        <div className="detail-container">
            {name}
        </div>
    );
}

export default Detail;