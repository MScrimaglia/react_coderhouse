import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart, Categoria } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/product/:name" element={<Detail />} />
            <Route exact path="/categoria/:name" element={<Categoria />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
} 

export default Router;